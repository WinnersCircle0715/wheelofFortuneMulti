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

		for(var n=0; n<4; n++){
			$.players[n].visible = false;
		}
		for(var n=0; n<data.length; n++){
			$.players["active"+n].visible = false;
			if(data[n].index == socketData.index){
				$.players["active"+n].visible = true;
				socketData.gameIndex = n;
				if(!multiplayerSettings.enterName){
					showSocketNotification(textMultiplayerDisplay.playerNotification.replace('[USER]', data[n].username));
				}
			}
			$.players[n].visible = true;
			$.players["name"+n].text = data[n].username;
		}
		gameData.player = 0;
		gameData.totalPlayers = data.length;
		postSocketUpdate('category');
	}else if(status == 'category'){
		if(gameSettings.category){
			goPage('category');
			if(!socketData.host){
				gameLogsTxt.visible = true;
				toggleSocketLoader(true, textMultiplayerDisplay.waitingHost);
			}
		}else{
			goPage('game');
		}
	}else if(status == 'updatecategory'){
		gameData.categoryNum = data;
		displayCategoryName();
	}else if(status == 'start'){
		toggleSocketLoader(false);
		goPage('game');

		socketData.turn = false;
		if(gameData.player == socketData.gameIndex){
			socketData.turn = true;
		}
	}else if(status == 'sequence'){
		sequence_arr = data;
	}else if(status == 'loadanswer'){
		socketData.loaded = [];
		loadAnswer();
	}else if(status == 'loadanswerready'){
		var loadedIndex = socketData.loaded.indexOf(data);
		if(loadedIndex == -1){
			socketData.loaded.push(data);
		}

		if(socketData.loaded.length == gameData.totalPlayers && socketData.host){
			socketData.loaded = [];
			if(fileFest.length > 0){
				postSocketUpdate('loadanswerassets');
			}else{
				postSocketUpdate('prepareanswer');
			}
		}
	}else if(status == 'loadanswerassets'){
		loadAnswerAssets();
	}else if(status == 'loadanswerassetscomplete'){
		var loadedIndex = socketData.loaded.indexOf(data);
		if(loadedIndex == -1){
			socketData.loaded.push(data);
		}

		if(socketData.loaded.length == gameData.totalPlayers && socketData.host){
			socketData.loaded = [];
			postSocketUpdate('prepareanswer');
		}
	}else if(status == 'prepareanswer'){
		prepareAnswer();
	}else if(status == 'prepareanswerready'){
		var loadedIndex = socketData.loaded.indexOf(data);
		if(loadedIndex == -1){
			socketData.loaded.push(data);
		}

		if(socketData.loaded.length == gameData.totalPlayers && socketData.host){
			postSocketUpdate('buildanswer', gameData.revealLetters);
		}
	}else if(status == 'buildanswer'){
		gameData.revealLetters = data;
		buildAnswer();
	}else if(status == 'updatetimer'){
		timeData.timer = data;
		updateTimer();
	}else if(status == 'proceednextstep'){
		proceedNextStep();
	}else if(status == 'startwheelspin'){
		startWheelSpin(data.rotateNum, data.randomNum);
	}else if(status == 'presskey'){
		if(data.type == "guessLetter"){
			$.key['guess_'+data.n+'_'+data.k].bgHidden.visible = true;
			$.key['solve_'+data.n+'_'+data.k].bgHidden.visible = true;
			$.key['guess_'+data.n+'_'+data.k].text.color = keyboardSettings.colorDisabled;
			$.key['solve_'+data.n+'_'+data.k].text.color = keyboardSettings.colorDisabled;
			
			toggleGameTimer(false);
			checkGuessLetter(data.letter, true);
		}else if(data.type == "solve"){
			gameData.focusLetterIndex = data.focusLetterIndex;
			gameData.focusLetter[gameData.focusLetterIndex].text.text = data.letter;
			toggleFocusLetter(true);
		}else if(data.type == "vowelSelect"){
			$.key['vowel_'+data.n+'_'+data.k].bgSecret.visible = false;
			toggleGameTimer(false);
			checkGuessLetter(data.letter, false);
		}else if(data.type == "solveenter"){
			checkSolveEnter(true);
		}else if(data.type == "solvedelete"){
			toggleFocusLetter(false);
			checkSolveEnter(false);
		}else if(data.type == "solveletter"){
			checkSolveEnter(false);
		}
	}else if(status == 'updateplayerscore'){
		if(data.con){
			playSound("soundScore");
		}

		TweenMax.to(tweenData, .5, {tweenScore:data.score, overwrite:true, onUpdate:function(){
			$.players[data.index].score = data.score;
			$.players["score"+data.index].text = textStrings.score.replace('[NUMBER]', addCommas(Math.floor(tweenData.tweenScore)));
			$.players["coin"+data.index].x = -(($.players["score"+data.index].getMeasuredWidth()/2) + 30);
		}});
	}else if(status == 'toggleaction'){
		displayGameStage(data);
		playSound('soundButton');
	}else if(status == 'buildkeyboard'){
		if(data.type == "guess"){
			gameData.keyArr = data.keyArr;
			buildKeyboard("guess", gameData.keyArr, guessKeyMoveContainer);	
		}else if(data.type == "solve"){
			buildKeyboard("solve", data.keyArr, solveKeyMoveContainer);	
		}else if(data.type == "vowel"){
			gameData.vowelCount = data.vowelCount;
			gameData.vowelArr = data.keyArr;

			if(gameData.vowelArr[0].length < 2 || gameData.vowelCount < 0){
				displayGameStage("vowelNoOption");
			}else{
				buildKeyboard("vowel", gameData.vowelArr, vowelKeyMoveContainer);
				displayGameStage("vowelSelect");
			}
		}
	}else if(status == 'nextplayer'){
		gameData.player++;
		gameData.player = gameData.player > gameData.totalPlayers-1 ? 0 : gameData.player;

		socketData.turn = false;
		if(gameData.player == socketData.gameIndex){
			socketData.turn = true;
		}
		displayGameStage("turn");
	}else if(status == 'nextround'){
		gameData.currentRound = data;
		gameData.player = gameData.currentRound;

		socketData.turn = false;
		if(gameData.player == socketData.gameIndex){
			socketData.turn = true;
		}

		loadNextAnswer();
	}else if(status == 'endgame'){
		endGame();
	}
}