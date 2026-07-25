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
				postSocketUpdate('gameready', {events:gameData.events, orders:gameData.orders});
			}
		}
	}else if(status == 'gameready'){
		socketData.loaded = [];
		gameData.events = data.events;
		gameData.orders = data.orders;
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
			gameData.orders = data.orders;
		}
		gameData.turn = data.turn;
		animateRollDice(data.index1, data.index2);
	}else if(status == 'playeraction'){
		socketData.loaded = [];
		donePlayerAction(data.action, data.data);
	}else if(status == 'placeplayerbid'){
		gameData.auction.players[data.index].bid = data.player.bid;
		gameData.auction.players[data.index].status = data.player.status;
		showPlayerBidResult(false);

		if(socketData.host){
			gameData.auction.players[data.index].order = gameData.auction.order;
			gameData.auction.order++;

			var totalBid = 0;
			for(var n=0; n<gameData.auction.players.length; n++){
				if(gameData.auction.players[n].status >= 1){
					totalBid++;
				}
			}
			if(totalBid == gameData.auction.totalBids){
				postSocketUpdate('playerbidresult', gameData.auction);
			}
		}
	}else if(status == 'playerbidresult'){
		socketData.loaded = [];
		gameData.auction = data;
		showPlayerBidResult(true);
	}else if(status == 'rolllabdice'){
		buttonLabRoll.visible = false;
		animateLabRollDice(data.index);
	}else if(status == 'offerplayer'){
		gameData.offer = data.offer;
		offerPlayer();
	}else if(status == 'offeraccept'){
		toggleOfferAccept(data);
	}else if(status == 'buildmodule'){
		buildPlanetModule(data.player, $.boards[data.designIndex]);
	}else if(status == 'sellmodule'){
		sellPlanetModule(data.player, $.boards[data.designIndex]);
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