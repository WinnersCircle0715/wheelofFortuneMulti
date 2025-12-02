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

		for(var n=0; n<data.length; n++){
			$.players['player'+ n].text = data[n].username;
			$.players['gamePlayer'+ n].text = data[n].username;
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
		gameData.themeIndex = data.themeIndex;
		gameData.layoutIndex = data.layoutIndex;
		gameData.iconSwitch = data.iconSwitch;
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
				postSocketUpdate('startboard');
			}
		}
	}else if(status == 'startboard'){
		socketData.loaded = [];
		startBoard();
	}else if(status == 'makeballmove'){
		socketData.loaded = [];

		gameData.firstX = data.firstX;
		gameData.firstY = data.firstY;
		gameData.secondX = data.secondX;
		gameData.secondY = data.secondY;
		makeBallMove(data.ii, data.jj, data.ss);

		gameData.firstX = -1;
		gameData.firstY = -1;
		gameData.secondX = -1;
		gameData.secondY = -1;
		updateMovement();
	}else if(status == 'animationcomplete'){
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
		checkGameEnd();
	}
}