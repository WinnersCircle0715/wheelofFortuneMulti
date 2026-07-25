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
			gameData.names.push(data[n].username.toUpperCase());
			if(data[n].index == socketData.index){
				socketData.gameIndex = n;
				if(!multiplayerSettings.enterName){
					showSocketNotification(textMultiplayerDisplay.playerNotification.replace('[USER]', data[n].username));
				}
			}
		}
		gameData.totalplayers = data.length;
		postSocketUpdate('option');
	}else if(status == 'option'){
		toggleSocketLoader(false);
		goPage("option");
		toggleMainButton("select");
		if(!socketData.host){
			gameLogsTxt.visible = true;
			toggleSocketLoader(true, textMultiplayerDisplay.waitingHost);
		}
	}else if(status == 'updateoption'){
		gameData.settings.tiles = data.tiles;
		updateOption();
	}else if(status == 'players'){
		goPage("players");
	}else if(status == 'updateplayers'){
		gameData.icon = data.icon;
		gameData.iconSwitch = data.switch;
		gameData.icons = data.icons;
		displayPlayerTile();
	}else if(status == 'start'){
		socketData.loaded = [];
		toggleSocketLoader(false);
		goPage('game');
	}else if(status == 'ready'){
		var loadedIndex = socketData.loaded.indexOf(data);
		if(loadedIndex == -1){
			socketData.loaded.push(data);
		}

		if(socketData.loaded.length == gameData.totalplayers){
			if(socketData.host){
				socketData.loaded = [];
				postSocketUpdate('gameready', {tilesDesign:gameData.tilesDesign});
			}
		}
	}else if(status == 'gameready'){
		gameData.tilesDesign = data.tilesDesign;
		prepareGame();
	}else if(status == 'placetile'){
		placeTile(data.row, data.column);
	}
}