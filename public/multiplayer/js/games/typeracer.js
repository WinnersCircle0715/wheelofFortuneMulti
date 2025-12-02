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
		postSocketUpdate('select');
	}else if(status == 'select'){
		toggleSocketLoader(false);
		goPage("main");
		toggleMainButton("select");
		if(!socketData.host){
			gameLogsTxt.visible = true;
			toggleSocketLoader(true, textMultiplayerDisplay.waitingHost);
		}
	}else if(status == 'updatecat'){
		gameData.wordNum = data.index;
		displayLetterCat();
	}else if(status == 'start'){
		toggleSocketLoader(false);
		socketData.loaded = [];
		gameData.order = data.order;
		gameData.cars = data.cars;
		gameData.carIndex = 0;
		goPage('game');
	}else if(status == 'ready'){
		var loadedIndex = socketData.loaded.indexOf(data);
		if(loadedIndex == -1){
			socketData.loaded.push(data);
		}

		if(socketData.loaded.length == gameData.totalplayers){
			if(socketData.host){
				socketData.loaded = [];
				postSocketUpdate('countdown');
			}
		}
	}else if(status == 'countdown'){
		socketData.loaded = [];
		startCountdown();
	}else if(status == 'countdownend'){
		var loadedIndex = socketData.loaded.indexOf(data);
		if(loadedIndex == -1){
			socketData.loaded.push(data);
		}

		if(socketData.loaded.length == gameData.totalplayers){
			if(socketData.host){
				postSocketUpdate('startrace');
			}
		}
	}else if(status == 'startrace'){
		socketData.loaded = [];
		countdownEnd();
	}else if(status == 'updatecount'){
		playerData.count[data.player] = data.count;
	}else if(status == 'carspin'){
		animateCarSpin(data.player);
	}else if(status == 'readyend'){
		var loadedIndex = socketData.loaded.indexOf(data);
		if(loadedIndex == -1){
			socketData.loaded.push(data);
		}

		if(socketData.loaded.length == gameData.totalplayers){
			if(socketData.host){
				postSocketUpdate('endrace');
			}
		}
	}else if(status == 'endrace'){
		showEndLine();
	}
}