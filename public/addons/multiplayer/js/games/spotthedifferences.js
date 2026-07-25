export function handleSocketUpdate(status, data, time){
	if(status == 'init'){
		toggleSocketLoader(false);
		socketData.socketGameLogs = [];
		gameLogsTxt.text = '';
		if(data[0].index == socketData.index){
			socketData.host = true;
		}
		
		for(var n=0; n<data.length; n++){
			if(data[n].index == socketData.index){
				socketData.gameIndex = n;
				if(!multiplayerSettings.enterName){
					showSocketNotification(textMultiplayerDisplay.playerNotification.replace('[USER]', data[n].username));
				}
			}
			$.players['gamePlayer'+ n].text = data[n].username;
		}

		gameData.totalplayers = data.length;
		postSocketUpdate('type');
	}else if(status == 'type'){
		goPage("main");
		toggleMainButton();
		if(socketData.host){
			if(gameMode.status){
				toggleMainButton("select");
			}else{
				if(gameMode.mode){
					gameData.mode = "quick";
					shufflePuzzle();
					postSocketUpdate('start', {mode:gameData.mode, seq:gameData.seq});
				}else{
					gameData.mode = "select";
					postSocketUpdate('level', gameData.mode);
				}
			}
		}else{
			gameLogsTxt.visible = true;
			toggleSocketLoader(true, textMultiplayerDisplay.waitingHost);
		}
	}else if(status == 'level'){
		goPage("level");
		selectPage(1);
		if(!socketData.host){
			gameLogsTxt.visible = true;
			toggleSocketLoader(true, textMultiplayerDisplay.waitingHost);
		}
	}else if(status == 'updatelevel'){
		selectPage(data);
	}else if(status == 'updatethumb'){
		selectBoardThumbs(data);
		playSound('soundSelect');
	}else if(status == 'start'){
		toggleSocketLoader(false);
		gameData.mode = data.mode;
		gameData.seq = data.seq;
		goPage('game');
		
		$.players['gamePlayer'+ socketData.gameIndex].text = textMultiplayerDisplay.playerIndicator;
	}else if(status == 'updatetimer'){
		timeData.timer = data;
		updateStats();
	}else if(status == 'wrong'){
		playerData.wrong = data.wrong;
		playerData.opponentWrong = data.opponentWrong;
		updateStats();
	}else if(status == 'timerup'){
		displayGameStatus('timer');
	}else if(status == 'spot'){
		updateHiddenSpot(data.spot, data.index);
		if(data.index == 0){
			playerData.found++;
		}else{
			playerData.opponentFound++;
		}
		updateStats();
	}
}