export function handleSocketUpdate(status, data, time){
	if(multiplayerSettings.game == 'guessthesketch'){
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
			if(socketData.host){
				if(gameSettings.randomAnswer){
					shuffle(gameData.seq);
				}
				postSocketUpdate('prepare', gameData.seq, true);
				postSocketUpdate('start');
			}
		}else if(status == 'prepare'){
			gameData.seq = data;
		}else if(status == 'start'){
			toggleSocketLoader(false);
			goPage('game');
			
			socketData.turn = false;
			if(socketData.gameIndex == 0){
				socketData.turn = true;
			}

			gameData.player = 0;
			displayPlayerTurn();
		}else if(status == 'updatetimer'){
			timeData.timer = data;
			updateTimer();
		}else if(status == 'startdrawingline'){
			startDrawingLine(data.x, data.y);
		}else if(status == 'updatedrawingline'){
			updateDrawingLine(data.x, data.y);
		}else if(status == 'updateplayeranswer'){
			if(socketData.gameIndex != data.index){
				fillPlayerAnswer(data.index, data.answers, false);
			}

			if(socketData.turn){
				if(data.answers == gameData.sketchAnswer && !gameData.complete){
					endRound();
					postSocketUpdate('updatecomplete', {index:data.index, turnIndex:socketData.gameIndex, answers:gameData.sketchAnswer, complete:true});
				}
			}
		}else if(status == 'updatecomplete'){
			gameData.complete = true;
			if(data.complete){
				if(socketData.gameIndex == data.index){
					showGameStatus('correct');
					for(var n=0; n<gameData.blanks.length; n++){
						gameData.blanks[n].oriY = gameData.blanks[n].y;
						gameData.blanks[n].bgH.visible = true;
						gameData.blanks[n].text.color = gameSettings.correctColor;
						animateBounce(gameData.blanks[n], n*.2);
					}
				}else{
					fillPlayerAnswer(data.index, data.answers, true);
					showGameStatus('playerCorrect', data.index);
				}
				roundComplete(data.index, data.turnIndex);
			}

			var nextDraw = false;
			gameData.player++;
			if(gameData.player >= gameData.totalplayers){
				gameData.round++;
				gameData.player = 0;
				if(gameData.round < gameSettings.totalRound){
					nextDraw = true;
				}
			}else{
				nextDraw = true;
			}

			if(nextDraw){
				socketData.turn = false;
				gameData.seqNum++;
				if(gameData.seqNum > gameData.seq.length){
					gameData.seqNum = 0;
					if(gameSettings.randomAnswer){
						shuffle(gameData.seq);
					}
				}

				if(gameData.player == socketData.gameIndex){
					socketData.turn = true;
				}

				TweenMax.to(gameData, 3, {overwrite:true, onComplete:function(){
					loadSketchAnswer();
					displayPlayerTurn();
				}});
			}else{
				endGame();
			}
		}
	}
}