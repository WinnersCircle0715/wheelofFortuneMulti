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
		gameData.totalPlayers = data.length;
		postSocketUpdate('players');
	}else if(status == 'players'){
		goPage('players');
		if(!socketData.host){
			gameLogsTxt.visible = true;
			toggleSocketLoader(true, textMultiplayerDisplay.waitingHost);
		}
	}else if(status == 'updateplayers'){
		playSound("soundFlip");
		for(var c=0; c<gameData.colorDrag.array.length; c++){
			var thisIcon = gameData.colorDrag.array[c];
			thisIcon.x = thisIcon.oriX = data[c].x;
		}
	}else if(status == 'start'){
		goPage("game");
	}else if(status == 'ready'){
		socketData.loaded = [];
		gameSettings.dicePercent = data;
		buildBoardReady();
	}else if(status == 'animatedice'){
		socketData.loaded = [];
		animateDice();
	}else if(status == 'autoanimatedice'){
		var loadedIndex = socketData.loaded.indexOf(data);
		if(loadedIndex == -1){
			socketData.loaded.push(data);
		}

		if(socketData.loaded.length == gameData.totalPlayers){
			if(gameData.seqIndex == socketData.gameIndex){
				postSocketUpdate('animatedice');
			}
		}
	}else if(status == 'animatedicecomplete'){
		var loadedIndex = socketData.loaded.indexOf(data);
		if(loadedIndex == -1){
			socketData.loaded.push(data);
		}

		if(socketData.loaded.length == gameData.totalPlayers){
			if(gameData.seqIndex == socketData.gameIndex){
				postSocketUpdate('updateanimatedicecomplete', gameSettings.dicePercent);
			}
		}
	}else if(status == 'updateanimatedicecomplete'){
		gameSettings.dicePercent = data;
		socketData.loaded = [];
		updateAnimateDiceComplete();
	}else if(status == 'moveicon'){
		moveIcon(gameData.icons[data.playerIndex].array[data.iconIndex]);
	}else if(status == 'movecomplete'){
		var loadedIndex = socketData.loaded.indexOf(data);
		if(loadedIndex == -1){
			socketData.loaded.push(data);
		}

		if(socketData.loaded.length == gameData.totalPlayers){
			socketData.loaded = [];
			prepareNextPlayer();
		}
	}
}