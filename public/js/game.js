////////////////////////////////////////////////////////////
// GAME v2.3
////////////////////////////////////////////////////////////

/*!
 * 
 * GAME SETTING CUSTOMIZATION START
 * 
 */

const wheel_arr = [
	{
		src:'assets/item_slot_bankrupt.png',
		highlight:'assets/item_slot_bankrupt_h.png',
		regX:1,
		regY:227,
		point:0,
		bankrupt:true,
		free:false,
		turn:false
	},
	{
		src:'assets/item_slot_300.png',
		highlight:'assets/item_slot_300_h.png',
		regX:1,
		regY:227,
		point:300,
		bankrupt:false,
		free:false,
		turn:false
	},
	{
		src:'assets/item_slot_400.png',
		highlight:'assets/item_slot_400_h.png',
		regX:1,
		regY:227,
		point:400,
		bankrupt:false,
		free:false,
		turn:false
	},
	{
		src:'assets/item_slot_500.png',
		highlight:'assets/item_slot_500_h.png',
		regX:1,
		regY:227,
		point:500,
		bankrupt:false,
		free:false,
		turn:false
	},
	{
		src:'assets/item_slot_600.png',
		highlight:'assets/item_slot_600_h.png',
		regX:1,
		regY:227,
		point:600,
		bankrupt:false,
		free:false,
		turn:false
	},
	{
		src:'assets/item_slot_lose.png',
		highlight:'assets/item_slot_lose_h.png',
		regX:1,
		regY:227,
		point:0,
		bankrupt:false,
		free:false,
		turn:true
	},
	{
		src:'assets/item_slot_700.png',
		highlight:'assets/item_slot_700_h.png',
		regX:1,
		regY:227,
		point:700,
		bankrupt:false,
		free:false,
		turn:false
	},
	{
		src:'assets/item_slot_800.png',
		highlight:'assets/item_slot_800_h.png',
		regX:1,
		regY:227,
		point:800,
		bankrupt:false,
		free:false,
		turn:false
	},
	{
		src:'assets/item_slot_900.png',
		highlight:'assets/item_slot_900_h.png',
		regX:1,
		regY:227,
		point:900,
		bankrupt:false,
		free:false,
		turn:false
	},
	{
		src:'assets/item_slot_1000.png',
		highlight:'assets/item_slot_1000_h.png',
		regX:1,
		regY:227,
		point:1000,
		bankrupt:false,
		free:false,
		turn:false
	},
	{
		src:'assets/item_slot_bankrupt.png',
		highlight:'assets/item_slot_bankrupt_h.png',
		regX:1,
		regY:227,
		point:0,
		bankrupt:true,
		free:false,
		turn:false
	},
	{
		src:'assets/item_slot_2000.png',
		highlight:'assets/item_slot_2000_h.png',
		regX:1,
		regY:227,
		point:2000,
		bankrupt:false,
		free:false,
		turn:false
	},
	{
		src:'assets/item_slot_5000.png',
		highlight:'assets/item_slot_5000_h.png',
		regX:1,
		regY:227,
		point:5000,
		bankrupt:false,
		free:false,
		turn:false
	},
	{
		src:'assets/item_slot_300.png',
		highlight:'assets/item_slot_300_h.png',
		regX:1,
		regY:227,
		point:300,
		bankrupt:false,
		free:false,
		turn:false
	},
	{
		src:'assets/item_slot_400.png',
		highlight:'assets/item_slot_400_h.png',
		regX:1,
		regY:227,
		point:400,
		bankrupt:false,
		free:false,
		turn:false
	},
	{
		src:'assets/item_slot_500free.png',
		highlight:'assets/item_slot_500free_h.png',
		regX:1,
		regY:227,
		point:500,
		bankrupt:false,
		free:true,
		turn:false
	},
	
];

//wheels settings
const wheelSettings = {
	posY:[237,330], //panel position
	wheelRadius:237,
	bounce:1,
	speed:20,
	direction:true
};

//letters settings
const lettersSettings = {
	width:52,
	height:62,
	spaceX:5,
	spaceY:5,
	fontSize:30,
	offsetY:8,
	color:'#000',
	rows_arr:[10,12,12,10]
};

//keyboard settings
const keyboardSettings = {
	posY:[-235,-400], //panel position
	width:60,
	height:54,
	enterCode:'enter',
	enterKeyCode:13,
	deleteCode:"delete",
	deleteKeyCode:8,
	spaceY:5,
	spaceX:5,
	fontSize:25,
	offsetY:8,
	color:'#000',
	colorDisabled:'#ccc',
	totalKey:18,
	letters:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
	audio:true //letter audio
};

//game settings
const gameSettings = {
	category:true,
	categoryAllOption:true,
	randomAnswer:true,
	answerAudio:true,
	chance:5,
	spinTimer:11000,
	guessTimer:16000,
	actionTimer:16000,
	vowelTimer:16000,
	solveTimer:31000,
	vowelCost:250,
	vowelCount:3,
	vowelOption:false, //true to enable vowel letters, false for any letters
	vowelLetters:["a","e","i","o","u"],
	bonusScore:100,
	resultWinColor:'#fff',
	resultLostColor:'#E68FF8',
};

//game text display
const textStrings = {
	loading:'LOADING...',
	category:'CHOOSE CATEGORY',
	categoryAll:'ALL',
	button:{
		play:"PLAY",
		local:"LOCAL",
		online:"ONLINE",
		select:"SELECT",
		continue:"CONTINUE",
		solve:"SOLVE",
		spin:"SPIN",
		vowel:"VOWEL",
		yes:"YES",
		no:"NO"
	},
	stage:{
		spin:"SPIN THE WHEEL",
		loseScore:"[PLAYER] LOSE ALL THE MONEY",
		loseTurn:"[PLAYER] LOSE A TURN",
		guess:"GUESS A LETTER FOR $[NUMBER]",
		guessNoAnswer:"[PLAYER] LOSE A TURN",
		guessWrong:"THERE IS NO LETTER [LETTER], [PLAYER] LOSE A TURN",
		guessWrongWithoutPenalty:"THERE IS NO LETTER [LETTER]",
		guessRight:"THERE IS [NUMBER] LETTER [LETTER]",
		free:"GUESS A LETTER FOR $[NUMBER] WITHOUT PENALTY",
		vowel:"NOT ENOUGH MONEY. THIS COST $[NUMBER]",
		vowelSelect:"BUY A VOWEL FOR $250",
		vowelNoOption:"NO VOWEL OPTION",
		solve:"SOLVE THE PUZZLE",
		prepareSolve:"IS THE ANSWER CORRECT?",
		solveWrong:"WRONG ANSWER",
		solveWrongLose:"[PLAYER] LOSE ALL THE MONEY AND A TURN",
		solveRight:"ANSWER IS CORRECT, WIN BONUS $[NUMBER]",
		noLife:"[PLAYER] HAVE NO MORE TURN",
		you:"YOU",
		round:"ROUND [NUMBER], [PLAYER] TO BEGIN",
		playerTurn:"IS [PLAYER] TURN",
		playerActiveTurn:"IS YOUR TURN",
		waitingPlayer:"WAITING FOR [PLAYER]"
	},
	score:"$[NUMBER]",
	life:"x[NUMBER]",
	startSpin:"START WHEEL SPIN",
	exitTitle:'Quit Game',
	exitMessage:'Are you sure you want\nto quit game?',
	exitYes:'Proceed',
	exitNo:'Cancel',
	share:'Share your score:',
	resultWon:'Congratulation\nyou won $[NUMBER]',
	resultLost:'You lost...\nbetter luck next time'
};
	
//Social share, [SCORE] will replace with game score
const shareSettings = {
	enable:true,
	options:['facebook','twitter','whatsapp','telegram','reddit','linkedin'],
	shareTitle:'Highscore on Wheel Of Fortune Quiz Game is [SCORE]',
	shareText:'[SCORE] is mine new highscore on Wheel Of Fortune Game! Try it now!',
	customScore:true, //share a custom score to Facebook, it use customize share.php (Facebook and PHP only)
	gtag:true //Google Tag
}

/*!
 *
 * GAME SETTING CUSTOMIZATION END
 *
 */
$.editor = {enable:false};
const playerData = {score:0, chance:0};
const gameData = {paused:true, categoryNum:0, answerNum:0, lightMode:0, letters:[], key:[], vowel:[], vowelCount:0, players:0, totalRound:0};
var category_arr = [];
var sequence_arr = [];
var answer_arr = [];
const timeData = {enable:false, startDate:null, nowDate:null, timer:0, accumulate:0};
const tweenData = {score:0, tweenScore:0};
const lightData = {side:true, num:0};
const audioData = {audioNum:0};

//lighst
const lightsPos_arr = [
	{x:85, y:30, color:"Purple"},
	{x:288, y:30, color:"Blue"},
	{x:500, y:30, color:"Yellow"},
	{x:780, y:30, color:"Yellow"},
	{x:980, y:30, color:"Blue"},
	{x:1210, y:30, color:"Purple"},
];

const lightsEffects = [
	{
		speed:1,
		array:[
					{rotate:[5,15], alpha:[.8,.5]},
					{rotate:[5,20], alpha:[.8,.5]},
					{rotate:[5,10], alpha:[.8,.5]},
					{rotate:[-5,-10], alpha:[.8,.5]},
					{rotate:[-5,-20], alpha:[.8,.5]},
					{rotate:[-5,-15], alpha:[.8,.5]},
				]
	},
	{
		speed:.5,
		array:[
					{rotate:[5,8], alpha:[1,.7]},
					{rotate:[5,8], alpha:[1,.7]},
					{rotate:[5,8], alpha:[1,.7]},
					{rotate:[-5,-8], alpha:[1,.7]},
					{rotate:[-5,-8], alpha:[1,.7]},
					{rotate:[-5,-8], alpha:[1,.7]},
				]
	},
	{
		speed:.1,
		array:[
					{rotate:[5,5], alpha:[1,.7]},
					{rotate:[5,5], alpha:[1,.7]},
					{rotate:[5,5], alpha:[1,.7]},
					{rotate:[-5,-5], alpha:[1,.7]},
					{rotate:[-5,-5], alpha:[1,.7]},
					{rotate:[-5,-5], alpha:[1,.7]},
				]
	},
	{
		speed:.8,
		array:[
					{rotate:[10,-30], alpha:[.3,.5]},
					{rotate:[-5,-50], alpha:[.5,.3]},
					{rotate:[15,50], alpha:[.3,.5]},
					{rotate:[-15,-50], alpha:[.3,.5]},
					{rotate:[5,50], alpha:[.5,.3]},
					{rotate:[-10,30], alpha:[.3,.5]},
				]
	},
];


/*!
 * 
 * GAME BUTTONS - This is the function that runs to setup button event
 * 
 */
function buildGameButton(){
	$(window).focus(function() {
		if(!buttonSoundOn.visible){
			toggleSoundInMute(false);
		}

		if (typeof buttonMusicOn != "undefined") {
			if(!buttonMusicOn.visible){
				toggleMusicInMute(false);
			}
		}
	});
	
	$(window).blur(function() {
		if(!buttonSoundOn.visible){
			toggleSoundInMute(true);
		}

		if (typeof buttonMusicOn != "undefined") {
			if(!buttonMusicOn.visible){
				toggleMusicInMute(true);
			}
		}
	});

	if(audioOn){
		if(muteSoundOn){
			toggleSoundMute(true);
		}
		if(muteMusicOn){
			toggleMusicMute(true);
		}
	}

	if(!isDesktop){

	}else{
		var isInIframe = (window.location != window.parent.location) ? true : false;
		if(isInIframe){
			this.document.onkeydown = keydown;
			this.document.onkeyup = keyup;
		
			$(window).blur(function() {
				appendFocusFrame();
			});
			appendFocusFrame();
        }else{
            this.document.onkeydown = keydown;
			this.document.onkeyup = keyup;
        }
	}

	buttonLocal.cursor = "pointer";
	buttonLocal.addEventListener("click", function(evt) {
		playSound('soundButton');
		socketData.online = false;
		gameData.totalPlayers = 0;
		if(gameSettings.category){
			goPage('category');
		}else{
			goPage('game');
		}
	});

	buttonOnline.cursor = "pointer";
	buttonOnline.addEventListener("click", function(evt) {
		playSound('soundButton');
		checkQuickGameMode();
	});

	buttonStart.cursor = "pointer";
	buttonStart.addEventListener("click", function(evt) {
		playSound('soundButton');
		if ( typeof initSocket == 'function' && multiplayerSettings.enable) {
			if(multiplayerSettings.localPlay){
				toggleMainButton('local');
			}else{
				checkQuickGameMode();
			}
		}else{
			if(gameSettings.category){
				goPage('category');
			}else{
				goPage('game');
			}
		}
	});

	buttonArrowL.cursor = "pointer";
	buttonArrowL.addEventListener("click", function(evt) {
		playSound('soundButton');
		toggleCategory(false);
	});
	
	buttonArrowR.cursor = "pointer";
	buttonArrowR.addEventListener("click", function(evt) {
		playSound('soundButton');
		toggleCategory(true);
	});
	
	buttonSelect.cursor = "pointer";
	buttonSelect.addEventListener("click", function(evt) {
		playSound('soundButton');
		if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
			postSocketUpdate('start');
		}else{
			goPage('game');
		}
	});

	buttonWheelSpin.cursor = "pointer";
	buttonWheelSpin.addEventListener("click", function(evt) {
		playSound('soundButton');

		presetWheelSpin();
	});

	buttonVowel.cursor = "pointer";
	buttonVowel.addEventListener("click", function(evt) {
		toggleActionButton("vowel");
	});

	buttonSpin.cursor = "pointer";
	buttonSpin.addEventListener("click", function(evt) {
		toggleActionButton("spin");
	});
	
	buttonSolve.cursor = "pointer";
	buttonSolve.addEventListener("click", function(evt) {
		toggleActionButton("solve");
	});
	
	itemConfirm.addEventListener("click", function(evt) {
	});
	
	buttonContinue.cursor = "pointer";
	buttonContinue.addEventListener("click", function(evt) {
		playSound('soundButton');
		if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online && multiplayerSettings.rejoinRoom && multiplayerSettings.roomLists) {
			goPage('room');
			$('#roomlists').val(socketData.lastRoom);
			joinSocketRoom();
		}else{
			goPage('main');
		}
	});
	
	if(shareSettings.enable){
		buttonShare.cursor = "pointer";
		buttonShare.addEventListener("click", function(evt) {
			playSound('soundButton');
			toggleSocialShare(true);
		});

		for(let n=0; n<shareSettings.options.length; n++){
			$.share['button'+n].cursor = "pointer";
			$.share['button'+n].addEventListener("click", function(evt) {
				shareLinks(evt.target.shareOption, addCommas(playerData.score));
			});
		}
	}
	
	buttonSoundOff.cursor = "pointer";
	buttonSoundOff.addEventListener("click", function(evt) {
		toggleSoundMute(true);
	});
	
	buttonSoundOn.cursor = "pointer";
	buttonSoundOn.addEventListener("click", function(evt) {
		toggleSoundMute(false);
	});

	if (typeof buttonMusicOff != "undefined") {
		buttonMusicOff.cursor = "pointer";
		buttonMusicOff.addEventListener("click", function(evt) {
			toggleMusicMute(true);
		});
	}
	
	if (typeof buttonMusicOn != "undefined") {
		buttonMusicOn.cursor = "pointer";
		buttonMusicOn.addEventListener("click", function(evt) {
			toggleMusicMute(false);
		});
	}
	
	buttonFullscreen.cursor = "pointer";
	buttonFullscreen.addEventListener("click", function(evt) {
		toggleFullScreen();
	});
	
	buttonExit.cursor = "pointer";
	buttonExit.addEventListener("click", function(evt) {
		togglePop(true);
		toggleOptions();
	});
	
	buttonSettings.cursor = "pointer";
	buttonSettings.addEventListener("click", function(evt) {
		toggleOptions();
	});
	
	buttonYes.cursor = "pointer";
	buttonYes.addEventListener("click", function(evt) {
		togglePop(false);
		toggleOptions();
		
		stopAudio();
		stopGame();
		goPage('main');

		if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
			exitSocketRoom();
		}
	});
	
	buttonNo.cursor = "pointer";
	buttonNo.addEventListener("click", function(evt) {
		togglePop(false);
		toggleOptions();
	});
	
	window.addEventListener('blur', function() {
		TweenMax.ticker.useRAF(false);
	}, false);


	window.addEventListener('focus', function() {
		TweenMax.ticker.useRAF(true);
	}, false);

	setupLetters();
	setupWheels();
	gameData.randomLetters = keyboardSettings.letters.slice();
}

function toggleActionButton(con){
	if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
		if(!socketData.turn){
			return;
		}
	}

	playSound('soundButton');
	displayGameStage(con);
	if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
		if(socketData.turn){
			postSocketUpdate('toggleaction', con, true);
		}
	}

	preventScrolling();
}

function preventScrolling(){
	const inIframe = window.self !== window.top;
	if(inIframe){
		var keys = [32,38,37,40,39];
		$(window).on( "keydown", function(event) {
		if(keys.indexOf(event.keyCode) != -1){
			event.preventDefault();
		}
		});
	}
}

function appendFocusFrame(){
	$('#mainHolder').prepend('<div id="focus" style="position:absolute; width:100%; height:100%; z-index:1000;"></div');
	$('#focus').click(function(){
		$('#focus').remove();
	});	
}

/*!
 * 
 * TOGGLE GAME TYPE - This is the function that runs to toggle game type
 * 
 */
function toggleMainButton(con){
	if ( typeof initSocket == 'function' && multiplayerSettings.enable) {
		gameLogsTxt.visible = true;
		gameLogsTxt.text = '';
	}

	buttonStart.visible = false;
	buttonLocalContainer.visible = false;

	if(con == 'start'){
		buttonStart.visible = true;
	}else if(con == 'local'){
		buttonLocalContainer.visible = true;
	}
}

function checkQuickGameMode(){
	socketData.online = true;
	if(!multiplayerSettings.enterName){
		buttonStart.visible = false;
		buttonLocalContainer.visible = false;

		addSocketRandomUser();
	}else{
		goPage('name');
	}
}

function resizeSocketLog(){
	gameLogsTxt.font = "30px montheavy_demo";
	gameLogsTxt.textAlign = "center";
	gameLogsTxt.color = "#fff";

	if(curPage == 'main'){
		if(viewport.isLandscape){
			gameLogsTxt.x = canvasW/2;
			gameLogsTxt.y = canvasH/100 * 70;
		}else{
			gameLogsTxt.font = "25px montheavy_demo";
			gameLogsTxt.x = canvasW/2;
			gameLogsTxt.y = canvasH/100 * 75;
		}
	}else if(curPage == 'category'){
		if(viewport.isLandscape){
			gameLogsTxt.x = canvasW/2;
			gameLogsTxt.y = canvasH/100 * 70;
		}else{
			gameLogsTxt.font = "25px montheavy_demo";
			gameLogsTxt.x = canvasW/2;
			gameLogsTxt.y = canvasH/100 * 75;
		}
	}else if(curPage == 'game'){
		gameLogsTxt.font = "25px montheavy_demo";
		if(viewport.isLandscape){
			gameLogsTxt.x = canvasW/2;
			gameLogsTxt.y = canvasH/100 * 78;
		}else{
			gameLogsTxt.x = canvasW/2;
			gameLogsTxt.y = canvasH/100 * 63;
		}
	}

	itemStatusBg.x = gameLogsTxt.x;
	itemStatusBg.y = gameLogsTxt.y - 10;
}

/*!
 * 
 * KEYBOARD EVENTS - This is the function that runs for keyboard events
 * 
 */
function keydown(event) {
	if(curPage != 'game') return;
	var letter = String.fromCharCode(event.which);
	if(event.keyCode == keyboardSettings.enterKeyCode){
		letter = keyboardSettings.enterCode;
	}else if(event.keyCode == keyboardSettings.deleteKeyCode){
		letter = keyboardSettings.deleteCode;
	}else if(event.keyCode == keyboardSettings.upKeyCode){
		letter = keyboardSettings.upCode;
	}else if(event.keyCode == keyboardSettings.downKeyCode){
		letter = keyboardSettings.downCode;
	}
	matchKeyboard(letter.toUpperCase());
}

function keyup(event) {

}

/*!
 * 
 * TOGGLE SOCIAL SHARE - This is the function that runs to toggle social share
 * 
 */
function toggleSocialShare(con){
	if(!shareSettings.enable){return;}
	buttonShare.visible = con == true ? false : true;
	shareSaveContainer.visible = con == true ? false : true;
	socialContainer.visible = con;

	if(con){
		if (typeof buttonSave !== 'undefined') {
			TweenMax.to(buttonShare, 3, {overwrite:true, onComplete:toggleSocialShare, onCompleteParams:[false]});
		}
	}
}

function positionShareButtons(){
	if(!shareSettings.enable){return;}
	if (typeof buttonShare !== 'undefined') {
		if (typeof buttonSave !== 'undefined') {
			if(buttonSave.visible){
				buttonShare.x = -((buttonShare.image.naturalWidth/2) + 5);
				buttonSave.x = ((buttonShare.image.naturalWidth/2) + 5);
			}else{
				buttonShare.x = 0;
			}
		}
	}
}

/*!
 * 
 * TOGGLE POP - This is the function that runs to toggle popup overlay
 * 
 */
function togglePop(con){
	exitContainer.visible = con;
	if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
		if(curPage == 'name' || curPage == 'room'){
			if(con){
				$('#roomWrapper').hide();
			}else{
				$('#roomWrapper').show();
			}
		}
	}
}


/*!
 * 
 * DISPLAY PAGES - This is the function that runs to display pages
 * 
 */
var curPage=''
function goPage(page){
	curPage=page;
	
	$('#roomWrapper').hide();
	$('#roomWrapper .innerContent').hide();
	gameLogsTxt.visible = itemStatusBg.visible = false;

	mainContainer.visible = false;
	nameContainer.visible = false;
	roomContainer.visible = false;
	categoryContainer.visible = false;
	gameContainer.visible = false;
	resultContainer.visible = false;
	togglePop(false);
	toggleOptions(false);
	
	var targetContainer = null;
	switch(page){
		case 'main':
			targetContainer = mainContainer;
			initAnimateLights(0);
			playMusicLoop('musicMain');
			toggleMainButton('start');
		break;

		case 'name':
			targetContainer = nameContainer;
			$('#roomWrapper').show();
			$('#roomWrapper .nameContent').show();
			$('#roomWrapper .fontNameError').html('');
			$('#enterName').show();
		break;
			
		case 'room':
			targetContainer = roomContainer;
			$('#roomWrapper').show();
			$('#roomWrapper .roomContent').show();
			switchSocketRoomContent('lists');
		break;
			
		case 'category':
			targetContainer = categoryContainer;

			buttonArrowL.visible = true;
			buttonArrowR.visible = true;
			buttonSelect.visible = true;
			if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
				if(!socketData.host){
					buttonArrowL.visible = false;
					buttonArrowR.visible = false;
					buttonSelect.visible = false;
				}
			}
		break;
		
		case 'game':
			gameContainer.visible = true;
			stopMusicLoop('musicMain');
			startGame();
		break;
		
		case 'result':
			targetContainer = resultContainer;
			stopGame();
			toggleSocialShare(false);

			if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
				playerData.score = $.players[socketData.gameIndex].score;
				if($.players[socketData.gameIndex].score == 0){
					playSound("soundResult");
					initAnimateLights(1);
					playSound('soundFail');
					resultTitleTxt.color = gameSettings.resultLostColor;
					resultTitleTxt.text = textStrings.resultLost;
				}else{
					playSound("soundResultWin");
					initAnimateLights(3);
					playSound('soundWin');
					resultTitleTxt.color = gameSettings.resultWinColor;
					resultTitleTxt.text = textStrings.resultWon.replace('[NUMBER]', addCommas($.players[socketData.gameIndex].score));
				}

				if(socketData.host){
					postSocketCloseRoom();
				}else{
					exitSocketRoom();
				}
			}else{
				if(!gameData.won){
					playSound("soundResult");
					initAnimateLights(1);
					playSound('soundFail');
					resultTitleTxt.color = gameSettings.resultLostColor;
					resultTitleTxt.text = textStrings.resultLost;
				}else{
					playSound("soundResultWin");
					initAnimateLights(3);
					playSound('soundWin');
					resultTitleTxt.color = gameSettings.resultWinColor;
					resultTitleTxt.text = textStrings.resultWon.replace('[NUMBER]', addCommas(playerData.score));
				}
			}
			
			saveGame(playerData.score);
		break;
	}
	
	if(targetContainer != null){
		targetContainer.visible = true;
		targetContainer.alpha = 0;
		TweenMax.to(targetContainer, .5, {alpha:1, overwrite:true});
	}
	
	resizeCanvas();
}



/*!
 * 
 * SWITCH CATEGORY - This is the function that runs to select category name
 * 
 */
function toggleCategory(con){
	if(con){
		gameData.categoryNum++;
		gameData.categoryNum=gameData.categoryNum>category_arr.length-1?0:gameData.categoryNum;
	}else{
		gameData.categoryNum--;
		gameData.categoryNum=gameData.categoryNum<0?category_arr.length-1:gameData.categoryNum;
	}

	displayCategoryName();
	if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
		postSocketUpdate('updatecategory', gameData.categoryNum, true);
	}
}

function displayCategoryName(){
	categoryTxt.text = category_arr[gameData.categoryNum];
}

/*!
 * 
 * FILTER CATEGORY WORD - This is the function that runs to filter category
 * 
 */
function filterCategoryAnswer(){
	sequence_arr = [];
	for(n=0;n<answer_arr.length;n++){
		sequence_arr.push(n);
	}
	
	if($.editor.enable){
		return;
	}

	//do nothing if category page is off
	var filterCategory = true;
	if(!gameSettings.category){
		filterCategory = false;
	}

	//do nothing if category all is selected
	if(gameSettings.categoryAllOption && category_arr[gameData.categoryNum] == textStrings.categoryAll){
		filterCategory = false;
	}
	
	//filter the category
	if(filterCategory){
		sequence_arr = [];
		for(n=0;n<answer_arr.length;n++){
			if(category_arr[gameData.categoryNum] == answer_arr[n].category){
				sequence_arr.push(n);
			}
		}
	}

	if(gameSettings.randomAnswer){
		shuffle(sequence_arr);
	}
}

/*!
 * 
 * START GAME - This is the function that runs to start game
 * 
 */
function startGame(){
	gameData.paused = false;
	gameData.stage = "";
	gameData.won = false;
	gameData.sequenceNum = 0;
	gameData.answerNum = 0;

	tweenData.tweenScore = 0;
	playerData.score = 0;
	playerData.chance = gameSettings.chance;

	wheelMoveContainer.panel = false;
	guessKeyMoveContainer.panel = false;
	solveKeyMoveContainer.panel = false;
	vowelKeyMoveContainer.panel = false;
	actionMoveContainer.panel = false;
	wheelMoveContainer.y = 0;
	guessKeyMoveContainer.y = 0;
	solveKeyMoveContainer.y = 0;
	vowelKeyMoveContainer.y = 0;
	actionMoveContainer.y = 0;

	filterCategoryAnswer();
	togglePanel("wheel",true);
	togglePanel("guess",false);
	togglePanel("solve",false);
	togglePanel("vowel",false);
	togglePanel("action",false);

	animateWheelLights('static');

	updateGameStats();
	updateGameScore(false);

	resetPlayers();
	chanceContainer.visible = true;

	if(!$.editor.enable){
		if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
			scoreContainer.visible = false;
			chanceContainer.visible = false;
			playersContainer.visible = true;
			gameData.totalRound = gameData.totalPlayers;
			gameData.currentRound = 0;
			if(socketData.host){
				postSocketUpdate('sequence', sequence_arr, true);
				postSocketUpdate('loadanswer');
			}
		}else{
			playSound("soundIntro");
			scoreContainer.visible = true;
			gameData.totalRound = 1;
			loadAnswer();	
		}
	}
}

function resetPlayers(){
	playersContainer.visible = false;
	for(var n=0; n<4; n++){
		TweenMax.killTweensOf($.players["h"+n]);
		$.players[n].score = 0;
		$.players["h"+n].visible = false;
		$.players["score"+n].text = textStrings.score.replace("[NUMBER]", addCommas(0));
		$.players["coin"+n].x = -(($.players["score"+n].getMeasuredWidth()/2) + 15);
	}
}

function focusPlayer(){
	if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
		for(var n=0; n<4; n++){
			TweenMax.killTweensOf($.players["h"+n]);
			$.players["h"+n].visible = false;
		}
	
		$.players["h"+gameData.player].visible = true;
		animateLoop($.players["h"+gameData.player], true);	
	}
}

 /*!
 * 
 * STOP GAME - This is the function that runs to stop play game
 * 
 */
function stopGame(){
	stopSoundLoop('soundReveal');
	stopSoundLoop('soundWaiting');
	gameData.paused = true;
	TweenMax.killAll(false, true, false);
}

function saveGame(score){
	if ( typeof toggleScoreboardSave == 'function' ) { 
		$.scoreData.score = score;
		if(typeof type != 'undefined'){
			$.scoreData.type = type;	
		}
		toggleScoreboardSave(true);
	}

	/*$.ajax({
      type: "POST",
      url: 'saveResults.php',
      data: {score:score},
      success: function (result) {
          console.log(result);
      }
    });*/
}

 /*!
 * 
 * RESIZE LAYOUT - This is the function that runs to resize layout
 * 
 */
function resizeLayout(){
	wordsContainer.scaleX = wordsContainer.scaleY = 1;
	statusContainer.scaleX = statusContainer.scaleY = 1;
	guessKeyContainer.scaleX = guessKeyContainer.scaleY = 1;
	solveKeyContainer.scaleX = solveKeyContainer.scaleY = 1;
	vowelKeyContainer.scaleX = vowelKeyContainer.scaleY = 1;
	actionContainer.scaleX = actionContainer.scaleY = 1;

	var posNum = 0;
	if(viewport.isLandscape){
		scoreContainer.x = canvasW/2;
		scoreContainer.y = canvasH/100 * 15;

		wordsContainer.x = canvasW/2;
		wordsContainer.y = canvasH/100 * 37;

		statusContainer.x = canvasW/2;
		statusContainer.y = canvasH/100 * 60;

		wheelContainer.x = canvasW/2;
		wheelContainer.y = canvasH/100 * 100;

		guessKeyContainer.x = canvasW/2;
		guessKeyContainer.y = canvasH/100 * 100;
		solveKeyContainer.x = canvasW/2;
		solveKeyContainer.y = canvasH/100 * 100;
		vowelKeyContainer.x = canvasW/2;
		vowelKeyContainer.y = canvasH/100 * 100;

		actionContainer.x = canvasW/2;
		actionContainer.y = canvasH/100 * 100;

		loaderAnimate.x = statusContainer.x;
		loaderAnimate.y = statusContainer.y + 42;

		$.players[0].x = canvasW/2 - 420;
		$.players[0].y = canvasH/100 * 73;
		$.players[1].x = canvasW/2 + 420;
		$.players[1].y = canvasH/100 * 73;
		$.players[2].x = canvasW/2 - 420;
		$.players[2].y = canvasH/100 * 82;
		$.players[3].x = canvasW/2 + 420;
		$.players[3].y = canvasH/100 * 82;
	}else{
		posNum = 1;
		wordsContainer.scaleX = wordsContainer.scaleY = .85;
		statusContainer.scaleX = statusContainer.scaleY = .85;
		guessKeyContainer.scaleX = guessKeyContainer.scaleY = .85;
		solveKeyContainer.scaleX = solveKeyContainer.scaleY = .85;
		vowelKeyContainer.scaleX = vowelKeyContainer.scaleY = .85;
		actionContainer.scaleX = actionContainer.scaleY = .85;

		scoreContainer.x = canvasW/2;
		scoreContainer.y = canvasH/100 * 22;

		wordsContainer.x = canvasW/2;
		wordsContainer.y = canvasH/100 * 38;

		statusContainer.x = canvasW/2;
		statusContainer.y = canvasH/100 * 54;

		wheelContainer.x = canvasW/2;
		wheelContainer.y = canvasH/100 * 90;

		guessKeyContainer.x = canvasW/2;
		guessKeyContainer.y = canvasH/100 * 100;
		solveKeyContainer.x = canvasW/2;
		solveKeyContainer.y = canvasH/100 * 100;
		vowelKeyContainer.x = canvasW/2;
		vowelKeyContainer.y = canvasH/100 * 100;

		actionContainer.x = canvasW/2;
		actionContainer.y = canvasH/100 * 100;

		loaderAnimate.x = statusContainer.x;
		loaderAnimate.y = statusContainer.y + 32;

		$.players[0].x = canvasW/2 - 100;
		$.players[0].y = canvasH/100 * 13;
		$.players[1].x = canvasW/2 + 100;
		$.players[1].y = canvasH/100 * 13;
		$.players[2].x = canvasW/2 - 100;
		$.players[2].y = canvasH/100 * 20;
		$.players[3].x = canvasW/2 + 100;
		$.players[3].y = canvasH/100 * 20;
	}

	wheelMoveContainer.y = wheelMoveContainer.panel == true ? 0 : wheelSettings.posY[posNum];
	guessKeyMoveContainer.y = guessKeyMoveContainer.panel == true ? keyboardSettings.posY[posNum] : 0;
	solveKeyMoveContainer.y = solveKeyMoveContainer.panel == true ? keyboardSettings.posY[posNum] : 0;
	vowelKeyMoveContainer.y = vowelKeyMoveContainer.panel == true ? keyboardSettings.posY[posNum] : 0;
	actionMoveContainer.y = actionMoveContainer.panel == true ? keyboardSettings.posY[posNum] : 0;
}

/*!
 * 
 * SETUP LETTERS - This is the function that runs to setup letters
 * 
 */
function setupLetters(){
	gameData.totalLetters = 0;

	itemWords = new createjs.Bitmap(loader.getResult('itemWords'));
	centerReg(itemWords);
	wordsContainer.addChild(itemWords);

	var pos = {startX:0, startY:0};

	var totalH = (lettersSettings.height * lettersSettings.rows_arr.length);
	totalH = totalH + (lettersSettings.spaceY * (lettersSettings.rows_arr.length - 1));
	pos.startY = -(totalH/2);
	pos.startY += lettersSettings.height/2;

	for(var n=0; n<lettersSettings.rows_arr.length; n++){
		var totalW = lettersSettings.width * (lettersSettings.rows_arr[n]);
		totalW = totalW + (lettersSettings.spaceX * (lettersSettings.rows_arr[n]-1));
		pos.startX = -(totalW/2);

		for(var k=0; k<lettersSettings.rows_arr[n]; k++){
			var bgW = lettersSettings.width;
			pos.startX += (bgW/2);

			$.letter[n+'_'+k] = new createjs.Container();
			$.letter[n+'_'+k].x = pos.startX;
			$.letter[n+'_'+k].y = pos.startY;
			$.letter[n+'_'+k].letter = "";
			$.letter[n+'_'+k].revealed = false;

			$.letter[n+'_'+k+'_bg'] = new createjs.Bitmap(loader.getResult('itemLetterBg'));
			centerReg($.letter[n+'_'+k+'_bg']);

			$.letter[n+'_'+k+'_none'] = new createjs.Bitmap(loader.getResult('itemLetterHidden'));
			centerReg($.letter[n+'_'+k+'_none']);

			$.letter[n+'_'+k+'_highlight'] = new createjs.Bitmap(loader.getResult('itemLetterHighlight'));
			centerReg($.letter[n+'_'+k+'_highlight']);

			$.letter[n+'_'+k+'_show'] = new createjs.Bitmap(loader.getResult('itemLetter'));
			centerReg($.letter[n+'_'+k+'_show']);

			$.letter[n+'_'+k+'_focus'] = new createjs.Bitmap(loader.getResult('itemLetterFocus'));
			centerReg($.letter[n+'_'+k+'_focus']);
			$.letter[n+'_'+k+'_focus'].alpha = 0;

			$.letter[n+'_'+k].bgNone = $.letter[n+'_'+k+'_none'];
			$.letter[n+'_'+k].bgHighlight = $.letter[n+'_'+k+'_highlight'];
			$.letter[n+'_'+k].bgShow = $.letter[n+'_'+k+'_show'];
			$.letter[n+'_'+k].bgFocus = $.letter[n+'_'+k+'_focus'];

			$.letter[n+'_'+k+'_text'] = new createjs.Text();
			$.letter[n+'_'+k+'_text'].font = lettersSettings.fontSize + "px montheavy_demo";
			$.letter[n+'_'+k+'_text'].color = lettersSettings.color;
			$.letter[n+'_'+k+'_text'].textAlign = "center";
			$.letter[n+'_'+k+'_text'].textBaseline='alphabetic';
			$.letter[n+'_'+k+'_text'].text = "B";
			$.letter[n+'_'+k+'_text'].y = lettersSettings.offsetY;
			$.letter[n+'_'+k].text = $.letter[n+'_'+k+'_text'];
			
			$.letter[n+'_'+k].addChild($.letter[n+'_'+k+'_bg'], $.letter[n+'_'+k+'_none'], $.letter[n+'_'+k+'_show'], $.letter[n+'_'+k+'_highlight'], $.letter[n+'_'+k+'_focus'], $.letter[n+'_'+k+'_text']);
			wordsContainer.addChild($.letter[n+'_'+k]);

			pos.startX += (bgW/2) + lettersSettings.spaceX;
			gameData.totalLetters++;
		}
		pos.startY += lettersSettings.height + lettersSettings.spaceY;
	}
}

/*!
 * 
 * PREPARE KEYBOARD - This is the function that runs to prepare keyboard
 * 
 */
function prepareKeyboard(){
	shuffle(gameData.randomLetters);

	var totalKey = 18;
	var keyStoreArr = [];
	for(var n=0; n<gameData.letters.length; n++){
		var currentLetter = gameData.letters[n].letter.toUpperCase();
		if(gameData.revealLetters.indexOf(currentLetter) == -1){
			keyStoreArr.push(currentLetter);
		}
	}
	for(var n=0; n<gameData.randomLetters.length; n++){
		var currentLetter = gameData.randomLetters[n].toUpperCase();
		if(keyStoreArr.indexOf(currentLetter) == -1){
			if(gameData.revealLetters.indexOf(currentLetter) == -1){
				keyStoreArr.push(currentLetter);
				if(keyStoreArr.length >= totalKey){
					n = gameData.randomLetters.length;
				}
			}
		}
	}

	shuffle(keyStoreArr);
	var maxKeyLength = 9;
	gameData.keyArr = [];
	if(keyStoreArr.length <= maxKeyLength){
		gameData.keyArr.push([]);
		gameData.keyArr[0] = keyStoreArr;
	}else{
		maxKeyLength = Math.floor(keyStoreArr.length/2);
		var keyCount = 0;
		for(var k=0; k<keyStoreArr.length; k++){
			if(k == 0){
				gameData.keyArr.push([]);
			}else if(keyCount >= maxKeyLength){
				keyCount = 0;
				gameData.keyArr.push([]);
			}

			var rowIndex = gameData.keyArr.length-1;
			gameData.keyArr[rowIndex].push(keyStoreArr[k]);
			keyCount++;
		}
	}

	shuffle(gameData.keyArr);
	buildKeyboard("guess", gameData.keyArr, guessKeyMoveContainer);	
	if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
		if(socketData.turn){
			postSocketUpdate('buildkeyboard', {type:"guess", keyArr:gameData.keyArr}, true);
		}
	}
	
	var solveKeyArr = gameData.keyArr.slice();
	solveKeyArr[0].push("delete");
	solveKeyArr[1].push("enter");
	buildKeyboard("solve", solveKeyArr, solveKeyMoveContainer);	
	if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
		if(socketData.turn){
			postSocketUpdate('buildkeyboard', {type:"solve", keyArr:solveKeyArr}, true);
		}
	}
}

/*!
 * 
 * PREPARE VOWEL - This is the function that runs to prepare vowel
 * 
 */
function prepareVowel(){
	shuffle(gameData.letters);
	var keyStoreArr = [];
	for(var n=0; n<gameData.letters.length; n++){
		var currentLetter = gameData.letters[n].letter.toUpperCase();
		if(gameData.revealLetters.indexOf(currentLetter) == -1){
			keyStoreArr.push(currentLetter);
		}
	}
	
	shuffle(keyStoreArr);
	gameData.vowelArr = [];
	gameData.vowelArr.push([]);

	var maxLength = 5;
	var keyCount = 0;
	for(var k=0; k<keyStoreArr.length; k++){
		if(keyCount < maxLength){
			if(gameSettings.vowelOption){
				if(gameSettings.vowelLetters.indexOf(keyStoreArr[k].toLowerCase()) != -1){
					gameData.vowelArr[0].push(keyStoreArr[k]);
					keyCount++;
				}
			}else{
				gameData.vowelArr[0].push(keyStoreArr[k]);
				keyCount++;
			}
		}else{
			k = keyStoreArr.length;
		}
	}

	if(gameData.vowelArr[0].length < 2 || gameData.vowelCount < 0){
		displayGameStage("vowelNoOption");
	}else{
		buildKeyboard("vowel", gameData.vowelArr, vowelKeyMoveContainer);
		displayGameStage("vowelSelect");
	}

	if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
		if(socketData.turn){
			postSocketUpdate('buildkeyboard', {type:"vowel", keyArr:gameData.vowelArr, vowelCount:gameData.vowelCount}, true);
		}
	}
}

/*!
 * 
 * BUILD KEYBOARD - This is the function that runs to build keyboard
 * 
 */
function buildKeyboard(type, keyArr, container){
	container.removeAllChildren();

	var pos = {startX:0, startY:0};
	pos.startY += keyboardSettings.height/2;
	
	for(var n=0; n<keyArr.length; n++){
		var totalW = keyboardSettings.width * (keyArr[n].length);
		totalW = totalW + (keyboardSettings.spaceX * (keyArr[n].length - 1));
		pos.startX = -(totalW/2);

		for(var k=0; k<keyArr[n].length; k++){
			var bgW = keyboardSettings.width;
			pos.startX += (bgW/2);

			$.key[type+'_'+n+'_'+k] = new createjs.Container();
			$.key[type+'_'+n+'_'+k].x = pos.startX;
			$.key[type+'_'+n+'_'+k].y = pos.startY;
			$.key[type+'_'+n+'_'+k].letter = keyArr[n][k];

			$.key[type+'_'+n+'_'+k+'_bg'] = new createjs.Bitmap(loader.getResult('itemBgLetterButton'));
			centerReg($.key[type+'_'+n+'_'+k+'_bg']);

			$.key[type+'_'+n+'_'+k+'_bg_hidden'] = new createjs.Bitmap(loader.getResult('itemBgLetterHidden'));
			centerReg($.key[type+'_'+n+'_'+k+'_bg_hidden']);
			$.key[type+'_'+n+'_'+k+'_bg_hidden'].visible = false;

			$.key[type+'_'+n+'_'+k+'_bg_secret'] = new createjs.Bitmap(loader.getResult('itemBgLetterVowel'));
			centerReg($.key[type+'_'+n+'_'+k+'_bg_secret']);
			$.key[type+'_'+n+'_'+k+'_bg_secret'].visible = false;

			$.key[type+'_'+n+'_'+k+'_text'] = new createjs.Text();
			$.key[type+'_'+n+'_'+k+'_text'].font = keyboardSettings.fontSize + "px montheavy_demo";
			$.key[type+'_'+n+'_'+k+'_text'].color = keyboardSettings.color;
			$.key[type+'_'+n+'_'+k+'_text'].textAlign = "center";
			$.key[type+'_'+n+'_'+k+'_text'].textBaseline='alphabetic';
			$.key[type+'_'+n+'_'+k+'_text'].text = keyArr[n][k].toUpperCase();
			$.key[type+'_'+n+'_'+k+'_text'].y = keyboardSettings.offsetY;

			$.key[type+'_'+n+'_'+k].bg = $.key[type+'_'+n+'_'+k+'_bg'];
			$.key[type+'_'+n+'_'+k].bgHidden = $.key[type+'_'+n+'_'+k+'_bg_hidden'];
			$.key[type+'_'+n+'_'+k].bgSecret = $.key[type+'_'+n+'_'+k+'_bg_secret'];
			$.key[type+'_'+n+'_'+k].text = $.key[type+'_'+n+'_'+k+'_text'];

			$.key[type+'_'+n+'_'+k+'_icon'] = null;
			
			if(type == "vowel"){
				$.key[type+'_'+n+'_'+k].bgSecret.visible = true;
			}

			if(keyArr[n][k] == keyboardSettings.deleteCode){
				$.key[type+'_'+n+'_'+k+'_bg'] = new createjs.Bitmap(loader.getResult('itemBgLetterButtonDel'));
				centerReg($.key[type+'_'+n+'_'+k+'_bg']);
				$.key[type+'_'+n+'_'+k+'_text'].text = "";

				$.key[type+'_'+n+'_'+k+'_icon'] = new createjs.Bitmap(loader.getResult('iconDel'));
				centerReg($.key[type+'_'+n+'_'+k+'_icon']);
			}

			if(keyArr[n][k] == keyboardSettings.enterCode){
				$.key[type+'_'+n+'_'+k+'_bg'] = new createjs.Bitmap(loader.getResult('itemBgLetterButtonEnter'));
				centerReg($.key[type+'_'+n+'_'+k+'_bg']);
				$.key[type+'_'+n+'_'+k+'_text'].text = "";
				gameData.enterButton = $.key[type+'_'+n+'_'+k];

				$.key[type+'_'+n+'_'+k+'_icon'] = new createjs.Bitmap(loader.getResult('iconSolve'));
				centerReg($.key[type+'_'+n+'_'+k+'_icon']);
			}

			$.key[type+'_'+n+'_'+k].cursor = "pointer";
			$.key[type+'_'+n+'_'+k].addEventListener("click", function(evt) {
				matchKeyboard(evt.currentTarget.letter.toUpperCase());
			});
			
			$.key[type+'_'+n+'_'+k].addChild($.key[type+'_'+n+'_'+k+'_bg'], $.key[type+'_'+n+'_'+k+'_bg_hidden'], $.key[type+'_'+n+'_'+k+'_text'], $.key[type+'_'+n+'_'+k+'_bg_secret'], $.key[type+'_'+n+'_'+k+'_icon']);
			container.addChild($.key[type+'_'+n+'_'+k]);

			pos.startX += (bgW/2) + keyboardSettings.spaceX;
		}
		pos.startY += keyboardSettings.height + keyboardSettings.spaceY;
	}
}

/*!
 * 
 * SETUP WHEELS - This is the function that runs to setup wheels
 * 
 */
function setupWheels(){
	var wheelRadius = 360 / wheel_arr.length;
	for(var n=0;n<wheel_arr.length;n++){
		//wheel
		var thisWheel = new createjs.Bitmap(loader.getResult('wheel'+n));
		thisWheel.regX = wheel_arr[n].regX;
		thisWheel.regY = wheel_arr[n].regY;
		thisWheel.x = 0;
		thisWheel.y = 0;
		thisWheel.rotation = (wheelRadius * n) + 90;	
		
		$.wheel[n] = new createjs.Bitmap(loader.getResult('wheelH'+n));
		$.wheel[n].regX = wheel_arr[n].regX;
		$.wheel[n].regY = wheel_arr[n].regY;
		$.wheel[n].x = 0;
		$.wheel[n].y = 0;
		$.wheel[n].rotation = thisWheel.rotation;
		$.wheel[n].visible = false;
		
		wheelSlotsContainer.addChild(thisWheel, $.wheel[n]);
	}
	
	//lights
	gameData.lightNum = 20;
	var wheelRadius = 360 / gameData.lightNum;
	for(var n=0;n<gameData.lightNum;n++){
		var _frameW=22;
		var _frameH=22;
		var _frame = {"regX": _frameW/2, "regY": _frameH/2, "height": _frameH, "count": 2, "width": _frameW};
		var _animations = {off:{frames: [0], speed:1},
							on:{frames: [1], speed:1}};
							
		itemLightData = new createjs.SpriteSheet({
			"images": [loader.getResult("itemWheelLight").src],
			"frames": _frame,
			"animations": _animations
		});
		
		$.lights["wheel"+n] = new createjs.Sprite(itemLightData, "off");
		$.lights["wheel"+n].framerate = 20;
		$.lights["wheel"+n].x = -100;
		getAnglePosition($.lights["wheel"+n], 0, 0, wheelSettings.wheelRadius, (wheelRadius * n));
		
		wheelLightsContainer.addChild($.lights["wheel"+n]);	
	}
}

function getAnglePosition(obj, x1, y1, radius, angle){
    obj.x = x1 + radius * Math.cos(angle * Math.PI/180);
    obj.y = y1 + radius * Math.sin(angle * Math.PI/180);
}

/*!
 * 
 * LOAD ANSWER - This is the function that runs to load answer
 * 
 */
function toggleAnswerLoader(con){
	loaderAnimate.visible = con;
	if(con){
		loaderAnimate.gotoAndPlay('loading');
	}else{
		loaderAnimate.gotoAndPlay('static');	
	}
}

function loadAnswer(){
	gameData.focusLetter = [];
	gameData.vowelCount = gameSettings.vowelCount;

	stopAudio();
	displayGameStage("loading");
	removeSoundAssets();
	fileFest=[];
	
	gameData.sequenceNum = sequence_arr[gameData.answerNum];
	if($.editor.enable){
		gameData.sequenceNum = gameData.answerNum;
	}

	audioData.audioLoop = [];
	if(gameSettings.answerAudio){
		var answerAudio = answer_arr[gameData.sequenceNum].audio;
		answerAudio = answerAudio == undefined ? '' : answerAudio;

		if(answerAudio != ''){
			audioData.audioLoop.push({id:'answerAudio'});
			fileFest.push({src:answerAudio, id:'answerAudio'})
		}
	}

	if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
		postSocketUpdate('loadanswerready', socketData.gameIndex);
	}else{
		if(fileFest.length > 0){
			loadAnswerAssets();
		}else{
			prepareAnswer();
		}
	}
}


function prepareAnswer(){
	gameData.letters = [];

	hintTxt.text = answer_arr[gameData.sequenceNum].hint;
	gameData.answer = answer_arr[gameData.sequenceNum].answer;
	gameData.revealLetters = [];
	gameData.words = [];

	//console.log(gameData.answer);

	var currentWord = "";
	var totalRevealLetters = 0;
	for(var n=0; n<gameData.answer.length; n++){
		var thisLetter = gameData.answer.substring(n,n+1).toUpperCase();
		if(thisLetter == " "){
			gameData.words.push(currentWord);
			currentWord = "";
		}else{
			totalRevealLetters++;
			var letterIndex = gameData.letters.findIndex(x => x.letter === thisLetter);
			if(letterIndex != -1){
				gameData.letters[letterIndex].count++;
			}else{
				gameData.letters.push({letter:thisLetter, count:1});
			}
			
			currentWord += thisLetter;
		}

		if(n == gameData.answer.length-1){
			gameData.words.push(currentWord);
		}
	}

	//find reveal letters
	var revealCount = Math.floor(totalRevealLetters/lettersSettings.rows_arr.length);
	sortOnObject(gameData.letters, "count", false);
	var storeLetters = [];
	for(var n=0; n<gameData.letters.length; n++){
		if(gameData.letters[n].count <= 2){
			storeLetters.push({letter:gameData.letters[n].letter});
		}
	}

	shuffle(storeLetters);
	var revealArray = storeLetters;
	if(revealArray.length < revealCount){
		revealArray = gameData.letters;
	}

	for(var n=0; n<revealCount; n++){
		gameData.revealLetters.push(revealArray[n].letter.toUpperCase());
	}

	if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
		postSocketUpdate('prepareanswerready', socketData.gameIndex);
	}else{
		buildAnswer();
	}
}


function buildAnswer(){
	//find row
	var wordIndex = 0;
	var wordTempData = {currentSentence:"", saveSentence:""};
	var wordRow = [];
	for(var n=0; n<lettersSettings.rows_arr.length; n++){
		wordTempData.currentSentence = "";
		wordTempData.saveSentence = "";

		for(var w=wordIndex; w<gameData.words.length; w++){
			wordTempData.saveSentence = wordTempData.currentSentence;

			if(wordTempData.currentSentence == ""){
				wordTempData.currentSentence += gameData.words[w];
			}else{
				wordTempData.currentSentence += " "+gameData.words[w];
			}

			if(wordTempData.currentSentence.length > lettersSettings.rows_arr[n]){
				wordIndex = w;
				w = gameData.words.length;
				if(wordTempData.saveSentence != "")
					wordRow.push(wordTempData.saveSentence);
			}else if(w == gameData.words.length-1){
				w = gameData.words.length;
				wordIndex = w;
				if(wordTempData.currentSentence != "")
					wordRow.push(wordTempData.currentSentence);
			}
		}
	}

	if(wordRow.length <= 2){
		wordRow.unshift ([]);
	}

	var finalSolve = "";
	for(var n=0; n<lettersSettings.rows_arr.length; n++){
		var thisWordRow = "";
		var thisWordRowIndex = 0;
		var range = 0;

		if(n < wordRow.length){
			thisWordRow = wordRow[n];
			if(thisWordRow.length > 0){
				range = Math.floor(lettersSettings.rows_arr[n] - thisWordRow.length);
				range = Math.floor(range/2);

				if(n == wordRow.length-1){
					finalSolve += thisWordRow;
				}else{
					finalSolve += thisWordRow+" ";
				}
			}
		}

		for(var k=0; k<lettersSettings.rows_arr[n]; k++){
			$.letter[n+'_'+k].bgNone.scaleX = 1;
			$.letter[n+'_'+k].bgHighlight.scaleX = 1;
			$.letter[n+'_'+k].bgShow.scaleX = 1;
			$.letter[n+'_'+k].text.scaleX = 1;

			$.letter[n+'_'+k].bgNone.visible = true;
			$.letter[n+'_'+k].bgHighlight.visible = false;
			$.letter[n+'_'+k].bgShow.visible = false;
			$.letter[n+'_'+k].letter = "";
			$.letter[n+'_'+k].text.text = "";
			$.letter[n+'_'+k].revealed = false;

			if(k >= range && thisWordRowIndex < thisWordRow.length && thisWordRow != ""){
				var currentLetter = thisWordRow.substring(thisWordRowIndex,thisWordRowIndex+1).toUpperCase();
				if(currentLetter != " "){
					$.letter[n+'_'+k].letter = currentLetter;
					if($.editor.enable){
						animateLetter(n,k,"show",currentLetter, 0);
					}else{
						if(keyboardSettings.letters.indexOf(currentLetter.toLowerCase()) == -1){
							gameData.revealLetters.push(currentLetter.toUpperCase());
							animateLetter(n,k,"show",currentLetter, 1);
						}else if(gameData.revealLetters.indexOf(currentLetter) != -1){
							animateLetter(n,k,"show",currentLetter, 1);
						}else{
							animateLetter(n,k,"blank", '', 1);
						}
					}
				}
				thisWordRowIndex++;
			}
		}
	}

	if($.editor.enable){
		toggleAnswerLoader(false);
	}else{
		if(finalSolve != gameData.answer){
			loadNextAnswer();
		}else{
			if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
				if(socketData.turn){
					prepareKeyboard();
				}
				displayGameStage("round");
			}else{
				prepareKeyboard();
				displayGameStage("spin");	
			}
		}
	}
}

function loadNextAnswer(){
	gameData.answerNum++;
	if(gameData.answerNum > sequence_arr.length-1){
		gameData.answerNum = 0;
	}

	if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
		if(socketData.host){
			postSocketUpdate('loadanswer'); 
		}
	}else{
		loadAnswer();	
	}
}

/*!
 * 
 * ANIMATE LETTER - This is the function that runs to animate letter
 * 
 */
function animateLetter(n,k,con,letter,delay){
	var flipTween = .3;
	var targetLetter = $.letter[n+'_'+k];
	if(con == "blank"){
		TweenMax.to(targetLetter.bgNone, flipTween, {delay:delay, scaleX:0, overwrite:true, onComplete:function(){
			targetLetter.bgShow.scaleX = 0;
			targetLetter.bgShow.visible = true;
			TweenMax.to(targetLetter.bgShow, flipTween, {scaleX:1, overwrite:true});
		}});
	}else if(con == "show"){
		targetLetter.revealed = true;
		targetLetter.bgShow.scaleX = 0;
		TweenMax.to(targetLetter.bgNone, flipTween, {delay:delay, scaleX:0, overwrite:true, onComplete:function(){
			targetLetter.letter = letter;
			targetLetter.text.text = letter;
			targetLetter.text.scaleX = 0;
			TweenMax.to(targetLetter.text, flipTween, {scaleX:1, overwrite:true});

			targetLetter.bgShow.scaleX = 0;
			targetLetter.bgShow.visible = true;
			TweenMax.to(targetLetter.bgShow, flipTween, {scaleX:1, overwrite:true});
		}});
	}else if(con == "reveal"){
		targetLetter.revealed = true;
		targetLetter.bgHighlight.alpha = 0;
		targetLetter.bgHighlight.visible = true;
		TweenMax.to(targetLetter.bgHighlight, flipTween, {delay:delay, alpha:1, overwrite:true, onStart:function(){
			playSound("soundDing");
		},onComplete:function(){
			TweenMax.to(targetLetter.bgShow, flipTween, {scaleX:0, overwrite:true});
			TweenMax.to(targetLetter.bgHighlight, flipTween, {delay:.5, scaleX:0, overwrite:true, onStart:function(){
				playSound("soundFlip");
			}, onComplete:function(){
				targetLetter.letter = letter;
				targetLetter.text.text = letter;
				targetLetter.text.scaleX = 0;
				TweenMax.to(targetLetter.text, flipTween, {scaleX:1, overwrite:true});

				targetLetter.bgShow.scaleX = 0;
				targetLetter.bgShow.visible = true;
				TweenMax.to(targetLetter.bgShow, flipTween, {scaleX:1, overwrite:true});
			}});
		}});
	}
}

/*!
 * 
 * TOGGLE PANEL - This is the function that runs to toggle panel
 * 
 */
function togglePanel(type,con){
	var targetContainer;
	var posY;

	var posNum = viewport.isLandscape == true ? 0 : 1;
	if(type == "wheel"){
		targetContainer = wheelMoveContainer;
		posY = con == true ? 0 : wheelSettings.posY[posNum];
	}else if(type == "guess"){
		targetContainer = guessKeyMoveContainer;
		posY = con == true ? keyboardSettings.posY[posNum] : 0;
	}else if(type == "solve"){
		targetContainer = solveKeyMoveContainer;
		posY = con == true ? keyboardSettings.posY[posNum] : 0;
	}else if(type == "vowel"){
		targetContainer = vowelKeyMoveContainer;
		posY = con == true ? keyboardSettings.posY[posNum] : 0;
	}else if(type == "action"){
		targetContainer = actionMoveContainer;
		posY = con == true ? keyboardSettings.posY[posNum] : 0;

		if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
			if(socketData.turn){
				buttonVowel.visible = buttonSpin.visible = buttonSolve.visible = true;
			}else{
				buttonVowel.visible = buttonSpin.visible = buttonSolve.visible = false;
			}
		}
	}

	if(targetContainer != null){
		if(targetContainer.panel != con){
			targetContainer.panel = con;
			TweenMax.to(targetContainer, .5, {y:posY, overwrite:true});
		}
	}
}

/*!
 * 
 * START WHEEL SPIN - This is the function that runs to start wheel spin
 * 
 */
function presetWheelSpin(){
	var wheelRadius = 360 / wheel_arr.length;
	var rotateNum = Math.floor(Math.random()*wheel_arr.length);
	var randomNum = randomIntFromInterval(-(wheelRadius/2.2), wheelRadius/2.2);
	if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
		if(socketData.turn){
			postSocketUpdate('startwheelspin', {rotateNum:rotateNum, randomNum:randomNum});
		}
	}else{
		startWheelSpin(rotateNum, randomNum);
	}
}

function startWheelSpin(rotateNum, randomNum){
	if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
		gameLogsTxt.visible = itemStatusBg.visible = false;
		toggleSocketLoader(false);
	}

	gameData.wheelPoint = 0;
	gameData.wheelFree = false;
	gameData.wheelSound = 0;

	playSound("soundBegin");
	toggleGameTimer(false);
	initAnimateLights(1);

	buttonWheelSpin.visible = false;
	gameData.wheelSound = 0;

	for(var n=0; n< 10; n++){
		if(wheelSlotsContainer.rotation > 360){
				wheelSlotsContainer.rotation -= 360;
		}else if(wheelSlotsContainer.rotation < -360){
			wheelSlotsContainer.rotation += 360;
		}else{
			n = 10;
		}
	}

	var wheelRadius = 360 / wheel_arr.length;
	var bounceNum = 0;
	var innerNum = rotateNum;

	if(!wheelSettings.direction){
		bounceNum = wheelSlotsContainer.rotation - 90;
		rotateNum = Math.abs((wheelRadius * (rotateNum)) + (wheelRadius/2));
		rotateNum += 90;
	}else{
		bounceNum = wheelSlotsContainer.rotation + 90;
		rotateNum = wheel_arr.length - rotateNum;
		rotateNum = Math.abs((wheelRadius * (rotateNum)) - (wheelRadius/2));
		rotateNum -= 90;	
	}

	rotateNum += randomNum;

	var totalRound = Math.floor(wheelSettings.speed/3.5);
	var totalRoundNum = 360 * totalRound;
	var toRotate = -(totalRoundNum + rotateNum);

	if(wheelSettings.direction){
		toRotate = Math.abs(totalRoundNum + rotateNum);
	}
	
	animateWheelLights('spin');
	TweenMax.to(wheelSlotsContainer, wheelSettings.bounce, {delay:.5, rotation:bounceNum, ease:Back.easeIn, overwrite:true, onStart:function(){
		playSound("soundWheelStart");
	}, onComplete:function(){
		TweenMax.to(wheelSlotsContainer, totalRound, {rotation:toRotate, overwrite:true, ease: Circ.easeOut, onComplete:function(){
			gameData.wheelNum = innerNum;
			TweenMax.to(wheelSlotsContainer, .5, {overwrite:true, onComplete:function(){
				checkWheelResult();
			}});
		}});
	}});
}

function checkWheelResult(){
	$.wheel[gameData.wheelNum].visible = true;
	animateLoop($.wheel[gameData.wheelNum], true);
	gameData.wheelPoint = wheel_arr[gameData.wheelNum].point;
	gameData.wheelFree = wheel_arr[gameData.wheelNum].free;
	gameData.wheelTurn = wheel_arr[gameData.wheelNum].turn;
	gameData.wheelBankrupt = wheel_arr[gameData.wheelNum].bankrupt;

	var nextStage = "";
	if(gameData.wheelBankrupt){
		playSound("soundWheelLose");
		animateWheelLights('lose');
		nextStage = "loseScore"
	}else if(gameData.wheelTurn){
		playSound("soundWheelLose");
		animateWheelLights('lose');
		nextStage = "loseTurn"
	}else{
		playSound("soundWheelWin");
		animateWheelLights('win');
		nextStage = "guess"
	}

	TweenMax.to(wheelSlotsContainer, 1, {overwrite:true, onComplete:function(){
		displayGameStage(nextStage);
	}});
}

function resetWheelSegment(){
	for(var n=0;n<wheel_arr.length;n++){
		TweenMax.killTweensOf($.wheel[n]);
		$.wheel[n].alpha = 0;
	}
}

/*!
 * 
 * UPDATE GAME STATS - This is the function that runs to update game stats
 * 
 */
function updateGameStats(){
	lifeTxt.text = textStrings.life.replace("[NUMBER]", playerData.chance);
}

function resetPlayerScore(){
	if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
		$.players[gameData.player].score = 0;
	}else{
		playerData.score = 0;
	}
}

function updatePlayerScore(con, score){
	if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
		if(con){
			$.players[gameData.player].score += score;
		}else{
			$.players[gameData.player].score -= score;
		}
	}else{
		if(con){
			playerData.score += score;
		}else{
			playerData.score -= score;
		}
	}
}

function updateGameScore(con){
	if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
		if(socketData.turn){
			postSocketUpdate('updateplayerscore', {score:$.players[gameData.player].score, index:socketData.gameIndex, con:con});
		}
	}else{
		if(con){
			playSound("soundScore");
		}
	
		TweenMax.to(tweenData, .5, {tweenScore:playerData.score, overwrite:true, onUpdate:function(){
			scoreTxt.text = textStrings.score.replace('[NUMBER]', addCommas(Math.floor(tweenData.tweenScore)));
			itemCoin.x = -((scoreTxt.getMeasuredWidth()/2) + 30);
		}});
	}
}

/*!
 * 
 * DISPLAY GAME STAGE - This is the function that runs to display game stage
 * 
 */
function displayGameStage(con){
	if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
		gameLogsTxt.visible = itemStatusBg.visible = false;
		toggleSocketLoader(false);
	}

	stopSoundLoop('soundReveal');
	stopSoundLoop('soundWaiting');
	toggleAnswerLoader(false);

	var nextStage = "";
	var nextStageTween = 0;
	gameData.stage = con;

	timeData.countdown = 0;
	timerContainer.visible = false;

	var statusText = "";
	if(con == "loading"){
		statusText = "";
		toggleAnswerLoader(true);
		resetWheelSegment();
		toggleGameTimer(false);
		togglePanel("wheel",false);
		togglePanel("guess",false);
		togglePanel("solve",false);
		togglePanel("action",false);

		//reset
		for(var n=0; n<lettersSettings.rows_arr.length; n++){	
			for(var k=0; k<lettersSettings.rows_arr[n]; k++){
				$.letter[n+'_'+k].bgNone.scaleX = 1;
				$.letter[n+'_'+k].bgHighlight.scaleX = 1;
				$.letter[n+'_'+k].bgShow.scaleX = 1;
				$.letter[n+'_'+k].text.scaleX = 1;
	
				$.letter[n+'_'+k].bgNone.visible = true;
				$.letter[n+'_'+k].bgHighlight.visible = false;
				$.letter[n+'_'+k].bgShow.visible = false;
				$.letter[n+'_'+k].letter = "";
				$.letter[n+'_'+k].text.text = "";
			}
		}
	}else if(con == "round"){
		initAnimateLights(0);
		focusPlayer();
		statusText = textStrings.stage.round.replace("[NUMBER]", gameData.currentRound+1);

		playSound("soundIntro");
		resetWheelSegment();
		toggleGameTimer(false);
		togglePanel("wheel",false);
		togglePanel("guess",false);
		togglePanel("solve",false);
		togglePanel("action",false);

		nextStage = "spin";
		nextStageTween = 3;
	}else if(con == "turn"){
		initAnimateLights(0);
		focusPlayer();
		if(socketData.turn){
			statusText = textStrings.stage.playerActiveTurn;
		}else{
			statusText = textStrings.stage.playerTurn;
		}

		resetWheelSegment();
		toggleGameTimer(false);
		togglePanel("wheel",false);
		togglePanel("guess",false);
		togglePanel("solve",false);
		togglePanel("action",false);
		
		nextStage = "spin";
		nextStageTween = 2;
	}else if(con == "spin"){
		initAnimateLights(0);
		statusText = textStrings.stage.spin;

		if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
			if(socketData.turn){
				buttonWheelSpin.visible = true;
			}else{
				buttonWheelSpin.visible = false;
			}
		}else{
			buttonWheelSpin.visible = true;
		}
		timeData.countdown = gameSettings.spinTimer;
		resetWheelSegment();
		toggleGameTimer(true);
		togglePanel("wheel",true);
		togglePanel("guess",false);
		togglePanel("solve",false);
		togglePanel("action",false);
		showPlayerWaiting();
	}else if(con == "loseScore"){
		statusText = textStrings.stage.loseScore;
		resetPlayerScore();
		updateGameScore(false);
		nextStage = "checkStats";
		nextStageTween = 2;
	}else if(con == "loseTurn"){
		statusText = textStrings.stage.loseTurn;
		playerData.chance--;
		updateGameStats();
		nextStage = "checkStats";
		nextStageTween = 2;
	}else if(con == "guess"){
		initAnimateLights(3);
		statusText = statusTxt.text;
		nextStage = "guessLetter";
		nextStageTween = 1;
	}else if(con == "guessLetter"){
		initAnimateLights(1);
		if(gameData.wheelFree){
			statusText = textStrings.stage.free.replace("[NUMBER]", addCommas(gameData.wheelPoint));
		}else{
			statusText = textStrings.stage.guess.replace("[NUMBER]", addCommas(gameData.wheelPoint));
		}
		timeData.countdown = gameSettings.guessTimer;
		toggleGameTimer(true);
		togglePanel("wheel",false);
		togglePanel("guess",true);
		showPlayerWaiting();
		gameData.keyComplete = false;
	}else if(con == "guessWrong"){
		statusText = textStrings.stage.guessWrong.replace("[LETTER]", gameData.guessLetter);
		playerData.chance--;
		updateGameStats();
		nextStage = "checkStats";
		nextStageTween = 2;
	}else if(con == "guessWrongWithoutPenalty"){
		statusText = textStrings.stage.guessWrongWithoutPenalty.replace("[LETTER]", gameData.guessLetter);
		nextStage = "checkStats";
		nextStageTween = 2;
	}else if(con == "guessNoAnswer"){
		statusText = textStrings.stage.guessNoAnswer.replace("[LETTER]", gameData.guessLetter);
		playerData.chance--;
		updateGameStats();
		nextStage = "checkStats";
		nextStageTween = 2;
	}else if(con == "guessRight"){
		statusText = textStrings.stage.guessRight.replace("[LETTER]", gameData.guessLetter);
		statusText = statusText.replace("[NUMBER]", gameData.guessFound);
		if(gameData.guessScore){
			updatePlayerScore(true, gameData.guessFound * gameData.wheelPoint);
			updateGameScore(true);
		}
		nextStage = "action";
		nextStageTween = gameData.stageTween;
	}else if(con == "action"){
		initAnimateLights(0);
		statusText = statusTxt.text;
		timeData.countdown = gameSettings.actionTimer;
		toggleGameTimer(true);
		togglePanel("action",true);
		togglePanel("wheel",false);
		togglePanel("guess",false);
		togglePanel("vowel",false);
		showPlayerWaiting();

		var totalLetters = 0;
		var revealedLetters = 0;
		for(var n=0; n<lettersSettings.rows_arr.length; n++){
			for(var k=0; k<lettersSettings.rows_arr[n]; k++){
				if($.letter[n+'_'+k].bgShow.visible){
					totalLetters++;
					if($.letter[n+'_'+k].revealed){
						revealedLetters++;
					}
				}
			}
		}
		
		if(revealedLetters == totalLetters){
			gameData.bonusCount = 0;
			gameData.correctAnswer = true;
			togglePanel("action",false);
			displayGameStage("checkSolve");
			return;
		}
	}else if(con == "checkStats"){
		statusText = statusTxt.text;
		resetFocusLetter();

		if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
			if(gameData.wheelFree){
				displayGameStage("spin");
				return;
			}else{
				if(socketData.turn){
					postSocketUpdate('nextplayer');
				}
			}
		}else{
			if(playerData.chance <= 0){
				gameData.won = false;
				displayGameStage("noLife");
				return;
			}else{
				displayGameStage("spin");
				return;
			}
		}
	}else if(con == "solve"){
		statusText = textStrings.stage.solve;
		timeData.countdown = gameSettings.solveTimer;
		playSoundLoop('soundWaiting');
		togglePanel("action",false);
		togglePanel("solve",true);
		getFocusLetters();
		checkSolveEnter(false);
		toggleGameTimer(true);
		showPlayerWaiting();
		gameData.keyComplete = false;
	}else if(con == "solveWrong"){
		statusText = textStrings.stage.solveWrong;
		nextStageTween = 2;
		nextStage = "solveWrongLose";
		playSound("soundFail");
		playSound("soundCrowd");
	}else if(con == "solveWrongLose"){
		statusText = textStrings.stage.solveWrongLose;
		playerData.chance--;
		resetPlayerScore();
		updateGameScore(true);
		updateGameStats();
		nextStage = "checkStats";
		nextStageTween = 2;
	}else if(con == "solveRight"){
		var bonusScore = gameData.bonusCount * gameSettings.bonusScore;
		statusText = textStrings.stage.solveRight.replace("[NUMBER]", addCommas(bonusScore));
		updatePlayerScore(true, bonusScore);
		updateGameScore(true);
		gameData.won = true;
		initAnimateLights(3);
		playSound("soundComplete");
		checkEndGame();
	}else if(con == "vowel"){
		statusText = textStrings.stage.vowel.replace("[NUMBER]", addCommas(gameSettings.vowelCost));
		var checkScore = playerData.score;
		if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
			checkScore = $.players[gameData.player].score
		}

		if(checkScore >= gameSettings.vowelCost){
			gameData.vowelCount--;
			if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
				if(socketData.turn){
					prepareVowel();
				}
			}else{
				prepareVowel();
			}
			return;
		}else{
			timeData.accumulate += timeData.elapsedTime;
			nextStage = "action";
		}
	}else if(con == "vowelSelect"){
		statusText = textStrings.stage.vowelSelect;
		gameData.keyComplete = false;
		timeData.countdown = gameSettings.vowelTimer;
		toggleGameTimer(true);
		togglePanel("action", false);
		togglePanel("vowel", true);
		showPlayerWaiting();
	}else if(con == "vowelNoOption"){
		statusText = textStrings.stage.vowelNoOption;
		gameData.keyComplete = true;
		togglePanel("action", true);
		togglePanel("vowel", false);
		timeData.accumulate += timeData.elapsedTime;
		nextStage = "action";
	}else if(con == "noLife"){
		statusText = textStrings.stage.noLife;
		gameData.keyComplete = true;
		togglePanel("wheel",false);
		togglePanel("guess",false);
		togglePanel("solve",false);
		togglePanel("vowel",false);
		togglePanel("action",false);
		checkEndGame();
	}else if(con == "prepareSolve"){
		statusText = textStrings.stage.prepareSolve;
		nextStage = "checkSolve";
		nextStageTween = 2;
		
		playSoundLoop('soundReveal');
		initAnimateLights(2);
		animateFocusLetter(false);
		togglePanel("solve",false);
	}else if(con == "checkSolve"){
		if(gameData.correctAnswer){
			if(audioData.audioLoop.length > 0){
				playSoundLoop('soundReveal');
				playAnswerAudio();
			}else{
				displayGameStage("solveRight");
			}
			return;
		}else{
			displayGameStage("solveWrong");
			return;
		}
	}
	
	statusText = replacePlayerName(statusText);
	statusTxt.text = statusText;
	if(timeData.countdown > 0){
		timerTxt.text = timerRedTxt.text = millisecondsToTimeGame(timeData.countdown);
	}

	if(nextStage != ""){
		TweenMax.to(statusStageContainer, nextStageTween, {overwrite:true, onComplete:displayGameStage, onCompleteParams:[nextStage]});
	}
}

function replacePlayerName(statusText){
	if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
		if(gameData.player == socketData.gameIndex){
			statusText = statusText.replace("[PLAYER]", textStrings.stage.you);
		}else{
			statusText = statusText.replace("[PLAYER]", $.players["name"+gameData.player].text.toUpperCase());
		}
	}else{
		statusText = statusText.replace("[PLAYER]", textStrings.stage.you);
	}
	return statusText;
}

function showPlayerWaiting(){
	if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
		if(!socketData.turn){
			var waitingText = textStrings.stage.waitingPlayer.replace("[PLAYER]", $.players["name"+gameData.player].text.toUpperCase());
			toggleSocketLoader(true, waitingText);
			gameLogsTxt.visible = itemStatusBg.visible = true;
		}
	}
}

function proceedNextStep(){
	gameData.keyComplete = true;
	toggleGameTimer(false);

	playSound("soundTurn");
	if(gameData.stage == "spin"){
		presetWheelSpin();
	}else if(gameData.stage == "guessLetter"){
		displayGameStage("guessNoAnswer");
	}else if(gameData.stage == "solve"){
		animateFocusLetter(false);
		displayGameStage("solveWrong");
	}else if(gameData.stage == "action"){
		displayGameStage("guessNoAnswer");
	}else if(gameData.stage == "vowelSelect"){
		displayGameStage("guessNoAnswer");
	}
}

/*!
 * 
 * MATCH KEYBOARD - This is the function that runs to match keyboard
 * 
 */
function matchKeyboard(letter){
	if(gameData.paused){
		return;
	}

	if(gameData.keyComplete){
		return;
	}
	
	if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
		if(!socketData.turn){
			return;
		}
	}

	var proceedStage = ["guessLetter","solve","vowelSelect"];
	if(proceedStage.indexOf(gameData.stage) == -1){
		return;
	}

	if(gameData.stage == "guessLetter" || gameData.stage == "solve"){
		for(var n=0; n<gameData.keyArr.length; n++){
			for(var k=0; k<gameData.keyArr[n].length; k++){
				if(gameData.stage == "guessLetter"){
					if(letter == gameData.keyArr[n][k] && !$.key['guess_'+n+'_'+k].bgHidden.visible){
						$.key['guess_'+n+'_'+k].bgHidden.visible = true;
						$.key['solve_'+n+'_'+k].bgHidden.visible = true;
						$.key['guess_'+n+'_'+k].text.color = keyboardSettings.colorDisabled;
						$.key['solve_'+n+'_'+k].text.color = keyboardSettings.colorDisabled;
						
						toggleGameTimer(false);
						checkGuessLetter(letter, true);

						if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
							if(socketData.turn){
								postSocketUpdate('presskey', {type:"guessLetter", n:n, k:k, letter:letter}, true);
							}
						}
					}
				}else if(gameData.stage == "solve"){
					if(letter == gameData.keyArr[n][k]){
						if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
							if(socketData.turn){
								postSocketUpdate('presskey', {type:"solve", letter:letter, focusLetterIndex:gameData.focusLetterIndex}, true);
							}
						}
						gameData.focusLetter[gameData.focusLetterIndex].text.text = letter;
						toggleFocusLetter(true);
					}
				}
			}
		}
	}else{
		for(var n=0; n<gameData.vowelArr.length; n++){
			for(var k=0; k<gameData.vowelArr[n].length; k++){
				if(letter == gameData.vowelArr[n][k]){
					updatePlayerScore(false, gameSettings.vowelCost);
					updateGameScore(true);

					$.key['vowel_'+n+'_'+k].bgSecret.visible = false;
					toggleGameTimer(false);
					checkGuessLetter(letter, false);

					if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
						if(socketData.turn){
							postSocketUpdate('presskey', {type:"vowelSelect", n:n, k:k, letter:letter}, true);
						}
					}
				}
			}
		}
	}

	if(gameData.stage == "solve"){
		if(letter == keyboardSettings.enterCode.toUpperCase()){
			checkSolveEnter(true);

			if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
				if(socketData.turn){
					postSocketUpdate('presskey', {type:"solveenter", con:true}, true);
				}
			}
		}else if(letter == keyboardSettings.deleteCode.toUpperCase()){
			toggleFocusLetter(false);
			checkSolveEnter(false);

			if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
				if(socketData.turn){
					postSocketUpdate('presskey', {type:"solvedelete", con:false}, true);
				}
			}
		}else{
			checkSolveEnter(false);

			if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
				if(socketData.turn){
					postSocketUpdate('presskey', {type:"solveletter", con:false}, true);
				}
			}
		}
	}
}

/*!
 * 
 * SOLVE ENTER - This is the function that runs to enter solve
 * 
 */
function checkSolveEnter(con){
	gameData.bonusCount = 0;
	gameData.correctAnswer = false;
	gameData.enterButton.bgHidden.visible = true;

	var finalSolve = "";
	for(var n=0; n<lettersSettings.rows_arr.length; n++){
		for(var k=0; k<lettersSettings.rows_arr[n]; k++){
			if($.letter[n+'_'+k].bgShow.visible && $.letter[n+'_'+k].text.text != ""){
				finalSolve += $.letter[n+'_'+k].text.text;
			}
			if($.letter[n+'_'+k].bgShow.visible && !$.letter[n+'_'+k].revealed){
				gameData.bonusCount++;
			}
		}
	}

	var finalAnswer = gameData.answer.replace(/\s+/g, '');
	finalAnswer = finalAnswer.toUpperCase();

	if(finalAnswer.length == finalSolve.length){
		gameData.enterButton.bgHidden.visible = false;
		if(con){
			gameData.keyComplete = true;
			if(finalAnswer == finalSolve){
				gameData.correctAnswer = true;
			}
			displayGameStage("prepareSolve");
		}
	}
}

function getFocusLetters(){
	gameData.focusLetterIndex = 0;
	gameData.focusLetter = [];
	for(var n=0; n<lettersSettings.rows_arr.length; n++){
		for(var k=0; k<lettersSettings.rows_arr[n]; k++){
			if($.letter[n+'_'+k].text.text == "" && $.letter[n+'_'+k].bgShow.visible){
				gameData.focusLetter.push($.letter[n+'_'+k]);
			}
		}
	}

	animateFocusLetter(true);
}

function toggleFocusLetter(con){
	if(con){
		gameData.focusLetterIndex++;
		gameData.focusLetterIndex = gameData.focusLetterIndex > gameData.focusLetter.length-1 ? gameData.focusLetter.length-1 : gameData.focusLetterIndex;
	}else{
		gameData.focusLetter[gameData.focusLetterIndex].text.text = "";
		gameData.focusLetterIndex--;
		gameData.focusLetterIndex = gameData.focusLetterIndex < 0 ? 0 : gameData.focusLetterIndex;
	}

	animateFocusLetter(true);
}

function animateFocusLetter(con){
	for(var n=0; n<gameData.focusLetter.length; n++){
		TweenMax.killTweensOf(gameData.focusLetter[n].bgFocus);
		if(con){
			gameData.focusLetter[n].bgFocus.alpha = 1;
		}else{
			gameData.focusLetter[n].bgFocus.alpha = 0;
		}
	}

	if(con){
		animateLoop(gameData.focusLetter[gameData.focusLetterIndex].bgFocus, true);
	}
}

function resetFocusLetter(){
	if(gameData.focusLetter.length == 0){
		return
	}

	for(var n=0; n<gameData.focusLetter.length; n++){
		gameData.focusLetter[n].text.text = "";
	}
}

function checkGuessLetter(letter, score){
	playSound("audio_" + letter.toLowerCase());
	gameData.keyComplete = true;
	gameData.guessLetter = letter;
	gameData.guessFound = 0;
	gameData.guessScore = score;
	gameData.stageTween = 1;
	
	TweenMax.to(guessKeyContainer, 1, {overwrite:true, onComplete:function(){
		var delayCount = .4;
		var delayNum = delayCount;
		for(var n=0; n<lettersSettings.rows_arr.length; n++){
			for(var k=0; k<lettersSettings.rows_arr[n]; k++){
				if($.letter[n+'_'+k].letter == letter){
					gameData.guessFound++;
					animateLetter(n,k,"reveal", letter, delayNum);
					delayNum += delayCount;
				}
			}
		}
		gameData.stageTween += delayNum;

		if(gameData.guessFound == 0){
			playSound("soundBuzzer");
			if(gameData.wheelFree){
				displayGameStage("guessWrongWithoutPenalty");
			}else{
				displayGameStage("guessWrong");
			}
		}else{
			gameData.revealLetters.push(letter);
			displayGameStage("guessRight")
		}
	}});
}

/*!
 * 
 * PLAY AUDIO - This is the function that runs to play audio
 * 
 */
function playAnswerAudio(){
	playAudio(audioData.audioLoop[0].id, playAudioComplete);
}

function playAudioComplete(){
	displayGameStage("solveRight");
}

/*!
 * 
 * UPDATE GAME - This is the function that runs to loop game update
 * 
 */
function updateGame(){
	if(!gameData.paused){
		
	}
	
	if(timeData.enable){
		timeData.nowDate = new Date();
		timeData.elapsedTime = Math.floor((timeData.nowDate.getTime() - timeData.startDate.getTime()));
		timeData.timer = Math.floor(timeData.countdown - (timeData.elapsedTime + timeData.accumulate));

		updateTimer();
		if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
			if(socketData.turn){
				postSocketUpdate('updatetimer', timeData.timer, true);
			}
		}
	}

	//wheel spin sound
	var wheelRadius = 360 / wheel_arr.length;
	var currentCount = Math.floor(Math.abs(wheelSlotsContainer.rotation)/wheelRadius);
	if(gameData.wheelSound < currentCount){
		gameData.wheelSound = currentCount;
		playSound("soundWheelSpin");
	}
}

function updateTimer(){
	if(timeData.oldTimer == -1){
		timeData.oldTimer = timeData.timer;
	}

	if(timeData.timer <= 1000){
		//stop
		if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
			if(socketData.turn){
				postSocketUpdate('proceednextstep');
			}
		}else{
			proceedNextStep();
		}
	}else{
		if((timeData.oldTimer - timeData.timer) > 1000){
			if(timeData.timer < 6000){
				animateTimer()
				playSound('soundClock');
			}
			timeData.oldTimer = timeData.timer;
		}
		
		timerTxt.text = timerRedTxt.text = millisecondsToTimeGame(timeData.timer);
	}
}

/*!
 * 
 * END GAME - This is the function that runs to end game
 * 
 */
function checkEndGame(){
	if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
		if(socketData.turn){
			gameData.currentRound++;
			if(gameData.currentRound < gameData.totalRound){
				TweenMax.to(gameContainer, 4, {overwrite:true, onComplete:function(){
					postSocketUpdate('nextround', gameData.currentRound);
				}});
			}else{
				postSocketUpdate('endgame');
			}
		}
	}else{
		endGame();
	}
}
function endGame(){
	toggleGameTimer(false);
	TweenMax.to(gameContainer, 4, {overwrite:true, onComplete:function(){
		goPage("result");
	}});
}

/*!
 * 
 * ANIMATE WHEEL LIGHTS - This is the function that runs to animate wheel lights
 * 
 */
function animateWheelLights(type){
	TweenMax.killTweensOf(lightData);
	TweenMax.killTweensOf(wheelLightsContainer);
	
	switch(type){
		case 'static':
			lightData.side = true;
			loopWheelAnimateLights();
		break;
		
		case 'spin':
			lightData.num = 0;
			loopWheelAnimateSpinLights();
		break;
		
		case 'win':
			lightData.side = true;
			loopWheelAnimateWinLights();
			
			TweenMax.to(wheelLightsContainer, 3, {overwrite:true, onComplete:animateWheelLights, onCompleteParams:['static']});
		break;
		
		case 'lose':
			for(var n=0;n<gameData.lightNum;n++){
				$.lights["wheel"+n].gotoAndStop('off');
				if(isEven(n)){
					$.lights["wheel"+n].gotoAndStop('on');	
				}
			}
			
			TweenMax.to(wheelLightsContainer, 3, {overwrite:true, onComplete:animateWheelLights, onCompleteParams:['static']});
		break;
	}
}

function loopWheelAnimateLights(){
	for(var n=0;n<gameData.lightNum;n++){
		$.lights["wheel"+n].gotoAndStop('off');
		if(lightData.side && isEven(n)){
			$.lights["wheel"+n].gotoAndStop('on');	
		}
		
		if(!lightData.side && !isEven(n)){
			$.lights["wheel"+n].gotoAndStop('on');	
		}
	}
	
	lightData.side = lightData.side == false ? true : false;
	TweenMax.to(lightData, .5, {overwrite:true, onComplete:loopWheelAnimateLights});
}

function loopWheelAnimateSpinLights(){
	for(var n=0;n<gameData.lightNum;n++){
		$.lights["wheel"+n].gotoAndStop('off');
		if(n == lightData.num){
			$.lights["wheel"+n].gotoAndStop('on');	
		}
	}
	
	if(gameData.spinDirection){
		lightData.num++;
		lightData.num = lightData.num >= gameData.lightNum ? 0 : lightData.num;	
	}else{
		lightData.num--;
		lightData.num = lightData.num < 0 ? gameData.lightNum-1 : lightData.num;
	}
	
	TweenMax.to(lightData, .05, {overwrite:true, onComplete:loopWheelAnimateSpinLights});
}

function loopWheelAnimateWinLights(){
	for(var n=0;n<gameData.lightNum;n++){
		$.lights["wheel"+n].gotoAndStop('off');
		if(lightData.side){
			$.lights["wheel"+n].gotoAndStop('on');
		}
	}
	
	lightData.side = lightData.side == false ? true : false;
	TweenMax.to(lightData, .1, {overwrite:true, onComplete:loopWheelAnimateWinLights});
}

/*!
 * 
 * BACKGROUND LIGHTS - This is the function that runs to display light
 * 
 */
function initAnimateLights(mode){
	if(mode == -1){
		for(var n = 0; n<lightsPos_arr.length; n++){			
			TweenMax.killTweensOf($.lights[n]);
		}
		return;
	}
	
	gameData.lightMode = mode;
	
	for(var n = 0; n<lightsPos_arr.length; n++){			
		animateLight(n);
	}
}

function animateLight(n){
	var tweenSpeed = lightsEffects[gameData.lightMode].speed;
	var rotateNum = lightsEffects[gameData.lightMode].array[n].rotate[0];
	var alphaNum = lightsEffects[gameData.lightMode].array[n].alpha[0];
	
	if($.lights[n].side){
		$.lights[n].side = false;
		rotateNum = lightsEffects[gameData.lightMode].array[n].rotate[1];
		alphaNum = lightsEffects[gameData.lightMode].array[n].alpha[1];
	}else{
		$.lights[n].side = true;
	}
	
	TweenMax.to($.lights[n], tweenSpeed, {rotation:rotateNum, alpha:alphaNum, overwrite:true, ease:Linear.easeNone, onComplete:function(){
		animateLight(n);
	}});
}

/*!
 * 
 * ANIMATE LOOP - This is the function that runs to animate loop
 * 
 */
function animateLoop(obj, con, alpha){
	var tweenSpeed = .1;
	if(con){
		var alphaNum = 1;
		if(alpha){
			alpha = false;
			alphaNum = 0;
		}else{
			alpha = true;
		}
		TweenMax.to(obj, tweenSpeed, {alpha:alphaNum, overwrite:true, onComplete:animateLoop, onCompleteParams:[obj, con, alpha]});
	}else{
		TweenMax.to(obj, tweenSpeed, {alpha:0, overwrite:true});	
	}
}

/*!
 * 
 * ANIMATE TIMER - This is the function that runs to animate countdown
 * 
 */
function animateTimer(){
	timerRedTxt.alpha = 0;
	TweenMax.to(timerRedTxt, .5, {alpha:1, overwrite:true});
}

/*!
 * 
 * GAME TIMER - This is the function that runs for game timer
 * 
 */
function toggleGameTimer(con){
	if($.editor.enable){
		return;	
	}

	if(con){
		timeData.startDate = new Date();
		timeData.oldTimer = -1;
	}else{
		timeData.accumulate = 0;
	}
	
	timerContainer.visible = con;
	if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
		if(socketData.turn){
			timeData.enable = con;
		}
	}else{
		timeData.enable = con;
	}
}

/*!
 * 
 * MILLISECONDS CONVERT - This is the function that runs to convert milliseconds to time
 * 
 */
function millisecondsToTimeGame(milli) {
	var milliseconds = milli % 1000;
	var seconds = Math.floor((milli / 1000) % 60);
	var minutes = Math.floor((milli / (60 * 1000)) % 60);
	
	if(seconds<10){
		seconds = '0'+seconds;  
	}
	
	if(minutes<10){
		minutes = '0'+minutes;  
	}
	
	return seconds;
}

/*!
 * 
 * QUESTION AND ANSWER IMAGE PRELOADER - This is the function that runs to preload question/answer image
 * 
 */
var imageLoader, fileFest;
function loadAnswerAssets(){
	imageLoader = new createjs.LoadQueue(true);
	imageLoader.setMaxConnections(10);
	createjs.Sound.alternateExtensions = ["mp3"];
	imageLoader.installPlugin(createjs.Sound);
	
	imageLoader.addEventListener("complete", handleImageComplete);
	imageLoader.loadManifest(fileFest);
}

function handleImageComplete() {
	if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
		postSocketUpdate('loadanswerassetscomplete', socketData.gameIndex);
	}else{
		prepareAnswer();
	}
};

function removeSoundAssets(){
	stopAudio();
	
	if(fileFest == null){
		return;
	}
	
	for(var n=0; n<fileFest.length; n++){
		createjs.Sound.removeSound(fileFest[n].id);	
	}
}

/*!
 * 
 * XML - This is the function that runs to load word from xml
 * 
 */
function loadXML(src){
	buttonStart.visible = false;
	loaderTxt.text = textStrings.loading;
	
	$.ajax({
       url: src,
       type: "GET",
       dataType: "xml",
       success: function (result) {
			if($.editor.enable){
				edit.xmlFile = result;
			}

            $(result).find('item').each(function(questionIndex, questionElement){
				pushDataArray(questionIndex, questionElement);
			});
			
			loadXMLComplete();
       }
	});
}

function pushDataArray(questionIndex, questionElement){
	var category = $(questionElement).find('category').text();
	if(category != ''){
		category_arr.push(category);
	}
	
	answer_arr.push({category:$(questionElement).find('category').text(),
							answer:$(questionElement).find('answer').text(),
							hint:$(questionElement).find('hint').text(),
							audio:$(questionElement).find('answer').attr('audio')});
}

function loadXMLComplete(){
	category_arr = unique(category_arr);
	if(gameSettings.categoryAllOption){
		category_arr.push(textStrings.categoryAll);
	}
	
	displayCategoryName();
	buttonStart.visible = true;
	loaderTxt.visible = false;

	if($.editor.enable){
		loadEditPage();
		goPage('game');
	}else{
		goPage('main');
	}
}

/*!
 * 
 * OPTIONS - This is the function that runs to toggle options
 * 
 */

function toggleOptions(con){
	if(optionsContainer.visible){
		optionsContainer.visible = false;
	}else{
		optionsContainer.visible = true;
	}
	if(con!=undefined){
		optionsContainer.visible = con;
	}
}

/*!
 * 
 * OPTIONS - This is the function that runs to mute and fullscreen
 * 
 */
function toggleSoundMute(con){
	buttonSoundOff.visible = false;
	buttonSoundOn.visible = false;
	toggleSoundInMute(con);
	if(con){
		buttonSoundOn.visible = true;
	}else{
		buttonSoundOff.visible = true;	
	}
}

function toggleMusicMute(con){
	buttonMusicOff.visible = false;
	buttonMusicOn.visible = false;
	toggleMusicInMute(con);
	if(con){
		buttonMusicOn.visible = true;
	}else{
		buttonMusicOff.visible = true;	
	}
}

function toggleFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

/*!
 * 
 * SHARE - This is the function that runs to open share url
 * 
 */
function shareLinks(action, shareScore){
	if(shareSettings.gtag){
		gtag('event','click',{'event_category':'share','event_label':action});
	}

	var gameURL = location.href;
	gameURL = encodeURIComponent(gameURL.substring(0,gameURL.lastIndexOf("/") + 1));

	var shareTitle = shareSettings.shareTitle.replace("[SCORE]", shareScore);
	var shareText = shareSettings.shareText.replace("[SCORE]", shareScore);

	var shareURL = '';
	if( action == 'facebook' ){
		if(shareSettings.customScore){
			gameURL = decodeURIComponent(gameURL);
			shareURL = `https://www.facebook.com/sharer/sharer.php?u=`+encodeURIComponent(`${gameURL}share.php?title=${shareTitle}&url=${gameURL}&thumb=${gameURL}share.jpg`);
		}else{
			shareURL = `https://www.facebook.com/sharer/sharer.php?u=${gameURL}`;
		}
	}else if( action == 'twitter' ){
		shareURL = `https://twitter.com/intent/tweet?text=${shareText}&url=${gameURL}`;
	}else if( action == 'whatsapp' ){
		shareURL = `https://api.whatsapp.com/send?text=${shareText}%20${gameURL}`;
	}else if( action == 'telegram' ){
		shareURL = `https://t.me/share/url?url=${gameURL}&text=${shareText}`;
	}else if( action == 'reddit' ){
		shareURL = `https://www.reddit.com/submit?url=${gameURL}&title=${shareText}`;
	}else if( action == 'linkedin' ){
		shareURL = `https://www.linkedin.com/sharing/share-offsite/?url=${gameURL}`;
	}

	window.open(shareURL);
}