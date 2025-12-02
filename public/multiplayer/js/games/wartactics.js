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
			$.bar["barName"+n].playerName = data[n].username.toUpperCase();
			gameData.names.push(data[n].username.toUpperCase());
			if(data[n].index == socketData.index){
				socketData.gameIndex = n;
				if(!multiplayerSettings.enterName){
					showSocketNotification(textMultiplayerDisplay.playerNotification.replace('[USER]', data[n].username));
				}
			}
		}
		gameData.totalplayers = data.length;
		if(socketData.host){
			postSocketUpdate('start');
		}
	}else if(status == 'start'){
		toggleSocketLoader(false);
		goPage('game');
	}else if(status == 'prepare'){
		gameData.randomStats = data;
		socketData.loaded = [];
		prepareBuild();
	}else if(status == 'ready'){
		var loadedIndex = socketData.loaded.indexOf(data);
		if(loadedIndex == -1){
			socketData.loaded.push(data);
		}

		if(socketData.loaded.length == gameData.totalplayers){
			socketData.loaded = [];

			var chaArr = [];
			for(var r=0; r<gameSettings.stage.row; r++){
				for(var c=0; c<gameSettings.stage.column; c++){
					if($.grid[gameData.chaSide+'_'+r+'_'+c].cha != null){
						chaArr.push($.grid[gameData.chaSide+'_'+r+'_'+c].cha.typeIndex);
					}else{
						chaArr.push(-1);
					}
				}
			}

			postSocketUpdate('readycha', {side:gameData.chaSide, cha:chaArr});
		}
	}else if(status == 'readycha'){
		if(gameData.chaSide != data.side){
			if(socketData.host){
				buildCharacters(data.side, data.cha, true);	
			}
			buildCharacters(data.side, data.cha);
		}

		var loadedIndex = socketData.loaded.indexOf(data);
		if(loadedIndex == -1){
			socketData.loaded.push(data);
		}

		if(socketData.loaded.length == gameData.totalplayers){
			socketData.loaded = [];
			if(socketData.host){
				postSocketUpdate('startbattle');
			}
		}
	}else if(status == 'startbattle'){
		gameLogsTxt.visible = false;
		toggleSocketLoader(false);
		startBattleCountdown();
		socketData.loaded = [];
	}else if(status == 'updatesimulate'){
		gameData.actions.push({time:data.time, type:data.type, object:data.object, target:data.target, data:data.data, data2:data.data2, frame:data.frame});
	}else if(status == 'endbattle'){
		var loadedIndex = socketData.loaded.indexOf(data);
		if(loadedIndex == -1){
			socketData.loaded.push(data);
		}

		if(socketData.loaded.length == gameData.totalplayers){
			socketData.loaded = [];
			if(socketData.host){
				TweenMax.to(gridMoveContainer, .5, {overwrite:true, onComplete:function(){
					postSocketUpdate('nextbattle');
				}});
			}
		}
	}else if(status == 'nextbattle'){
		socketData.loaded = [];
		checkNextBattle();
	}
}