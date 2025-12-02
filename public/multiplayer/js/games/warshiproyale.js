export function handleSocketUpdate(status, data, time){
	if(status == 'init'){
		toggleSocketLoader(false);
		socketData.socketGameLogs = [];
		gameLogsTxt.text = '';
		if(data[0].index == socketData.index){
			socketData.host = true;
		}
		
		$.board[0].playerName = [];
		for(var n=0; n<data.length; n++){
			if(data[n].index == socketData.index){
				socketData.gameIndex = n;
				if(!multiplayerSettings.enterName){
					showSocketNotification(textMultiplayerDisplay.playerNotification.replace('[USER]', data[n].username));
				}
			}
			$.board[0].playerName.push(data[n].username);
		}
		gameData.totalplayers = data.length;
		postSocketUpdate('select');
	}else if(status == 'select'){
		goPage('select');
		if(!socketData.host){
			gameLogsTxt.visible = true;
			toggleSocketLoader(true, textMultiplayerDisplay.waitingHost);
		}
	}else if(status == 'updateoption'){
		gameData.themeIndex = data.theme;
		gameData.sizeIndex = data.size;
		boardData = data.boardData;
		boardData.totalplayers = gameData.totalplayers;
		fillBoardOption('all');
	}else if(status == 'start'){
		socketData.loaded = [];
		gameLogsTxt.visible = false;
		toggleSocketLoader(false);
		goPage('game');
	}else if(status == 'prepare'){
		var loadedIndex = socketData.loaded.indexOf(data.index);
		if(loadedIndex == -1){
			socketData.loaded.push(data.index);
		}

		if(socketData.loaded.length == gameData.totalplayers){
			socketData.loaded = [];
			gameInnerContainer.visible = true;
			updateBoardState(0);
		}
	}else if(status == 'ready'){
		var targetShipArr = gameData.ships;
		var targetSubmarineArr = gameData.submarine;

		//sort
		for(var s=0; s<targetShipArr.length; s++){
			for(var r=0; r<targetShipArr.length; r++){
				var replaceShip = targetShipArr[r];
				if(replaceShip.data.arrIndex == data.ships[s].arrIndex){
					var thisShip = targetShipArr[s];
					targetShipArr[s] = targetShipArr[r];
					targetShipArr[r] = thisShip;
					r = targetShipArr.length;
				}
			}
		}

		for(var s=0; s<targetSubmarineArr.length; s++){
			for(var r=0; r<targetSubmarineArr.length; r++){
				var replaceSubmarine = targetSubmarineArr[r];
				if(replaceSubmarine.data.arrIndex == data.submarine[s].arrIndex){
					var thisSubmarine = targetSubmarineArr[s];
					targetSubmarineArr[s] = targetSubmarineArr[r];
					targetSubmarineArr[r] = thisSubmarine;
					r = targetSubmarineArr.length;
				}
			}
		}

		//position
		for(var s=0; s<targetShipArr.length; s++){
			var thisShip = targetShipArr[s];
			resetGridShip(thisShip.data.grids, 0);

			thisShip.rotation = data.ships[s].rotation;
			thisShip.data.grids = data.ships[s].grids;
			positionShip(thisShip, 0);
		}

		for(var s=0; s<targetSubmarineArr.length; s++){
			var thisSubmarine = targetSubmarineArr[s];
			resetGridShip(thisSubmarine.data.grids, 1);

			thisSubmarine.rotation = data.submarine[s].rotation;
			thisSubmarine.data.grids = data.submarine[s].grids;
			positionShip(thisSubmarine, 1);
		}
		updateBoardState(1);
	}else if(status == 'discardcard'){
		var loadedIndex = socketData.loaded.indexOf(data.index);
		if(loadedIndex == -1){
			socketData.loaded.push(data.index);
			if(gameData.playerIndex != data.index){
				for(var n=0; n<$.players[data.index].ships.length; n++){
					var thisShip = $.players[data.index].ships[n];
					if(data.discard.indexOf(n) != -1){
						thisShip.toDiscard = true;
					}else{
						thisShip.toDiscard = false;
					}
				}

				for(var n=0; n<$.players[data.index].ships.length; n++){
					var thisShip = $.players[data.index].ships[n];				
					if(thisShip.toDiscard == true){
						$.players[data.index].ships.splice(n,1);
						n--;
					}
				}
			}
		}

		if(socketData.loaded.length == gameData.totalplayers){
			socketData.loaded = [];
			removeDiscardCards();
			updateBoardState(2);
		}
	}else if(status == 'roll'){
		gameData.dieNum = data.dieNum;
		gameData.die = true;
		rollGameDie();
	}else if(status == 'attack'){
		gameData.shotsArr = data.shots;
		attackMissile();
	}else if(status == 'placecomplete'){
		var loadedIndex = socketData.loaded.indexOf(data.index);
		if(loadedIndex == -1){
			socketData.loaded.push(data.index);
		}
		if(socketData.loaded.length == gameData.totalplayers){
			socketData.loaded = [];
			updateBoardState(10);
		}
	}else if(status == 'switchplayer'){
		switchPlayer();
	}else if(status == 'bonus'){
		proceedUseBonus(data.index, data.totalBonus, data.bonusIndex);
	}else if(status == 'searchsonar'){
		socketData.loaded = [];
		checkBoardSonar(data.sonar);
	}else if(status == 'sonarcomplete'){
		var loadedIndex = socketData.loaded.indexOf(data.index);
		if(loadedIndex == -1){
			socketData.loaded.push(data.index);
		}
		if(socketData.loaded.length == gameData.totalplayers){
			socketData.loaded = [];
			if(gameData.dieChance){
				//havent roll die
				if(gameData.player == gameData.playerIndex){
					updateBoardState(3);
				}
			}else{
				updateBoardState(10);
			}
		}
	}else if(status == 'endturn'){
		endTurn();
	}
}