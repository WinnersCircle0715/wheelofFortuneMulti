export function handleSocketUpdate(status, data, time){
	if(status == 'init'){
		toggleSocketLoader(false);
		socketData.socketGamelogs = [];
		if(typeof gameLogsTxt != 'undefined'){
			gameLogsTxt.text = '';
		}
		if(data[0].index == socketData.index){
			socketData.host = true;
		}

		gameData.names = [];
		for(var n=0; n<data.length; n++){
			gameData.names.push(data[n].username);
			if(data[n].index == socketData.index){
				socketData.gameIndex = n;
				if(!multiplayerSettings.enterName){
					showSocketNotification(textMultiplayerDisplay.playerNotification.replace('[USER]', data[n].username));
				}
			}
		}
		gameData.players = data.length;
		postSocketUpdate('options');
	}else if(status == 'options'){
		goPage('options');
		if(!socketData.host){
			gameLogsTxt.visible = true;
			toggleSocketLoader(true, textMultiplayerDisplay.waitingHost);
		}
	}else if(status == 'updateoptions'){
		gameData.sizeIndex = data.sizeIndex;
		gameData.raindowbead.spaceMode = data.spaceMode;
		gameData.themeIndex = data.themeIndex;
		toggleBoardOptions(data.option);
	}else if(status == 'start'){
		socketData.loaded = [];
		gameLogsTxt.visible = false;
		goPage("game");
	}else if(status == 'ready'){
		var loadedIndex = socketData.loaded.indexOf(data);
		if(loadedIndex == -1){
			socketData.loaded.push(data);
		}
		
		if(socketData.loaded.length == gameData.players){
			if(socketData.host){
				postSocketUpdate('startboard', gameData.fixedBoard);
			}
		}
	}else if(status == 'startboard'){
		socketData.loaded = [];
		gameData.fixedBoard = data;
		startBoard();
	}else if(status == 'trymovebead'){
		socketData.loaded = [];
		tryMoveBead(data.countIndex, data.dir);
	}else if(status == 'movebeadcomplete'){
		var loadedIndex = socketData.loaded.indexOf(data.index);
		if(loadedIndex == -1){
			socketData.loaded.push(data.index);
		}
		
		if(socketData.loaded.length == gameData.players){
			if(socketData.host){
				postSocketUpdate('playeractioncomplete', data.next);
			}
		}
	}else if(status == 'playeractioncomplete'){
		socketData.loaded = [];
		gameData.animating = false;
		if(data){
			nextPlayerTurn();
		}
		findPossibleMoves();
	}else if(status == 'resultcomplete'){
		var loadedIndex = socketData.loaded.indexOf(data);
		if(loadedIndex == -1){
			socketData.loaded.push(data);
		}

		if(socketData.loaded.length == gameData.players){
			socketData.loaded = [];
			startCards();
		}
	}
}