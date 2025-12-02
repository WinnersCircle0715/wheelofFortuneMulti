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
		gameData.fourcolors.special = data.special;
		gameData.themeIndex = data.themeIndex;
		toggleCardsOptions(data.option);
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
				var cardsArr = [];
				for(var n=0; n<gameData.cards.length; n++){
					cardsArr.push(gameData.cards[n].cardIndex);
				}
				postSocketUpdate('prepareplayers', cardsArr);
			}
		}
	}else if(status == 'prepareplayers'){
		socketData.loaded = [];
		gameData.cards = [];
		for(var n=0; n<data.length; n++){
			gameData.cards.push($.cards[data[n]]);
		}
		preparePlayers();
	}else if(status == 'cardactioncomplete'){
		var loadedIndex = socketData.loaded.indexOf(data);
		if(loadedIndex == -1){
			socketData.loaded.push(data);
		}

		if(socketData.loaded.length == gameData.players){
			if(socketData.host){
				postSocketUpdate('playerreadyaction');
			}
		}
	}else if(status == 'playerreadyaction'){
		socketData.loaded = [];
		playerReadyAction();
	}else if(status == 'choosecolor'){
		gameData.match.value = 0;
		gameData.match.color = data;
		toggleColors(false);
		getMatchDetail();
		checkRoundEnd();
	}else if(status == 'called'){
		playSound('soundCall');
		$.players["called" + data].visible = true;
		animateFocus($.players["called" + data]);
	}else if(status == 'calltimer'){
		checkCallPenalty();
	}else if(status == 'wildaction'){
		if(data.card == 'givecard'){
			giveCardToPlayer(data.cardData);
		}else if(data.card == 'drawplayercard'){
			gameData.turn.drawCount = data.cardData;
			drawPlayerCard(false);
		}else if(data.card == 'discardplayercard'){
			discardPlayerCard(data.cardData, true);
		}
	}else if(status == 'targetaim'){
		toggleTargetIcon(data);
		if(gameData.turn.swap){
			swapPlayerCards(data);
		}else if(gameData.turn.revealCard){
			revealPlayerCards(data);
		}else if(gameData.turn.giveCard){
			choosePlayerCards(data);
		}else if(gameData.turn.removePlayer){
			removePlayers(data);
		}else{
			targetedPlayerDraw(data);
		}
	}else if(status == 'shuffledrawcards'){
		var loadedIndex = socketData.loaded.indexOf(data);
		if(loadedIndex == -1){
			socketData.loaded.push(data);
		}

		if(socketData.loaded.length == gameData.players){
			if(socketData.host){
				postSocketUpdate('readyshuffledrawcards', {draw:gameData.draw});
			}
		}
	}else if(status == 'readyshuffledrawcards'){
		socketData.loaded = [];
		gameData.draw = data.draw;
		showDrawCard(false);
	}else if(status == 'shuffleplayercards'){
		var loadedIndex = socketData.loaded.indexOf(data.index);
		if(loadedIndex == -1){
			socketData.loaded.push(data.index);
		}

		if(socketData.loaded.length == gameData.players){
			if(socketData.host){
				postSocketUpdate('readyshuffleplayercards', {allCards:gameData.turn.playerCards});
			}
		}
	}else if(status == 'readyshuffleplayercards'){
		socketData.loaded = [];
		shufflePlayerCards(data.allCards);
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