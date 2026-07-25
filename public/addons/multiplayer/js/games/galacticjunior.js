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
		gameData.players = gameData.totalPlayers = data.length;
		postSocketUpdate('options');
	}else if(status == 'options'){
		goPage('options');
		if(!socketData.host){
			gameLogsTxt.visible = true;
			toggleSocketLoader(true, textMultiplayerDisplay.waitingHost);
		}
	}else if(status == 'updateplayers'){
		playSound("soundFlip");
		for(var c=0; c<gameData.rocketDrag.array.length; c++){
			var thisIcon = gameData.rocketDrag.array[c];
			thisIcon.x = thisIcon.oriX = data[c].x;
		}
	}else if(status == 'updateoptions'){
		gameData.cashIndex = data.cashIndex;
		displayOptions();
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
				postSocketUpdate('gameready', {events:gameData.events});
			}
		}
	}else if(status == 'gameready'){
		socketData.loaded = [];
		gameData.events = data.events;
		gameReady();
	}else if(status == 'actionsync'){
		var loadedIndex = socketData.loaded.indexOf(data.index);
		if(loadedIndex == -1){
			socketData.loaded.push(data.index);
		}

		if(socketData.loaded.length == gameData.players){
			if(gameData.player == socketData.gameIndex){
				postSocketUpdate('playerreadyaction', data);
			}
		}
	}else if(status == 'playerreadyaction'){
		socketData.loaded = [];
		playerReadyAction(data.contentType, data.type, data.data);
	}else if(status == 'rolldice'){
		if(!socketData.host){
			gameData.events = data.events;
		}
		gameData.turn = data.turn;
		animateRollDice(data.index);
	}else if(status == 'playeraction'){
		socketData.loaded = [];
		donePlayerAction(data.action, data.data);
	}else if(status == 'rolllabdice'){
		buttonLabRoll.visible = false;
		animateLabRollDice(data.index);
	}else if(status == 'preparenextplayer'){
		var loadedIndex = socketData.loaded.indexOf(data.index);
		if(loadedIndex == -1){
			socketData.loaded.push(data.index);
		}
		if(socketData.loaded.length == gameData.players){
			if(gameData.player == socketData.gameIndex){
				postSocketUpdate('preparenextplayerready');
			}
		}
	}else if(status == 'preparenextplayerready'){
		socketData.loaded = [];
		prepareNextPlayer();
	}
}