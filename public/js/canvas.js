////////////////////////////////////////////////////////////
// CANVAS
////////////////////////////////////////////////////////////
var stage;
var canvasW=0;
var canvasH=0;

/*!
 * 
 * START GAME CANVAS - This is the function that runs to setup game canvas
 * 
 */
function initGameCanvas(w,h){
	const gameCanvas = document.getElementById("gameCanvas");
	gameCanvas.width = w;
	gameCanvas.height = h;
	
	canvasW=w;
	canvasH=h;
	stage = new createjs.Stage("gameCanvas",{ antialias: true });
	
	createjs.Touch.enable(stage);
	stage.enableMouseOver(20);
	stage.mouseMoveOutside = true;
	
	createjs.Ticker.framerate = 60;
	createjs.Ticker.addEventListener("tick", tick);
}

var safeZoneGuide = false;
var canvasContainer, mainContainer, gameContainer, resultContainer, exitContainer, optionsContainer, shareContainer, shareSaveContainer, socialContainer;
var guideline, bg, bgP, logo, logoP;
var itemExit, itemExitP, popTitleTxt, popDescTxt, buttonConfirm, buttonCancel;
var itemResult, itemResultP, buttonContinue, resultTitleTxt, resultDescTxt, buttonShare, buttonSave;
var resultTitleOutlineTxt,resultDescOutlineTxt,resultShareTxt,resultShareOutlineTxt,popTitleOutlineTxt,popDescOutlineTxt;
var buttonSettings, buttonFullscreen, buttonSoundOn, buttonSoundOff, buttonMusicOn, buttonMusicOff, buttonExit;
$.share = {};

var buttonLocalContainer,categoryContainer,lightsContainer,statusContainer,statusStageContainer,chanceContainer,timerContainer,playersContainer,wordsContainer,guessKeyContainer,guessKeyMoveContainer,solveKeyContainer,solveKeyMoveContainer,vowelKeyContainer,vowelKeyMoveContainer,wheelContainer,wheelMoveContainer,wheelSlotsContainer,wheelLightsContainer,actionContainer,actionMoveContainer;
var logoLightData,logoLight,buttonLocal,buttonOnline,buttonStart,loaderTxt,itemCategory,categoryLightData,categoryLight,catTitleTxt,buttonArrowL,buttonArrowR,buttonSelect,categoryTxt;
var itemStatus,itemTimer,itemStatusBottom,hintTxt,statusTxt,timerTxt,timerRedTxt,itemChance,lifeTxt,itemCoin,scoreTxt,itemWheel,itemWheelPin,buttonWheelSpin,buttonVowel,buttonSpin,buttonSolve,loaderData,loaderAnimate,itemConfirm,itemConfirmP,buttonYes,buttonNo,roomContainer,nameContainer,gameLogsTxt,itemStatusBg;
$.lights = {};
$.lightsGlow = {};
$.letter = {};
$.key = {};
$.wheel = {};
$.players = {};

/*!
 * 
 * BUILD GAME CANVAS ASSERTS - This is the function that runs to build game canvas asserts
 * 
 */
function buildGameCanvas(){
	canvasContainer = new createjs.Container();
	mainContainer = new createjs.Container();
	gameContainer = new createjs.Container();
	exitContainer = new createjs.Container();
	resultContainer = new createjs.Container();
	shareContainer = new createjs.Container();
	shareSaveContainer = new createjs.Container();
	socialContainer = new createjs.Container();
	
	buttonLocalContainer = new createjs.Container();
	categoryContainer = new createjs.Container();
	lightsContainer = new createjs.Container();
	
	statusContainer = new createjs.Container();
	statusStageContainer = new createjs.Container();
	chanceContainer = new createjs.Container();
	scoreContainer = new createjs.Container();
	timerContainer = new createjs.Container();
	playersContainer = new createjs.Container();

	wordsContainer = new createjs.Container();
	guessKeyContainer = new createjs.Container();
	guessKeyMoveContainer = new createjs.Container();
	solveKeyContainer = new createjs.Container();
	solveKeyMoveContainer = new createjs.Container();
	vowelKeyContainer = new createjs.Container();
	vowelKeyMoveContainer = new createjs.Container();
	wheelContainer = new createjs.Container();
	wheelMoveContainer = new createjs.Container();
	wheelSlotsContainer = new createjs.Container();
	wheelLightsContainer = new createjs.Container();

	actionContainer = new createjs.Container();
	actionMoveContainer = new createjs.Container();
	
	
	bg = new createjs.Bitmap(loader.getResult('background'));
	bgP = new createjs.Bitmap(loader.getResult('backgroundP'));
	logo = new createjs.Bitmap(loader.getResult('logo'));
	centerReg(logo);
	
	var _frameW = 599;
	var _frameH = 295;
	var _frame = {"regX":_frameW/2, "regY":_frameH/2, "count":2, "width":_frameW, "height":_frameH};
	var _animations = {
						animate: {
							frames: [0,1],
							speed: .2
						}
	};

	logoLightData = new createjs.SpriteSheet({
		"images": [loader.getResult('logoLight').src],
		"frames": _frame,
		"animations": _animations
	});

    logoLight = new createjs.Sprite(logoLightData, "animate");
	logoLight.framerate = 20;
	
	buttonLocal = createButton(textStrings.button.local);
	buttonOnline = createButton(textStrings.button.online);
	buttonStart = createButton(textStrings.button.play);
	loaderTxt = new createjs.Text();
	loaderTxt.font = "35px montheavy_demo";
	loaderTxt.color = '#fff';
	loaderTxt.textAlign = "center";
	loaderTxt.textBaseline='alphabetic';
	loaderTxt.text = textStrings.loading;
	
	//lights
	for(var n = 0; n<lightsPos_arr.length; n++){
		$.lights[n] = new createjs.Container();
		
		var newLight = new createjs.Bitmap(loader.getResult('itemLight'));
		centerReg(newLight);
		$.lightsGlow[n] = new createjs.Bitmap(loader.getResult('itemLightGlow'+lightsPos_arr[n].color));
		$.lightsGlow[n].regX = 100;
		$.lightsGlow[n].regY = 10;
		
		$.lights[n].addChild(newLight, $.lightsGlow[n]);
		$.lights[n].x = lightsPos_arr[n].x;
		$.lights[n].y = lightsPos_arr[n].y;
		
		$.lights[n].side = true;
		lightsContainer.addChild($.lights[n]);
	}

	//category
	itemCategory = new createjs.Bitmap(loader.getResult('category'));
	centerReg(itemCategory);

	var _frameW = 599;
	var _frameH = 205;
	var _frame = {"regX":_frameW/2, "regY":_frameH/2, "count":2, "width":_frameW, "height":_frameH};
	var _animations = {
						animate: {
							frames: [0,1],
							speed: .2
						}
	};

	categoryLightData = new createjs.SpriteSheet({
		"images": [loader.getResult('categoryLight').src],
		"frames": _frame,
		"animations": _animations
	});

	categoryLight = new createjs.Sprite(categoryLightData, "animate");
	categoryLight.framerate = 20;

	catTitleTxt = new createjs.Text();
	catTitleTxt.font = "45px montheavy_demo";
	catTitleTxt.color = "#fff";
	catTitleTxt.textAlign = "center";
	catTitleTxt.textBaseline='alphabetic';
	catTitleTxt.text = textStrings.category;
	
	buttonArrowL = new createjs.Bitmap(loader.getResult('itemArrow'));
	centerReg(buttonArrowL);
	buttonArrowR = new createjs.Bitmap(loader.getResult('itemArrow'));
	centerReg(buttonArrowR);
	buttonArrowR.scaleX = -1;
	
	buttonSelect = createButton(textStrings.button.select);
	
	categoryTxt = new createjs.Text();
	categoryTxt.font = "60px montheavy_demo";
	categoryTxt.color = '#fff';
	categoryTxt.textAlign = "center";
	categoryTxt.textBaseline='alphabetic';
	
	//games
	itemStatus = new createjs.Bitmap(loader.getResult('itemStatus'));
	centerReg(itemStatus);

	itemTimer = new createjs.Bitmap(loader.getResult('itemTimer'));
	centerReg(itemTimer);

	itemStatusBottom = new createjs.Bitmap(loader.getResult('itemStatusBottom'));
	centerReg(itemStatusBottom);

	hintTxt = new createjs.Text();
	hintTxt.font = "25px montheavy_demo";
	hintTxt.color = '#fff';
	hintTxt.textAlign = "center";
	hintTxt.textBaseline='alphabetic';
	hintTxt.text = "HELLO";
	hintTxt.y = 8;

	statusTxt = new createjs.Text();
	statusTxt.font = "18px montheavy_demo";
	statusTxt.color = '#fff';
	statusTxt.textAlign = "center";
	statusTxt.textBaseline='alphabetic';
	statusTxt.text = "STATUS";
	statusTxt.y = 18;

	timerTxt = new createjs.Text();
	timerTxt.font = "30px montheavy_demo";
	timerTxt.color = '#000';
	timerTxt.textAlign = "center";
	timerTxt.textBaseline='alphabetic';
	timerTxt.text = 27;
	timerTxt.y = 10;

	timerRedTxt = new createjs.Text();
	timerRedTxt.font = "30px montheavy_demo";
	timerRedTxt.color = '#000';
	timerRedTxt.textAlign = "center";
	timerRedTxt.textBaseline='alphabetic';
	timerRedTxt.text = 27;
	timerRedTxt.y = timerTxt.y;

	timerContainer.addChild(itemTimer, timerTxt, timerRedTxt);
	timerContainer.x = 300;

	itemChance = new createjs.Bitmap(loader.getResult('itemChance'));
	centerReg(itemChance);

	lifeTxt = new createjs.Text();
	lifeTxt.font = "20px montheavy_demo";
	lifeTxt.color = '#fff';
	lifeTxt.textAlign = "center";
	lifeTxt.textBaseline='alphabetic';
	lifeTxt.text = 5;
	lifeTxt.x = 15;
	lifeTxt.y = 7;

	chanceContainer.x = -260;
	chanceContainer.addChild(itemChance, lifeTxt);
	statusStageContainer.addChild(itemStatusBottom, statusTxt);
	statusStageContainer.y = 30;
	statusContainer.addChild(statusStageContainer, itemStatus, timerContainer, chanceContainer, hintTxt);

	itemCoin = new createjs.Bitmap(loader.getResult('itemCoin'));
	centerReg(itemCoin);

	scoreTxt = new createjs.Text();
	scoreTxt.font = "40px montheavy_demo";
	scoreTxt.color = '#fff';
	scoreTxt.textAlign = "center";
	scoreTxt.textBaseline='alphabetic';
	scoreTxt.text = "$50,000";
	scoreTxt.y = 15;
	scoreContainer.addChild(itemCoin, scoreTxt);

	itemWheel = new createjs.Bitmap(loader.getResult('itemWheel'));
	centerReg(itemWheel);

	itemWheelPin = new createjs.Bitmap(loader.getResult('itemWheelPin'));
	centerReg(itemWheelPin);
	itemWheelPin.y = -(wheelSettings.wheelRadius - 5);

	buttonWheelSpin = createMiniButton(textStrings.button.spin);
	buttonWheelSpin.y = -165;

	buttonVowel = createMiniButton(textStrings.button.vowel);
	buttonSpin = createMiniButton(textStrings.button.spin);
	buttonSolve = createMiniButton(textStrings.button.solve);
	buttonVowel.x = -160;
	buttonSolve.x = 160;
	buttonVowel.y = buttonSpin.y = buttonSolve.y = 30;

	actionMoveContainer.addChild(buttonVowel, buttonSpin, buttonSolve);

	var _frameW=96;
	var _frameH=33;
	var _frame = {"regX": (_frameW/2), "regY": (_frameH/2), "height": _frameH, "count": 25, "width": _frameW};
	var _animations = {static:{frames: [0]},
						loading:{frames: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24], speed: 1, next:'loading'}};
						
	loaderData = new createjs.SpriteSheet({
		"images": [loader.getResult("itemLoader").src],
		"frames": _frame,
		"animations": _animations
	});
	
	loaderAnimate = new createjs.Sprite(loaderData, "static");
	loaderAnimate.framerate = 20;
	loaderAnimate.x = canvasW/2;
	loaderAnimate.y = canvasH/2;
	loaderAnimate.scaleX = loaderAnimate.scaleY = .7;

	//players
	for(var n=0; n<4; n++){
		$.players[n] = new createjs.Container();

		var itemPlayer = new createjs.Bitmap(loader.getResult('itemPlayer'));
		centerReg(itemPlayer);
		
		$.players["h"+n] = new createjs.Bitmap(loader.getResult('itemPlayerH'));
		centerReg($.players["h"+n]);
		$.players["active"+n] = new createjs.Bitmap(loader.getResult('itemPlayerActive'));
		centerReg($.players["active"+n]);
		$.players["coin"+n] = new createjs.Bitmap(loader.getResult('itemCoin'));
		centerReg($.players["coin"+n]);
		$.players["coin"+n].scaleX = $.players["coin"+n].scaleY = .5;

		$.players["name"+n] = new createjs.Text();
		$.players["name"+n].font = "15px montheavy_demo";
		$.players["name"+n].color = '#FFBF00';
		$.players["name"+n].textAlign = "center";
		$.players["name"+n].textBaseline='alphabetic';
		$.players["name"+n].text = "";

		$.players["score"+n] = new createjs.Text();
		$.players["score"+n].font = "23px montheavy_demo";
		$.players["score"+n].color = '#fff';
		$.players["score"+n].textAlign = "center";
		$.players["score"+n].textBaseline='alphabetic';
		$.players["score"+n].text = "";

		$.players["name"+n].y = -5;
		$.players["active"+n].x = -85;
		$.players["score"+n].y = 18;
		$.players["coin"+n].y = 9;

		$.players[n].addChild(itemPlayer, $.players["h"+n], $.players["active"+n], $.players["name"+n], $.players["score"+n], $.players["coin"+n]);

		playersContainer.addChild($.players[n]);
	}

	//result
	buttonContinue = createButton(textStrings.button.continue);
	
	resultShareTxt = new createjs.Text();
	resultShareTxt.font = "25px montheavy_demo";
	resultShareTxt.color = '#fff';
	resultShareTxt.textAlign = "center";
	resultShareTxt.textBaseline='alphabetic';
	resultShareTxt.text = textStrings.share;
	
	resultTitleTxt = new createjs.Text();
	resultTitleTxt.font = "55px montheavy_demo";
	resultTitleTxt.color = '#fff';
	resultTitleTxt.textAlign = "center";
	resultTitleTxt.textBaseline='alphabetic';
	resultTitleTxt.text = textStrings.resultLost;
	
	socialContainer.visible = false;
	socialContainer.scale = 1;
	shareContainer.addChild(resultShareTxt, socialContainer);

	if(shareSettings.enable){
		buttonShare = new createjs.Bitmap(loader.getResult('buttonShare'));
		centerReg(buttonShare);
		
		var pos = {x:0, y:45, spaceX:65};
		pos.x = -(((shareSettings.options.length-1) * pos.spaceX)/2)
		for(let n=0; n<shareSettings.options.length; n++){
			var shareOption = shareSettings.options[n];
			var shareAsset = String(shareOption[0]).toUpperCase() + String(shareOption).slice(1);
			$.share['button'+n] = new createjs.Bitmap(loader.getResult('button'+shareAsset));
			$.share['button'+n].shareOption = shareOption;
			centerReg($.share['button'+n]);
			$.share['button'+n].x = pos.x;
			$.share['button'+n].y = pos.y;
			socialContainer.addChild($.share['button'+n]);
			pos.x += pos.spaceX;
		}
		buttonShare.y = (buttonShare.image.naturalHeight/2) + 10;
		shareContainer.addChild(buttonShare);
	}

	if ( typeof toggleScoreboardSave == 'function' ) { 
		buttonSave = new createjs.Bitmap(loader.getResult('buttonSave'));
		centerReg(buttonSave);
		buttonSave.y = (buttonSave.image.naturalHeight/2) + 10;
		shareSaveContainer.addChild(buttonSave);
	}
	
	//options
	buttonFullscreen = new createjs.Bitmap(loader.getResult('buttonFullscreen'));
	centerReg(buttonFullscreen);
	buttonSoundOn = new createjs.Bitmap(loader.getResult('buttonSoundOn'));
	centerReg(buttonSoundOn);
	buttonSoundOff = new createjs.Bitmap(loader.getResult('buttonSoundOff'));
	centerReg(buttonSoundOff);
	buttonSoundOn.visible = false;
	buttonMusicOn = new createjs.Bitmap(loader.getResult('buttonMusicOn'));
	centerReg(buttonMusicOn);
	buttonMusicOff = new createjs.Bitmap(loader.getResult('buttonMusicOff'));
	centerReg(buttonMusicOff);
	buttonMusicOn.visible = false;
	
	buttonExit = new createjs.Bitmap(loader.getResult('buttonExit'));
	centerReg(buttonExit);
	buttonSettings = new createjs.Bitmap(loader.getResult('buttonSettings'));
	centerReg(buttonSettings);
	
	createHitarea(buttonFullscreen);
	createHitarea(buttonSoundOn);
	createHitarea(buttonSoundOff);
	createHitarea(buttonMusicOn);
	createHitarea(buttonMusicOff);
	createHitarea(buttonExit);
	createHitarea(buttonSettings);
	optionsContainer = new createjs.Container();
	optionsContainer.addChild(buttonFullscreen, buttonSoundOn, buttonSoundOff, buttonMusicOn, buttonMusicOff, buttonExit);
	optionsContainer.visible = false;
	
	//exit
	itemConfirm = new createjs.Bitmap(loader.getResult('itemConfirm'));
	itemConfirmP = new createjs.Bitmap(loader.getResult('itemConfirmP'));
	
	buttonYes = createButton(textStrings.button.yes);
	buttonNo = createButton(textStrings.button.no);
	
	popTitleTxt = new createjs.Text();
	popTitleTxt.font = "60px montheavy_demo";
	popTitleTxt.color = "#fff";
	popTitleTxt.textAlign = "center";
	popTitleTxt.textBaseline='alphabetic';
	popTitleTxt.text = textStrings.exitTitle;
	
	popDescTxt = new createjs.Text();
	popDescTxt.font = "40px montheavy_demo";
	popDescTxt.color = "#fff";
	popDescTxt.textAlign = "center";
	popDescTxt.textBaseline='alphabetic';
	popDescTxt.text = textStrings.exitMessage;
	
	exitContainer.addChild(itemConfirm, itemConfirmP, popTitleTxt, popDescTxt, buttonYes, buttonNo);
	exitContainer.visible = false;
	
	//room
	roomContainer = new createjs.Container();
	nameContainer = new createjs.Container();

	gameLogsTxt = new createjs.Text();
	gameLogsTxt.font = "20px bpreplaybold";
	gameLogsTxt.color = "#ccc";
	gameLogsTxt.textAlign = "center";
	gameLogsTxt.textBaseline='alphabetic';
	gameLogsTxt.text = '';

	itemStatusBg = new createjs.Bitmap(loader.getResult('itemStatusBg'));
	centerReg(itemStatusBg);
	itemStatusBg.visible = false;

	guideline = new createjs.Shape();
	
	buttonLocalContainer.addChild(buttonLocal, buttonOnline);
	mainContainer.addChild(logo, logoLight, loaderTxt, buttonStart, buttonLocalContainer);
	categoryContainer.addChild(itemCategory, categoryLight, catTitleTxt, buttonArrowL, buttonArrowR, buttonSelect, categoryTxt);
	wheelMoveContainer.addChild(wheelSlotsContainer, itemWheel, wheelLightsContainer, itemWheelPin, buttonWheelSpin);
	wheelContainer.addChild(wheelMoveContainer);
	guessKeyContainer.addChild(guessKeyMoveContainer);
	solveKeyContainer.addChild(solveKeyMoveContainer);
	vowelKeyContainer.addChild(vowelKeyMoveContainer);
	actionContainer.addChild(actionMoveContainer);
	gameContainer.addChild(scoreContainer, wordsContainer, statusContainer, wheelContainer, guessKeyContainer, solveKeyContainer, vowelKeyContainer, actionContainer, playersContainer, loaderAnimate);
	resultContainer.addChild(buttonContinue, resultTitleTxt, shareContainer, shareSaveContainer);
	
	canvasContainer.addChild(bg, bgP, mainContainer, nameContainer, roomContainer, categoryContainer, lightsContainer, gameContainer, itemStatusBg, gameLogsTxt, resultContainer, exitContainer, optionsContainer, buttonSettings, guideline);
	stage.addChild(canvasContainer);
	
	changeViewport(viewport.isLandscape);
	resizeGameFunc();
}

function changeViewport(isLandscape){
	if(isLandscape){
		//landscape
		stageW=landscapeSize.w;
		stageH=landscapeSize.h;
		contentW = landscapeSize.cW;
		contentH = landscapeSize.cH;
	}else{
		//portrait
		stageW=portraitSize.w;
		stageH=portraitSize.h;
		contentW = portraitSize.cW;
		contentH = portraitSize.cH;
	}
	
	canvasW=stageW;
	canvasH=stageH;
	
	changeCanvasViewport();
}

function changeCanvasViewport(){
	if(canvasContainer!=undefined){
		stage.scaleX = stage.scaleY = dpr;
		
		if(safeZoneGuide){	
			guideline.graphics.clear().setStrokeStyle(2).beginStroke('red').drawRect((stageW-contentW)/2, (stageH-contentH)/2, contentW, contentH);
		}

		buttonStart.x = canvasW/2;
		buttonStart.y = canvasH/100 * 70;

		buttonLocal.x = canvasW/2 - 160;
		buttonLocal.y = canvasH/100 * 70;

		buttonOnline.x = canvasW/2 + 160;
		buttonOnline.y = canvasH/100 * 70;

		loaderTxt.x = canvasW/2;
		loaderTxt.y = canvasH/100 * 70;

		buttonContinue.x = canvasW/2;
		buttonContinue.y = canvasH/100 * 75;

		shareContainer.x = shareSaveContainer.x = canvasW/2;
		shareContainer.y = shareSaveContainer.y = canvasH/100 * 55;

		resultTitleTxt.x = canvasW/2;
		resultTitleTxt.y = canvasH/100 * 35;

		//exit
		buttonYes.x = canvasW/2;
		buttonYes.y = canvasH/100 * 58;

		buttonNo.x = canvasW/2;
		buttonNo.y = canvasH/100 * 70;

		popTitleTxt.x = canvasW/2;
		popTitleTxt.y = canvasH/100 * 34;

		popDescTxt.x = canvasW/2;
		popDescTxt.y = canvasH/100 * 42;

		if(viewport.isLandscape){
			bg.visible = true;
			bgP.visible = false;
			
			logo.x = canvasW/2;
			logo.y = canvasH/100 * 35;
			logoLight.x = logo.x;
			logoLight.y = logo.y;
			lightsContainer.x = 0;
			
			//category
			catTitleTxt.x = canvasW/2;
			catTitleTxt.y = canvasH/100 * 25;
			
			buttonArrowL.x = canvasW/100 * 20;
			buttonArrowL.y = canvasH/100 * 45;
			buttonArrowR.x = canvasW/100 * 80;
			buttonArrowR.y = canvasH/100 * 45;
			
			itemCategory.x = canvasW/2;
			itemCategory.y = canvasH/100 * 43;
			categoryLight.x = canvasW/2;
			categoryLight.y = canvasH/100 * 43;

			categoryTxt.x = canvasW/2;
			categoryTxt.y = canvasH/100 * 45;
			
			buttonSelect.x = canvasW/2;
			buttonSelect.y = canvasH/100 * 70;
			
			//games
			
			//result
			
			//confirm
			itemConfirm.visible = true;
			itemConfirmP.visible = false;

			//room
			$('#roomWrapper').removeClass('forPortrait');
			$('#notificationHolder').removeClass('forPortrait');
			$('#roomlists').attr('size', 10);
			$('#namelists').attr('size', 10);
			$('#roomLogs').attr('rows', 10);
		}else{
			bg.visible = false;
			bgP.visible = true;
			
			buttonStart.x = canvasW/2;
			buttonStart.y = canvasH/100 * 75;

			buttonLocal.x = canvasW/2;
			buttonLocal.y = canvasH/100 * 70;

			buttonOnline.x = canvasW/2;
			buttonOnline.y = canvasH/100 * 80;

			loaderTxt.x = canvasW/2;
			loaderTxt.y = canvasH/100 * 75;
			
			logo.x = canvasW/2;
			logo.y = canvasH/100 * 47;
			logoLight.x = logo.x;
			logoLight.y = logo.y;
			lightsContainer.x = -250;
			
			//category
			catTitleTxt.x = canvasW/2;
			catTitleTxt.y = canvasH/100 * 25;
			
			buttonArrowL.x = canvasW/100 * 20;
			buttonArrowL.y = canvasH/100 * 58;
			buttonArrowR.x = canvasW/100 * 80;
			buttonArrowR.y = canvasH/100 * 58;
			
			itemCategory.x = canvasW/2;
			itemCategory.y = canvasH/100 * 43;
			categoryLight.x = canvasW/2;
			categoryLight.y = canvasH/100 * 43;

			categoryTxt.x = canvasW/2;
			categoryTxt.y = canvasH/100 * 45;
			
			buttonSelect.x = canvasW/2;
			buttonSelect.y = canvasH/100 * 75;
			
			//games
			
			//result
			
			//confirm
			itemConfirm.visible = false;
			itemConfirmP.visible = true;

			//room
			$('#roomWrapper').addClass('forPortrait');
			$('#notificationHolder').addClass('forPortrait');
			$('#roomlists').attr('size', 8);
			$('#namelists').attr('size', 8);
			$('#roomLogs').attr('rows', 6);
		}
	}
}

function createButton(text){
	var buttonContainer = new createjs.Container();
	
	itemBgButton = new createjs.Bitmap(loader.getResult('itemBgButton'));
	centerReg(itemBgButton);

	var buttonTxt = new createjs.Text();
	buttonTxt.font = "35px montheavy_demo";
	buttonTxt.color = '#fff';
	buttonTxt.textAlign = "center";
	buttonTxt.textBaseline='middle';
	buttonTxt.text = text;
	buttonTxt.y = 2;

	buttonContainer.addChild(itemBgButton, buttonTxt);
	return buttonContainer;
}

function createMiniButton(text){
	var buttonContainer = new createjs.Container();
	
	itemBgButtonMini = new createjs.Bitmap(loader.getResult('itemBgButtonMini'));
	centerReg(itemBgButtonMini);

	var buttonTxt = new createjs.Text();
	buttonTxt.font = "30px montheavy_demo";
	buttonTxt.color = '#fff';
	buttonTxt.textAlign = "center";
	buttonTxt.textBaseline='middle';
	buttonTxt.text = text;
	buttonTxt.y = 2;

	buttonContainer.addChild(itemBgButtonMini, buttonTxt);
	return buttonContainer;
}

/*!
 * 
 * RESIZE GAME CANVAS - This is the function that runs to resize game canvas
 * 
 */
function resizeCanvas(){
 	if(canvasContainer!=undefined){
		buttonSettings.x = (canvasW - offset.x) - 50;
		buttonSettings.y = offset.y + 45;
		
		var distanceNum = 70;
		var nextCount = 0;
		buttonSoundOn.x = buttonSoundOff.x = buttonSettings.x;
		buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y+distanceNum;
		buttonSoundOn.x = buttonSoundOff.x;
		buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y+distanceNum;
		if (typeof buttonMusicOn != "undefined") {
			buttonMusicOn.x = buttonMusicOff.x = buttonSettings.x;
			buttonMusicOn.y = buttonMusicOff.y = buttonSettings.y+(distanceNum*2);
			buttonMusicOn.x = buttonMusicOff.x;
			buttonMusicOn.y = buttonMusicOff.y = buttonSettings.y+(distanceNum*2);
			nextCount = 2;
		}else{
			nextCount = 1;
		}
		buttonFullscreen.x = buttonSettings.x;
		buttonFullscreen.y = buttonSettings.y+(distanceNum*(nextCount+1));

		if(curPage == 'main' || curPage == 'result'){
			buttonExit.visible = false;			
			buttonFullscreen.x = buttonSettings.x;
			buttonFullscreen.y = buttonSettings.y+(distanceNum*(nextCount+1));
		}else{
			buttonExit.visible = true;			
			buttonExit.x = buttonSettings.x;
			buttonExit.y = buttonSettings.y+(distanceNum*(nextCount+2));
		}

		resizeLayout();
		resizeSocketLog();
	}
}

/*!
 * 
 * REMOVE GAME CANVAS - This is the function that runs to remove game canvas
 * 
 */
 function removeGameCanvas(){
	 stage.autoClear = true;
	 stage.removeAllChildren();
	 stage.update();
	 createjs.Ticker.removeEventListener("tick", tick);
	 createjs.Ticker.removeEventListener("tick", stage);
 }

/*!
 * 
 * CANVAS LOOP - This is the function that runs for canvas loop
 * 
 */ 
function tick(event) {
	updateGame();
	stage.update(event);
}

/*!
 * 
 * CANVAS MISC FUNCTIONS
 * 
 */
function centerReg(obj){
	obj.regX=obj.image.naturalWidth/2;
	obj.regY=obj.image.naturalHeight/2;
}

function createHitarea(obj){
	obj.hitArea = new createjs.Shape(new createjs.Graphics().beginFill("#000").drawRect(0, 0, obj.image.naturalWidth, obj.image.naturalHeight));	
}