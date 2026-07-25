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
		gameData.pointIndex = data.pointIndex;
		gameData.domino.draw = data.draw;
		gameData.themeIndex = data.themeIndex;
		toggleDominoOptions(data.options);
	}else if(status == 'start'){
		socketData.loaded = [];
		goPage("game");
	}else if(status == 'ready'){
		var loadedIndex = socketData.loaded.indexOf(data);
		if(loadedIndex == -1){
			socketData.loaded.push(data);
		}
		
		if(socketData.loaded.length == gameData.players){
			if(socketData.host){
				var tilesArr = [];
				for(var n=0; n<gameData.tiles.length; n++){
					tilesArr.push(gameData.tiles[n].tileIndex);
				}
				postSocketUpdate('prepareplayers', tilesArr);
			}
		}
	}else if(status == 'prepareplayers'){
		gameData.tiles = [];
		for(var n=0; n<data.length; n++){
			gameData.tiles.push($.domino[data[n]]);
		}
		preparePlayers();
	}else if(status == 'drawpile'){
		getDrawPile(data);
	}else if(status == 'playermove'){
		socketData.loaded = [];
		placeTitle(data.tileIndex, data.highlightTileIndex, data.dir);
	}else if(status == 'playermove'){
		socketData.loaded = [];
		placeTitle(data.tileIndex, data.highlightTileIndex, data.dir);
	}else if(status == 'movecomplete'){
		var loadedIndex = socketData.loaded.indexOf(data);
		if(loadedIndex == -1){
			socketData.loaded.push(data);
		}

		if(socketData.loaded.length == gameData.players){
			if(socketData.host){
				postSocketUpdate('checkend');
			}
		}
	}else if(status == 'checkend'){
		socketData.loaded = [];
		checkGameEnd();
	}else if(status == 'resultcomplete'){
		var loadedIndex = socketData.loaded.indexOf(data);
		if(loadedIndex == -1){
			socketData.loaded.push(data);
		}

		if(socketData.loaded.length == gameData.players){
			socketData.loaded = [];
			startDomino();
		}
	}
}