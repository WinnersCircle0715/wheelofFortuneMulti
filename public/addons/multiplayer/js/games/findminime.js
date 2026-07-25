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
			$.players["score"+n].score = 0;
			$.players["score"+n].text = $.players["score"+n].score;
			$.players["name"+n].text = data[n].username;
			if(data[n].index == socketData.index){
				$.players["name"+n].text = data[n].username + " " + textStrings.activePlayer;
				socketData.gameIndex = n;
				if(!multiplayerSettings.enterName){
					showSocketNotification(textMultiplayerDisplay.playerNotification.replace('[USER]', data[n].username));
				}
			}
		}
		gameData.totalplayers = data.length;
		postSocketUpdate('select');
	}else if(status == 'select'){
		gameData.puzzleNum = 0;
		selectThumb();

		goPage('select');
		if(!socketData.host){
			gameLogsTxt.visible = true;
			toggleSocketLoader(true, textMultiplayerDisplay.waitingHost);
		}
	}else if(status == 'updateselect'){
		socketData.loaded = [];
		gameData.puzzleNum = data;
		selectThumb();
	}else if(status == 'updatetimer'){
		timeData.timer = data;
		updateTimer();
	}else if(status == 'checkpreload'){
		socketData.loaded = [];
		if(puzzles_arr[gameData.puzzleNum].preload){
			postSocketUpdate('preloadcomplete', socketData.gameIndex);
		}
	}else if(status == 'preloadcomplete'){
		var loadedIndex = socketData.loaded.indexOf(data);
		if(loadedIndex == -1){
			socketData.loaded.push(data);
		}

		if(socketData.loaded.length == gameData.totalplayers){
			socketData.loaded = [];
			toggleSocketLoader(false);
			goPage('game');
			playersContainer.visible = true;
		}
	}else if(status == 'preparepuzzle'){
		preparePuzzle();
		gameData.icons = data.icons;
		gameData.randomMoveSeq = data.randomMoveSeq;
		gameData.randomStaticSeq = data.randomStaticSeq;
		loadPuzzle();
	}else if(status == 'checkClickObject'){
		checkClickObject(data.objIndex, data.index);
	}else if(status == 'timesup'){
		var loadedIndex = socketData.loaded.indexOf(data);
		if(loadedIndex == -1){
			socketData.loaded.push(data);
		}

		if(socketData.loaded.length == gameData.totalplayers){
			endGame();
		}
	}
}