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
			if(data[n].index == socketData.index){
				socketData.gameIndex = n;
				if(!multiplayerSettings.enterName){
					showSocketNotification(textMultiplayerDisplay.playerNotification.replace('[USER]', data[n].username));
				}
			}
			$.stage["player"+n].text = data[n].username;
		}
		gameData.totalPlayers = data.length;
		toggleSocketLoader(false);
		goPage('game');
	}else if(status == 'prepare'){
		gameData.bg = data.bg;
		gameData.themes = data.themes;
		prepareStage();
		prepareCircle();
		resizeGameUI();
		toggleCountdown(true);
	}else if(status == 'countdowncomplete'){
		updateCountdownComplete();
	}else if(status == 'updatestage'){
		var stageIndex = data.index;
		$.stage["cloud"+stageIndex].removeAllChildren();
		$.stage["lines"+stageIndex].removeAllChildren();

		for(var n=0; n<data.lines.length; n++){
			drawStroke(stageIndex, data.lines[n].x, data.lines[n].y, data.lines[n].length, data.lines[n].height);
		}

		for(var n=0; n<data.clouds.length; n++){
			drawCloud(stageIndex, data.clouds[n].x, data.clouds[n].y, data.clouds[n].index);
		}

		gameData.background[stageIndex].front.y = data.y;
		gameData.background[stageIndex].back.y = data.y;
	}else if(status == 'circlestatus'){
		if(socketData.gameIndex != data.index){
			var thisIndex = data.index;
			if(data.status == "jump"){
				var thisFront = gameData.background[thisIndex].front;
				thisFront.gotoAndPlay("rise");
			}else if(data.status == "hit"){
				playSound("soundFail");
				animateBlink(gameData.background[thisIndex].front, .1);
				animateBlink(gameData.background[thisIndex].back, .1);
			}else if(data.status == "reset"){
				resetCircle(thisIndex);
			}else if(data.status == "over"){
				playSound("soundOver");
				animateBlink(gameData.background[thisIndex].front, .1);
				animateBlink(gameData.background[thisIndex].back, .1);
				$.stage["score"+thisIndex].text = textStrings.gameover;
			}
		}

		if(socketData.host){
			if(data.status == "over"){
				gameData.background[data.index].over = true;
			}

			var totalOver = 0;
			for(var n=0; n<gameData.background.length; n++){			
				if(gameData.background[n].over){
					totalOver++;
				}
			}
		
			if(totalOver == gameData.themes.length){
				postSocketUpdate('over');
			}
		}
	}else if(status == 'over'){
		gameData.over = true;
		endGame();
	}
}