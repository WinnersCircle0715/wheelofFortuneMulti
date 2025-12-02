export function handleSocketUpdate(status, data, time){
	if(status == 'init'){
		toggleSocketLoader(false);
		socketData.socketGamelogs = [];
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

			socketData.players.push({index:data[n].index, gameIndex:n, username:data[n].username, complete:false, overalltime:0, besttime:0});
		}
		gameData.totalplayers = data.length;
		if(socketData.host){
			postSocketUpdate('track');
		}
	}else if(status == 'track'){
		goPage('track');
		if(!socketData.host){
			gameLogsTxt.visible = true;
			toggleSocketLoader(true, textMultiplayerDisplay.waitingHost);
		}
	}else if(status == 'updatetrack'){
		selectPage(data);
	}else if(status == 'updatetrackselect'){
		selectTrackThumbs(data);
	}else if(status == 'start'){
		toggleSocketLoader(false);
		goPage('game');
		for(var n=0; n<data.length; n++){
			if(data[n].index == socketData.index){
				gameData.players[n].label.text = textMultiplayerDisplay.playerIndicator;
			}else{
				gameData.players[n].label.text = data[n].username;
			}
		}
	}else if(status == 'updatecountdown'){
		gameData.countNum = data;
		updateCountdown();
	}else if(status == 'updatecar'){
		var thisPlayer = gameData.players[data.index];
		thisPlayer.bestLapTime = data.bestLapTime;
		thisPlayer.timeScale = data.timeScale;
		thisPlayer.progress = data.progress;
		thisPlayer.touchCon = data.touchCon;
		thisPlayer.car.visible = data.visible;
		thisPlayer.volume = data.volume;
		thisPlayer.speed = data.speed;

		thisPlayer.carDrift.x = data.carDriftX;
		thisPlayer.carDrift.y = data.carDriftY;
		thisPlayer.carDrift.rotation = data.carDriftRotation;
		thisPlayer.carDrift.visible = data.carDriftVisible;

		thisPlayer.sparks.x = data.sparkX;
		thisPlayer.sparks.y = data.sparkY;
		thisPlayer.sparks.scaleX = data.sparkScaleX;
		thisPlayer.sparks.scaleY = data.sparkScaleY;
		thisPlayer.sparks.rotation = data.sparkRotation;
		thisPlayer.sparks.visible = data.sparkVisible;

		if(thisPlayer.carDrift.visible){
			TweenMax.to(thisPlayer.carTween, 0, {timeScale:thisPlayer.timeScale, overwrite:true});
		}

		if(thisPlayer.touchCon){
			thisPlayer.carTween.progress(thisPlayer.progress);
			TweenMax.to(thisPlayer.carTween, 1, {timeScale:thisPlayer.timeScale});
		}

		setSoundVolume('soundRaceAI', thisPlayer.volume);

		if(gameData.mode == "timer"){
			thisPlayer.car.alpha = thisPlayer.carDrift.alpha = .2;
		}
	}else if(status == "updatelap"){
		gameData.players[data.index].lap = data.lap;
	}else if(status == "completelap"){
		if(socketData.host){
			var socketPosIndex = socketData.players.findIndex(x => x.gameIndex === data);
			socketData.players[socketPosIndex].complete = true;
			gameData.players[data].complete = true;
			gameData.players[data].slowdown = true;

			var totalRacerComplete = 0;
			var totalRacer = 0;
			for(var n=0; n<socketData.players.length; n++){
				totalRacer++;

				if(socketData.players[n].complete){
					totalRacerComplete++;
				}
			}
			if(totalRacerComplete == totalRacer){
				postSocketUpdate('complete');
			}
		}
	}else if(status == "complete"){
		endGame();
	}
}