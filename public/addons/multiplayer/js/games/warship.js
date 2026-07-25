export function handleSocketUpdate(status, data, time){
	if(status == 'init'){
		toggleSocketLoader(false);
		socketData.socketGameLogs = [];
		gameLogsTxt.text = '';
		if(data[0].index == socketData.index){
			socketData.host = true;
		}
		
		for(var n=0; n<data.length; n++){
			if(data[n].index == socketData.index){
				socketData.gameIndex = n;
				if(!multiplayerSettings.enterName){
					showSocketNotification(textMultiplayerDisplay.playerNotification.replace('[USER]', data[n].username));
				}
			}
			$.board[n].playerName = data[n].username;
		}
		gameData.totalplayers = data.length;
		postSocketUpdate('select');
	}else if(status == 'select'){
		goPage('select');
		if(!socketData.host){
			gameLogsTxt.visible = true;
			toggleSocketLoader(true, textMultiplayerDisplay.waitingHost);
		}
	}else if(status == 'updateoption'){
		gameData.themeIndex = data.theme;
		gameData.sizeIndex = data.size;
		boardData = data.boardData;
		fillBoardOption('all');
	}else if(status == 'start'){
		socketData.loaded = [];
		gameLogsTxt.visible = false;
		toggleSocketLoader(false);
		goPage('game');
	}else if(status == 'ready'){
		var loadedIndex = socketData.loaded.indexOf(data.index);
		if(loadedIndex == -1){
			socketData.loaded.push(data.index);

			if(socketData.gameIndex != data.index){
				var targetShipArr = data.index == 0 ? gameData.shipA : gameData.shipB;
				for(var s=0; s<targetShipArr.length; s++){
					var thisShip = targetShipArr[s];
					resetGridShip(data.index, thisShip.data.grids);

					thisShip.rotation = data.ships[s].rotation;
					thisShip.data.grids = data.ships[s].grids;
					positionShip(thisShip);
				}
			}
		}

		if(socketData.loaded.length == gameData.totalplayers){
			if(socketData.host){
				postSocketUpdate('allready');
			}
		}
	}else if(status == 'allready'){
		socketData.loaded = [];
		updateBoardState(1);
	}else if(status == 'attack'){
		gameData.shotsArr = data.shots;
		attackMissile(data.targetBoard);
	}else if(status == 'placecomplete'){
		var loadedIndex = socketData.loaded.indexOf(data.index);
		if(loadedIndex == -1){
			socketData.loaded.push(data.index);
		}
		if(socketData.loaded.length == gameData.totalplayers){
			socketData.loaded = [];
			updateBoardState(5);
		}
	}
}