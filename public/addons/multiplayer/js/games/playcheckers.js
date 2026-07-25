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
			$.players['gamePlayer'+ n].text = data[n].username;
			socketData.players.push({index:data[n].index, flipComplete:false})
		}
		gameData.totalplayers = data.length;
		postSocketUpdate('custom');
	}else if(status == 'custom'){
		gameData.custom.size = customSettings.sizeMin;
		goPage('custom');
		if(!socketData.host){
			gameLogsTxt.visible = true;
			toggleSocketLoader(true, textMultiplayerDisplay.waitingHost);
		}
	}else if(status == 'updatecustom'){
		gameData.custom.size = data.size;
		checkCustomSettings();
	}else if(status == 'players'){
		goPage('players');
		if(!socketData.host){
			gameLogsTxt.visible = true;
			toggleSocketLoader(true, textMultiplayerDisplay.waitingHost);
		}
	}else if(status == 'updateplayers'){
		gameData.icon = data.icon;
		gameData.switch = data.switch;
		gameData.icons = data.icons;
		displayPlayerIcon();
	}else if(status == 'start'){
		toggleSocketLoader(false);
		goPage('game');
		
		socketData.turn = false;
		if(data.index == socketData.index){
			socketData.turn = true;
			updateGameSocketLog(time + textMultiplayerDisplay.youStart);
			gameData.player = socketData.host == true ? 0 : 1;
		}else{
			updateGameSocketLog(time + textMultiplayerDisplay.playerStart.replace('[USER]',data.username));
			gameData.player = socketData.host == true ? 1 : 0;
		}
		displayPlayerTurn();
	}else if(status == 'updatetimer'){
		timeData.playerTimer = data.playerTimer;
		timeData.opponentTimer = data.opponentTimer;
		updateTimer();
	}else if(status == 'moveplayer'){
		gameData.pieceIndex = data.pieceIndex;
		movePlayer(data.row, data.column);
	}else if(status == 'checkboardresult'){
		socketData.players[data].flipComplete = true;
		var completeCount = 0;
		for(var n=0; n<socketData.players.length; n++){
			if(socketData.players[n].flipComplete){
				completeCount++;
			}
		}
		if(completeCount == socketData.players.length){
			if(socketData.turn){
				togglePlayer();
				postSocketUpdate('updatemovecomplete', {index:gameData.player});
			}
		}
	}else if(status == 'updatemovecomplete'){
		for(var n=0; n<socketData.players.length; n++){
			socketData.players[n].flipComplete = false;
		}

		socketData.turn = false;
		if(data.index == socketData.gameIndex){
			socketData.turn = true;
			updateGameSocketLog(time + textMultiplayerDisplay.yourTurn);
			gameData.player = socketData.host == true ? 0 : 1;
		}else{
			updateGameSocketLog(time + textMultiplayerDisplay.playerTurn.replace('[USER]',data.username));
			gameData.player = socketData.host == true ? 1 : 0;
		}
		gameData.moving = false;
		displayPlayerTurn();
	}
}