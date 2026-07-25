export function handleSocketUpdate(status, data, time){
	if(status == 'init'){
		toggleSocketLoader(false);
		socketData.socketGameLogs = [];
		gameLogsTxt.text = '';
		if(data[0].index == socketData.index){
			socketData.host = true;
		}

		socketData.players = [];
		for(var n=0; n<data.length; n++){
			if(data[n].index == socketData.index){
				socketData.gameIndex = n;
				gameData.gameIndex = n;
				if(!multiplayerSettings.enterName){
					showSocketNotification(textMultiplayerDisplay.playerNotification.replace('[USER]', data[n].username));
				}
			}

			socketData.players.push({index:data[n].index, username:data[n].username, gameIndex:n, score:0, lives:mapSettings.lives, nextStage:false});
		}
		gameData.totalplayers = data.length;
		gameData.mapLoopSide = randomBoolean();
		postSocketUpdate('select', gameData.mapLoopSide);
	}else if(status == 'select'){
		gameData.mapNum = 0;
		gameData.themeNum = 0;
		gameData.mapLoopSide = data;
		goPage('select');
		prepareGame();

		if(!socketData.host){
			gameLogsTxt.visible = true;
			toggleSocketLoader(true, textMultiplayerDisplay.waitingHost);
		}
	}else if(status == 'preparegame'){
		gameData.mapNum = data.map;
		gameData.themeNum = data.theme;
		prepareGame();
	}else if(status == 'start'){
		toggleSocketLoader(false);
		goPage("game");
	}else if(status == 'countdown'){
		startCountdown(data);
	}else if(status == "loopcountdowncomplete"){
		for(var p=0; p<socketData.players.length; p++){
			var thisPlayer = gameData.users[p];
			if(gameData.gameIndex != p){
				thisPlayer.active = false;
			}
		}

		gameData.countdown = data;
		loopCountdownComplete();
	}else if(status == "updateplayer"){
		var updateIcons = true;
		var updatePos = true;
		var disX = 0;
		var disY = 0;
		if(gameData.mapLoop){
			disX += data.mapX;
			disY += data.mapY;
			updateIcons = false;
		}

		if(updateIcons){
			if(socketData.players[data.index].lives > 0){
				multiData.players[data.index].map = data.map;
				drawIcons();
			}
		}

		if(updatePos){
			for(var n=0; n<multiData.players[data.index].ghosts.length; n++){
				var thisGhost = multiData.players[data.index].ghosts[n];
				thisGhost.alpha = multiData.alpha;
				thisGhost.x = data.ghosts[n].x + disX;
				thisGhost.y = data.ghosts[n].y + disY;
				thisGhost.gotoAndStop(data.ghosts[n].frame);
			}
			
			var thisPlayer = gameData.users[data.index];
			thisPlayer.active = false;
			thisPlayer.x = data.player.x + disX;
			thisPlayer.y = data.player.y + disY;
			thisPlayer.scaleX = data.player.scaleX;
			thisPlayer.rotation = data.player.rotation;
			thisPlayer.alpha = multiData.alpha;
			thisPlayer.nameLabel.x = data.player.labelX + disX;
			thisPlayer.nameLabel.y = data.player.labelY + disY;
			thisPlayer.gotoAndStop(data.player.frame);
		}

		if(socketData.players[gameData.gameIndex].lives == 0 && gameData.mapLoop && multiData.map == data.index){
			mapWrapContainer.x = data.mapX;
			mapWrapContainer.y = data.mapY;
			
			gameData.map = data.map;
			drawWalls();
			drawIcons();
		}
	}else if(status == "updatestats"){
		socketData.players[data.index].score = data.score;
		socketData.players[data.index].lives = data.lives;

		if(socketData.players[data.index].lives == 0){
			gameData.users[data.index].nameLabel.visible = false;
			for(var n=0; n<multiData.players[data.index].ghosts.length; n++){
				var thisGhost = multiData.players[data.index].ghosts[n];
				thisGhost.alpha = 0;
			}
		}
		
		multiData.map = -1;
		for(var p=0; p<socketData.players.length; p++){
			if(socketData.players[p].lives > 0 && multiData.map == -1){
				multiData.map = p;
			}
		}
		updateGameDisplay();
	}else if(status == "endgame"){
		var endGameCon = true;
		for(var n=0; n<socketData.players.length; n++){
			if(socketData.players[n].lives > 0){
				endGameCon = false;
			}
		}

		if(endGameCon){
			endGame();
		}
	}
}