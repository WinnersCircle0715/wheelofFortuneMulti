////////////////////////////////////////////////////////////
// CANVAS LOADER
////////////////////////////////////////////////////////////

 /*!
 * 
 * START CANVAS PRELOADER - This is the function that runs to preload canvas asserts
 * 
 */
function initPreload(){
	toggleLoader(true);
	checkMobileEvent();
	
	$(window).resize(function(){
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(checkMobileOrientation, 1000);
	});
	resizeGameFunc();
	
	loader = new createjs.LoadQueue(false);
	manifest=[
			{src:'assets/background.png', id:'background'},
			{src:'assets/background_p.png', id:'backgroundP'},
			{src:'assets/logo.png', id:'logo'},
			{src:'assets/logo_light.png', id:'logoLight'},
			{src:'assets/item_bg_button.png', id:'itemBgButton'},
			{src:'assets/item_bg_button_mini.png', id:'itemBgButtonMini'},
			{src:'assets/category.png', id:'category'},
			{src:'assets/category_light.png', id:'categoryLight'},
			
			{src:'assets/icon_del.png', id:'iconDel'},
			{src:'assets/icon_solve.png', id:'iconSolve'},
			{src:'assets/item_arrow.png', id:'itemArrow'},
			{src:'assets/item_bg_letter_button.png', id:'itemBgLetterButton'},
			{src:'assets/item_bg_letter_button_del.png', id:'itemBgLetterButtonDel'},
			{src:'assets/item_bg_letter_button_enter.png', id:'itemBgLetterButtonEnter'},
			{src:'assets/item_bg_letter_button_hidden.png', id:'itemBgLetterHidden'},
			{src:'assets/item_bg_letter_button_vowel.png', id:'itemBgLetterVowel'},
			{src:'assets/item_words.png', id:'itemWords'},
			{src:'assets/item_chance.png', id:'itemChance'},
			{src:'assets/item_status.png', id:'itemStatus'},
			{src:'assets/item_status_bottom.png', id:'itemStatusBottom'},
			{src:'assets/item_timer.png', id:'itemTimer'},
			{src:'assets/item_letter.png', id:'itemLetter'},
			{src:'assets/item_letter_bg.png', id:'itemLetterBg'},
			{src:'assets/item_letter_hidden.png', id:'itemLetterHidden'},
			{src:'assets/item_letter_highlight.png', id:'itemLetterHighlight'},
			{src:'assets/item_letter_focus.png', id:'itemLetterFocus'},
			{src:'assets/item_wheel.png', id:'itemWheel'},
			{src:'assets/item_wheel_pin.png', id:'itemWheelPin'},
			{src:'assets/item_wheel_light.png', id:'itemWheelLight'},
			{src:'assets/item_light.png', id:'itemLight'},
			{src:'assets/item_light_glow.png', id:'itemLightGlow'},
			{src:'assets/item_light_glow_purple.png', id:'itemLightGlowPurple'},
			{src:'assets/item_light_glow_yellow.png', id:'itemLightGlowYellow'},
			{src:'assets/item_light_glow_blue.png', id:'itemLightGlowBlue'},
			{src:'assets/item_coin.png', id:'itemCoin'},
			{src:'assets/loader_Spritesheet5x5.png', id:'itemLoader'},
			{src:'assets/item_player.png', id:'itemPlayer'},
			{src:'assets/item_player_h.png', id:'itemPlayerH'},
			{src:'assets/item_player_active.png', id:'itemPlayerActive'},
			{src:'assets/item_status_bg.png', id:'itemStatusBg'},
		
			{src:'assets/button_share.png', id:'buttonShare'},
			{src:'assets/button_save.png', id:'buttonSave'},
			{src:'assets/social/button_facebook.png', id:'buttonFacebook'},
			{src:'assets/social/button_twitter.png', id:'buttonTwitter'},
			{src:'assets/social/button_whatsapp.png', id:'buttonWhatsapp'},
			{src:'assets/social/button_telegram.png', id:'buttonTelegram'},
			{src:'assets/social/button_reddit.png', id:'buttonReddit'},
			{src:'assets/social/button_linkedin.png', id:'buttonLinkedin'},
			
			
			{src:'assets/item_confirm.png', id:'itemConfirm'},
			{src:'assets/item_confirm_p.png', id:'itemConfirmP'},
			{src:'assets/item_rules.png', id:'itemRules'},
			{src:'assets/item_rules_p.png', id:'itemRulesP'},
			{src:'assets/button_fullscreen.png', id:'buttonFullscreen'},
			{src:'assets/button_sound_on.png', id:'buttonSoundOn'},
			{src:'assets/button_sound_off.png', id:'buttonSoundOff'},
			{src:'assets/button_music_on.png', id:'buttonMusicOn'},
			{src:'assets/button_music_off.png', id:'buttonMusicOff'},
			{src:'assets/button_exit.png', id:'buttonExit'},
			{src:'assets/button_settings.png', id:'buttonSettings'}
	];

	for(var n=0;n<wheel_arr.length;n++){
		if(wheel_arr[n].src != ''){
			manifest.push({src:wheel_arr[n].src, id:'wheel'+n});
		}
		
		if(wheel_arr[n].highlight != ''){
			manifest.push({src:wheel_arr[n].highlight, id:'wheelH'+n});
		}
	}
	
	if ( typeof addScoreboardAssets == 'function' ) { 
		addScoreboardAssets();
	}
	
	audioOn = true;
	if(!isDesktop){
		if(!enableMobileAudio){
			audioOn=false;
		}
	}else{
		if(!enableDesktopAudio){
			audioOn=false;
		}
	}
	
	if(audioOn){
		manifest.push({src:'assets/sounds/music_main.ogg', id:'musicMain'});
		manifest.push({src:'assets/sounds/sound_click.ogg', id:'soundButton'});
		manifest.push({src:'assets/sounds/sound_begin.ogg', id:'soundBegin'});
		manifest.push({src:'assets/sounds/sound_buzzer.ogg', id:'soundBuzzer'});
		manifest.push({src:'assets/sounds/sound_clock.ogg', id:'soundClock'});
		manifest.push({src:'assets/sounds/sound_complete.ogg', id:'soundComplete'});
		manifest.push({src:'assets/sounds/sound_crowd.ogg', id:'soundCrowd'});
		manifest.push({src:'assets/sounds/sound_ding.ogg', id:'soundDing'});
		manifest.push({src:'assets/sounds/sound_fail.ogg', id:'soundFail'});
		manifest.push({src:'assets/sounds/sound_intro.ogg', id:'soundIntro'});
		manifest.push({src:'assets/sounds/sound_result.ogg', id:'soundResult'});
		manifest.push({src:'assets/sounds/sound_result_win.ogg', id:'soundResultWin'});
		manifest.push({src:'assets/sounds/sound_reveal.ogg', id:'soundReveal'});
		manifest.push({src:'assets/sounds/sound_score.ogg', id:'soundScore'});
		manifest.push({src:'assets/sounds/sound_waiting.ogg', id:'soundWaiting'});
		manifest.push({src:'assets/sounds/sound_wheel_lose.ogg', id:'soundWheelLose'});
		manifest.push({src:'assets/sounds/sound_wheel_win.ogg', id:'soundWheelWin'});
		manifest.push({src:'assets/sounds/sound_wheel_spin.ogg', id:'soundWheelSpin'});
		manifest.push({src:'assets/sounds/sound_wheel_start.ogg', id:'soundWheelStart'});
		manifest.push({src:'assets/sounds/sound_flip.ogg', id:'soundFlip'});
		manifest.push({src:'assets/sounds/sound_turn.ogg', id:'soundTurn'});
		manifest.push({src:'assets/sounds/sound_countdown.ogg', id:'soundCountdown'});
		manifest.push({src:'assets/sounds/sound_countdown_end.ogg', id:'soundCountdownEnd'});

		if(keyboardSettings.audio){
			for(var n=0;n<keyboardSettings.letters.length;n++){
				manifest.push({src:'assets/audio/letters/audio_' + keyboardSettings.letters[n] + '.ogg', id:'audio_'+keyboardSettings.letters[n]});
			}
		}
		
		createjs.Sound.alternateExtensions = ["mp3"];
		loader.installPlugin(createjs.Sound);
	}
	
	loader.addEventListener("complete", handleComplete);
	loader.addEventListener("fileload", fileComplete);
	loader.addEventListener("error",handleFileError);
	loader.on("progress", handleProgress, this);
	loader.loadManifest(manifest);
}

/*!
 * 
 * CANVAS FILE COMPLETE EVENT - This is the function that runs to update when file loaded complete
 * 
 */
function fileComplete(evt) {
	var item = evt.item;
	//console.log("Event Callback file loaded ", item.id);
}

/*!
 * 
 * CANVAS FILE HANDLE EVENT - This is the function that runs to handle file error
 * 
 */
function handleFileError(evt) {
	console.log("error ", evt);
}

/*!
 * 
 * CANVAS PRELOADER UPDATE - This is the function that runs to update preloder progress
 * 
 */
function handleProgress() {
	$('#mainLoader span').html(Math.round(loader.progress/1*100)+'%');
}

/*!
 * 
 * CANVAS PRELOADER COMPLETE - This is the function that runs when preloader is complete
 * 
 */
function handleComplete() {
	toggleLoader(false);
	initMain();
};

/*!
 * 
 * TOGGLE LOADER - This is the function that runs to display/hide loader
 * 
 */
function toggleLoader(con){
	if(con){
		$('#mainLoader').show();
	}else{
		$('#mainLoader').hide();
	}
}