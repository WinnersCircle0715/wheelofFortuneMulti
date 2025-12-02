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
			$.status["playerNameTxt"+n].text = data[n].username.toUpperCase();
			$.status["playerNameTxt"+n].player = data[n].username.toUpperCase();
			if(data[n].index == socketData.index){
				socketData.gameIndex = n;
				if(!multiplayerSettings.enterName){
					showSocketNotification(textMultiplayerDisplay.playerNotification.replace('[USER]', data[n].username));
				}
			}
		}
		gameData.totalplayers = data.length;
		postSocketUpdate('size');
	}else if(status == 'size'){
		toggleSocketLoader(false);
		goPage('size');
		if(!socketData.host){
			gameLogsTxt.visible = true;
			toggleSocketLoader(true, textMultiplayerDisplay.waitingHost);
		}
	}else if(status == 'updatesize'){
		gameData.layoutIndex = data.index;
		displayPlaySize();
	}else if(status == 'start'){
		toggleSocketLoader(false);
		goPage('game');
	}else if(status == 'updatecard'){
		gameData.playArr = data.playArr;
		gameData.enemyRevealArr = data.enemyRevealArr;
		gameData.chestRevealArr = data.chestRevealArr;
		gameData.barrelRevealArr = data.barrelRevealArr;
		gameData.castleRevealArr = data.castleRevealArr; 
		gameData.chestArr = data.chestArr;
		gameData.keyArr = data.keyArr;
		gameData.chestCountArr = data.chestCountArr;
		gameData.player = data.player;
		gameData.moveCount = data.moveCount;
		gameData.stage = data.stage;

		if(data.dealCard){
			createCards();
			shuffleCards();
		}else{
			socketData.loaded = [];
			postSocketUpdate('updatecardcomplete', socketData.gameIndex);
		}
	}else if(status == 'moveCard'){
		socketData.loaded = [];
		moveCard(data.player, data.direction);
	}else if(status == 'movecomplete'){
		var loadedIndex = socketData.loaded.indexOf(data.index);
		if(loadedIndex == -1){
			socketData.loaded.push(data.index);
		}

		if(socketData.loaded.length == gameData.totalplayers){
			/*if(!data.con){
				gameData.moveCard = true;
			}else{*/
				var playerHealth1 = findBadgeValue($.card["player"+0], "health");
				var playerHealth2 = findBadgeValue($.card["player"+1], "health");

				if(playerHealth1 <= 0){
					if(!gameData.over){
						if(socketData.gameIndex == gameData.player){
							showGameStatus("youdead", 3);
						}else{
							showGameStatus("playerdead", 3, gameData.player);
						}
						endGame();
					}
				}else if(playerHealth2 <= 0){
					if(!gameData.over){
						if(socketData.gameIndex == gameData.player){
							showGameStatus("youdead", 3);
						}else{
							showGameStatus("playerdead", 3, gameData.player);
						}
						endGame();
					}
				}else if(socketData.host){
					checkNextStage();
				}
			/*}*/
		}
	}else if(status == 'updatecardcomplete'){
		var loadedIndex = socketData.loaded.indexOf(data);
		if(loadedIndex == -1){
			socketData.loaded.push(data.index);
		}

		if(socketData.loaded.length == gameData.totalplayers){
			if(socketData.host){
				gameData.player = gameData.player == 0 ? 1 : 0;
				postSocketUpdate('switchplayer', gameData.player);
			}
		}
	}else if(status == 'switchplayer'){
		gameData.moveCard = true;
		gameData.player = data;
		focusPlayerCard();
	}
}