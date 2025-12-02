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
			$('#player'+(n+1)).val(data[n].username);
		}
		totalPlayerData.total = data.length;
		buildGamePlayers();
		postSocketUpdate('mode');
	}else if(status == 'mode'){
		goPage('mode');
		$('.fontLogText').html('');
		if(!socketData.host){
			toggleSocketLoader(true, textMultiplayerDisplay.waitingHost);
		}
	}else if(status == 'grid'){
		toggleSocketLoader(false);
		gameData.type = 'grid';
		goPage('game');
	}else if(status == 'buildGridStyle'){
		playerData.gridCategory_arr = data.category;
		playerData.gridPoints_arr = data.points;
		buildGridStyle();
		toggleGridStyle(true);
	}else if(status == 'focusGridStyle'){
		focusGridStyle($('#'+data));
	}else if(status == 'updateCounter'){
		playerData.chance = data.chance;
		playerData.updateChance = data.updateChance;
		playerData.index = data.index;
		updateCounter();
	}else if(status == 'selectrandomplayer'){
		socketData.loaded = [];
		playerData.index = data.index;
		selectRandomGamePlayer();
	}else if(status == 'updateCounterReady'){
		var loadedIndex = socketData.loaded.indexOf(data);
		if(loadedIndex == -1){
			socketData.loaded.push(data);
		}
		if(socketData.loaded.length == totalPlayerData.total && socketData.host){
			postSocketUpdate('updateCounterComplete');
		}
	}else if(status == 'updateCounterComplete'){
		$('#gridStyleHolder .fontGridStatus').html(textStrings.selectCategory);
		highlightPlayer();
	}else if(status == 'category'){
		toggleSocketLoader(false);
		gameData.type = data.type;
		categoryData.page = 1;
		goPage('category');

		$('.fontLogText').html('');
		if(!socketData.host){
			toggleSocketLoader(true, textMultiplayerDisplay.waitingHost);
		}
	}else if(status == 'updatecategorylevel'){
		categoryData.page = data.page;
		categoryData.level = data.level;
		categoryData.breadcrumb = data.breadcrumb;

		buildCategory();
		resizeGameDetail();
	}else if(status == 'updatecategory'){
		categoryData.page = data.page;
		categoryData.level = data.level;
		categoryData.breadcrumb = data.breadcrumb;

		displayCategory();
	}else if(status == 'start'){
		toggleSocketLoader(false);
		goPage('game');
	}else if(status == 'sequence'){
		gameData.sequence_arr = data;
	}else if(status == 'loadquestion'){
		socketData.loaded = [];
		loadQuestion();
	}else if(status == 'loadQuestionReady'){
		var loadedIndex = socketData.loaded.indexOf(data);
		if(loadedIndex == -1){
			socketData.loaded.push(data);
		}

		if(socketData.loaded.length == totalPlayerData.total && socketData.host){
			if(fileFest.length > 0){
				socketData.loaded = [];
				postSocketUpdate('loadQuestionAssets', {quesLandscapeSequence_arr:quesLandscapeSequence_arr, audioLandscape_arr:audioLandscape_arr});
			}else{
				postSocketUpdate('buildQuestion', {quesLandscapeSequence_arr:quesLandscapeSequence_arr, audioLandscape_arr:audioLandscape_arr});
			}
		}
	}else if(status == 'loadQuestionAssets'){
		quesLandscapeSequence_arr = data.quesLandscapeSequence_arr;
		quesPortraitSequence_arr = data.quesLandscapeSequence_arr;
		audioLandscape_arr = data.audioLandscape_arr;
		audioPortrait_arr = data.audioLandscape_arr;
		loadQuestionAssets();
	}else if(status == 'loadQuestionAssetsComplete'){
		var loadedIndex = socketData.loaded.indexOf(data);
		if(loadedIndex == -1){
			socketData.loaded.push(data);
		}

		if(socketData.loaded.length == totalPlayerData.total && socketData.host){
			postSocketUpdate('buildQuestion', {quesLandscapeSequence_arr:quesLandscapeSequence_arr, audioLandscape_arr:audioLandscape_arr});
		}
	}else if(status == 'buildQuestion'){
		quesLandscapeSequence_arr = data.quesLandscapeSequence_arr;
		quesPortraitSequence_arr = data.quesLandscapeSequence_arr;
		audioLandscape_arr = data.audioLandscape_arr;
		audioPortrait_arr = data.audioLandscape_arr;
		buildQuestion();
	}else if(status == 'updatetimer'){
		timeData.timer = data;
		$('.gameTimer').show();
		updateTimerDisplay();
	}else if(status == 'actionGamePlayer'){
		actionGamePlayer(data);
	}else if(status == 'focusTapAnswer'){
		focusTapAnswer(data.id, data.type, data.submit, data.hide);
	}else if(status == 'updateGroupID'){
		updateGroupID($('#'+data.groupDrop), $('#'+data.groupDrag), data.con);
		setGroupPosition();
	}else if(status == 'groupDragStop'){
		setGroupPosition();
		revertPosition($('#'+data));
	}else if(status == 'groupDragDrop'){
		updateGroupID($(data.groupDrop), $('#'+data.groupDrag), data.con);
		revertPosition($('#'+data.groupDrag));
	}else if(status == 'dragStart'){
		if($('#'+data.drag).hasClass('occupied')){
			if(dragDropSettings.droppedAnswerAgain){
				$('#'+data.drag).removeClass('occupied');
				playerData.correctAnswer.splice(1,0);
				
				var currentID = $('#'+data.drag).attr('id');
				$('.drop').each(function(index, element) {
					if($('#'+data.drag).attr('data-drag-id') == currentID){
						$('#'+data.drag).attr('data-drag-id', '');	
					}
				});
			}else{
				return false;
			}
		}else{
			setDragIndex($('#'+data.drag));	
		}
		setDragIndex($('#'+data.drag));
	}else if(status == 'dragStop'){
		revertPosition($('#'+data.drag));
	}else if(status == 'dropDrop'){
		if($('#'+data.drop).hasClass('occupied')){
			if($('#'+data.drop).attr('data-drag-id') != ''){
				var lastDrag = $('#'+$('#'+data.drop).attr('data-drag-id'));
				lastDrag.removeClass('occupied');
				revertPosition(lastDrag);
			}
		}else{
			playerData.correctAnswer.push(0);
		}
		
		$('#'+data.drag).addClass('occupied');
		$('#'+data.drag).attr('data-top-drop', $('#'+data.drop).attr('data-top'));
		$('#'+data.drag).attr('data-left-drop', $('#'+data.drop).attr('data-left'));
		
		$('#'+data.drop).attr('data-drag-id', data.drag);
		$('#'+data.drop).addClass('occupied');
	}else if(status == 'checkInputAnswer'){
		$('#inputHolder input').each(function(index, element) {
			$(this).val(data[index]);
		});
		checkInputAnswer();
	}else if(status == 'prepareNextQuestion'){
		TweenMax.killAll();
		stopVideoPlayer(true);
		$('#questionHolder').hide();
		$('#questionResultHolder').show();
		$('#questionResultHolder').css('opacity',0);
		
		prepareNextQuestion();
	}
}