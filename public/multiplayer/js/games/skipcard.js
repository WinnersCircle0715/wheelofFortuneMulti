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
		gameData.stockPileIndex = data.stockPileIndex;
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
			if(gameData.player == socketData.gameIndex){
				postSocketUpdate('playerreadyaction', gameData.draw);
			}
		}
	}else if(status == 'playerreadyaction'){
		socketData.loaded = [];
		gameData.draw = data;
		playerReadyAction(true);
	}else if(status == 'playplayercard'){
		socketData.loaded = [];
		playPlayerCard($.cards[data.index], data.discard);
	}else if(status == 'playdiscardcard'){
		socketData.loaded = [];
		playDiscardCard($.cards[data.index], data.discard);
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