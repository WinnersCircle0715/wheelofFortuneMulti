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
			$.players[n].text = data[n].username;
			$.players[n].player = data[n].username;
			if(data[n].index == socketData.index){
				$.players[n].text = textStrings.activePlayer + "\n" + data[n].username;
				socketData.gameIndex = n;
				if(!multiplayerSettings.enterName){
					showSocketNotification(textMultiplayerDisplay.playerNotification.replace('[USER]', data[n].username));
				}
			}
		}
		gameData.totalPlayers = data.length;
		goPage('game');
	}else if(status == 'prepare'){
		socketData.loaded = [];
		timeData.oldTimer = -1;
		gameData.player = data.players;
		gameData.multi.players = data.multiplayers;
		showMultiPlayers();
	}else if(status == 'updatetimer'){
		timeData.sessionTimer = data;
		updateTimer();
	}else if(status == 'updateplayers'){
		if(socketData.gameIndex != gameData.multi.round){
			for(var n=0; n<gameData.players.length; n++){
				var thisPlayer = gameData.players[n];

				if(!gameData.begin){
					thisPlayer.moveX = data[n].moveX;
					thisPlayer.moveY = data[n].moveY;
					thisPlayer.x = data[n].x;
					thisPlayer.y = data[n].y;
				}else{
					if(thisPlayer.moveX != data[n].moveX && thisPlayer.moveY != data[n].moveY){
						playPlayerAudio();
						thisPlayer.moveX = data[n].moveX;
						thisPlayer.moveY = data[n].moveY;
						var tweenSpeed = getDistance(thisPlayer.x, thisPlayer.y, thisPlayer.moveX, thisPlayer.moveY) * (gameData.stage.speed * 0.01);
						TweenMax.to(thisPlayer, tweenSpeed, {x:thisPlayer.moveX, y:thisPlayer.moveY, ease:Linear.easeNone, overwrite:true});
					}
				}
				
				if(n < gameData.totalPlayers){
					posPlayerName(n, thisPlayer);
				}
			}
		}
	}else if(status == 'directplayer'){
		directPlayers(data.index, data.x, data.y);
	}else if(status == 'caughtplayer'){
		var thisPlayer = gameData.players[data]
		thisPlayer.focus = false;
		thisPlayer.gotoAndPlay("wave");
		playSound("soundClear");

		gameData.multi.found++;
		updateMultiScore();
	}else if(status == 'endround'){
		socketData.loaded = [];
		gameData.complete = true;
		timeData.sessionTimer = data;
		timeData.accumulate = timeData.countdown - timeData.sessionTimer;
		calculateScore();
		allPlayersPointToPlayer();
	}else if(status == 'timesup'){
		var loadedIndex = socketData.loaded.indexOf(data);
		if(loadedIndex == -1){
			socketData.loaded.push(data);
		}

		if(socketData.gameIndex == gameData.multi.round){
			if(socketData.loaded.length == gameData.totalPlayers){
				TweenMax.to(gameContainer, 4, {overwrite:true, onComplete:function(){
					postSocketUpdate('nextround');
				}});
			}
		}else{
			gameData.complete = true;
			allPlayersPointToPlayer();
		}
	}else if(status == 'playersready'){
		var loadedIndex = socketData.loaded.indexOf(data);
		if(loadedIndex == -1){
			socketData.loaded.push(data);
		}

		if(socketData.gameIndex == gameData.multi.round){
			if(socketData.loaded.length == gameData.totalPlayers){
				TweenMax.to(gameContainer, 1, {overwrite:true, onComplete:function(){
					postSocketUpdate('nextround');
				}});
			}
		}
	}else if(status == 'nextround'){
		gameData.multi.round++;
		if(gameData.multi.round < gameData.totalPlayers){
			setupGameStage();
			showMultiPlayers();
		}else{
			showGameStatus("roundcomplete");
			TweenMax.to(gameContainer, 2, {overwrite:true, onComplete:function(){
				goPage('result');
			}});
		}
	}
}