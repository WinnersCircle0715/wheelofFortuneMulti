export function handleSocketUpdate(status, data, time){
	if(status == 'init'){
		toggleSocketLoader(false);
		socketData.socketGameLogs = [];
		gameLogsTxt.text = '';
		if(data[0].index == socketData.index){
			socketData.host = true;
		}

		socketData.players = [];
		for(var n=0; n<data.length; n++){
			if(data[n].index == socketData.index){
				socketData.gameIndex = n;
				if(!multiplayerSettings.enterName){
					showSocketNotification(textMultiplayerDisplay.playerNotification.replace('[USER]', data[n].username));
				}
			}
			socketData.players.push({index:data[n].index, data:[], username:data[n].username});
		}
		
		gameData.totalplayers = data.length;
		if(socketData.host){
			postSocketUpdate('start');
		}
	}else if(status == 'start'){
		socketData.loaded = [];
		createPlayerCard();
		goPage('game');
	}else if(status == 'playercards'){
		var loadedIndex = socketData.loaded.indexOf(data.index);
		if(loadedIndex == -1){
			socketData.loaded.push(data.index);
			socketData.players[data.index].data = data.numbers;
		}

		if(socketData.loaded.length == gameData.totalplayers && socketData.host){
			startGame();
		}
	}else if(status == 'revealnumbers'){
		gameData.numbers_arr = data;
		startGame();
	}else if(status == 'dropballs'){
		dropBalls();
	}else if(status == 'revealballs'){
		revealBall();
	}else if(status == 'updateusernumbers'){
		socketData.players[data.index].data = data.numbers;
		checkOtherPlayersNumber();
	}else if(status == 'bingo'){
		socketData.winners = data;
		checkOtherPlayersBingo();
	}else if(status == 'nowinner'){
		endGame();
	}
}