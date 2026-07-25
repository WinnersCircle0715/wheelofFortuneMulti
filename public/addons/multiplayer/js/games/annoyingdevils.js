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
		if(socketData.host){
			postSocketUpdate('options');
		}
	}else if(status == 'options'){
		goPage("options");
		if(!socketData.host){
			gameLogsTxt.visible = true;
			toggleSocketLoader(true, textMultiplayerDisplay.waitingHost);
		}
	}else if(status == 'updateoptions'){
		gameData.mode = data.mode;
		displayCardsOptions();
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
				postSocketUpdate('gameready', {cardsPrepare:gameData.cardsPrepare, player:gameData.player});
			}
		}
	}else if(status == 'gameready'){
		socketData.loaded = [];
		gameData.player = data.player;
		gameData.cardsPrepare = data.cardsPrepare;
		preparePlayers();
	}else if(status == 'actionsync'){
		var loadedIndex = socketData.loaded.indexOf(data);
		if(loadedIndex == -1){
			socketData.loaded.push(data);
		}
		if(socketData.loaded.length == gameData.players){
			if(gameData.player == socketData.gameIndex){
				postSocketUpdate('playerreadyaction', gameData.cardsDraw);
			}
		}
	}else if(status == 'playerreadyaction'){
		socketData.loaded = [];
		gameData.cardsDraw = data;
		playerReadyAction(true);
	}else if(status == 'actioncard'){
		socketData.loaded = [];
		if(data.actionType == 'hidecard'){
			gameData.action.type = data.actionType;
			gameData.action.positionIndex = data.positionIndex;
		}else if(data.actionType == 'stealcard' || data.actionType == 'give'){
			gameData.action.type = data.actionType;
			gameData.action.targetPlayer = data.targetPlayer;
		}
		actionProceedCard(data.type, data.cardIndex);
	}else if(status == 'actioncardsync'){
		var loadedIndex = socketData.loaded.indexOf(data.index);
		if(loadedIndex == -1){
			socketData.loaded.push(data.index);
		}
		if(socketData.loaded.length == gameData.players){
			if(gameData.player == socketData.gameIndex){
				postSocketUpdate('actioncardcomplete', data.play);
			}
		}
	}else if(status == 'actioncardcomplete'){
		actionCardReadyComplete(data);
	}else if(status == 'countdownsync'){
		checkAnnoyCountdown();
	}else if(status == 'shufflesync'){
		var loadedIndex = socketData.loaded.indexOf(data.index);
		if(loadedIndex == -1){
			socketData.loaded.push(data.index);
		}
		if(socketData.loaded.length == gameData.players){
			if(gameData.player == socketData.gameIndex){
				postSocketUpdate('shufflecomplete', gameData.cardsDraw);
			}
		}
	}else if(status == 'shufflecomplete'){
		socketData.loaded = [];
		gameData.cardsDraw = data;
		shuffleCardComplete();
	}else if(status == 'choosefavorplayer'){
		gameData.action.targetPlayer = data;
		toggleTargetPlayers(true, data);
		if(gameData.action.targetPlayer == socketData.gameIndex){
			toggleCardInterface('give');
		}
	}else if(status == 'targetstealplayer'){
		if(data == socketData.gameIndex){
			gameData.action.targetPlayer = data;
			interfaceOverlayContainer.visible = true;
			showCardGuide('stealPlayer');
			highlightNopeCards('nope');
		}
	}else if(status == 'targetdoubleplayer'){
		gameData.action.targetPlayer = data;
		playSoundType('action',8);
		toggleTargetPlayers(false);
		nextPlayerTurn('targeteddouble',gameData.action.targetPlayer);
	}else if(status == 'nopeaction'){
		proceedNopeAction(data.cardIndex, data.player);
	}
}