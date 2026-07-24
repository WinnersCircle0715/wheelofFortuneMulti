////////////////////////////////////////////////////////////
// EDIT TERMINALS
////////////////////////////////////////////////////////////
var edit = {show:true, option:'', xmlFile:'', layoutNum:0, sortNum:0, isLandscape:true, preview:false};

/*!
 * 
 * EDIT READY
 * 
 */
$(function() {
	 $.editor.enable = true;
});

function loadEditPage(){
	jQuery.ajax({ 
		 url: "editTools.html", dataType: "html" 
	}).done(function( responseHtml ) {
		 $("body").prepend(responseHtml);
		 $('#editWrapper').show();
		 buildEditButtons();
		 loadEditAnswer(true);
		
		initAnimateLights(-1);
		scoreContainer.visible = false;
		chanceContainer.visible = false;
		buttonSettings.visible = false;
	});
}

function buildEditButtons(){
	$('#toggleShowOption').click(function(){
		toggleShowOption();
	});
	
	//questions
	buildAnswerDD();
	
	$("#viewport").change(function() {
		if($(this).val() != ''){
			if($(this).val() == 'true'){
				viewport.isLandscape = edit.isLandscape = true;	
			}else{
				viewport.isLandscape = edit.isLandscape = false;
			}
			
			changeViewport(viewport.isLandscape);
			resizeGameFunc();
		}
	});
	
	$("#answerlist").change(function() {
		if($(this).val() != ''){
			gameData.answerNum = $(this).val();
			loadEditAnswer(true);
		}
	});
	
	$('#addAnswer').click(function(){
		addAnswer();
	});
	
	$('#removeAnswer').click(function(){
		removeAnswer();
	});
	
	$('#prevAnswer').click(function(){
		toggleAnswer(false);
	});
	
	$('#nextAnswer').click(function(){
		toggleAnswer(true);
	});
	
	$('#sortAnswer').click(function(){
		toggleEditOption('sort');
	});
	
	//sort
	$('#moveAnswerUp').click(function(){
		swapAnswer(false);
	});
	
	$('#moveAnswerDown').click(function(){
		swapAnswer(true);
	});
	
	$('#doneSort').click(function(){
		toggleEditOption('');
	});
	
	$("#sortanswerlist").change(function() {
		if($(this).val() != ''){
			edit.sortNum = $(this).val();
		}
	});
	
	//option
	$('#editAnswer').click(function(){
		toggleEditOption('answer');
	});
	
	$('#generateXML').click(function(){
		generateXML();
	});
	
	$('#saveXML').click(function(){
		var n = prompt('Enter password to save.');
		if ( n!=null && n!="" ) {
			saveXML(n);
		}
	});
	
	//question
	$('#cancelAnswer').click(function(){
		toggleEditOption('');
	});

	$('#previewAnswer').click(function(){
		updateAnswer();
		loadEditAnswer(true);
	});
	
	$('#doneAnswer').click(function(){
		updateAnswer();
		toggleEditOption('');
	});
}

/*!
 * 
 * TOGGLE OPTION - This is the function that runs to toggle option
 * 
 */
function toggleShowOption(){
	if(edit.show){
		edit.show = false;
		$('#editOption').hide();
		$('#toggleShowOption').val('Show Edit Option');
	}else{
		edit.show = true;
		$('#editOption').show();
		$('#toggleShowOption').val('Hide Edit Option');
	}
}

function toggleEditOption(con){
	edit.option = con;
	edit.preview = false;
	
	$('#actionWrapper').hide();
	$('#answerWrapper').hide();
	$('#sortWrapper').hide();
	$('#topWrapper').hide();
	
	if(con == 'answer'){
		$('#answerWrapper').show();
		$('#topWrapper').show();
	}else if(con == 'sort'){
		$('#sortWrapper').show();
	}else{
		$('#actionWrapper').show();	
		$('#topWrapper').show();
	}
	
	loadEditAnswer(true);
}

/*!
 * 
 * SWAP ANSWER - This is the function that runs to swap answer
 * 
 */
function swapAnswer(con){
	var tmpArray = answer_arr[edit.sortNum];
	var tmpXML = $(edit.xmlFile).find('item').eq(edit.sortNum).clone();
	
	edit.sortNum = Number(edit.sortNum);
	if(con){
		if(edit.sortNum+1 < answer_arr.length){
			answer_arr[edit.sortNum] = answer_arr[edit.sortNum+1];
			answer_arr[edit.sortNum+1] = tmpArray;
			
			$(edit.xmlFile).find('item').eq(edit.sortNum).replaceWith($(edit.xmlFile).find('item').eq(edit.sortNum+1).clone());
			$(edit.xmlFile).find('item').eq(edit.sortNum+1).replaceWith(tmpXML);
			
			edit.sortNum++;
		}
	}else{
		if(edit.sortNum-1 >= 0){
			answer_arr[edit.sortNum] = answer_arr[edit.sortNum-1];
			answer_arr[edit.sortNum-1] = tmpArray;
			
			$(edit.xmlFile).find('item').eq(edit.sortNum).replaceWith($(edit.xmlFile).find('item').eq(edit.sortNum-1).clone());
			$(edit.xmlFile).find('item').eq(edit.sortNum-1).replaceWith(tmpXML);
			
			edit.sortNum--;
		}
	}
	
	buildAnswerDD();
	scrollSelectTo(edit.sortNum);
	loadEditAnswer(true);
}

function scrollSelectTo(num){
	$('#sortanswerlist').prop("selectedIndex", edit.sortNum);
	var $s = $('#sortanswerlist');
	var optionTop = $s.find('[value="'+num+'"]').offset().top;
	var selectTop = $s.offset().top;
	$s.scrollTop($s.scrollTop() + (optionTop - selectTop));
}

/*!
 * 
 * BUILD ANSWER DROPDOWN - This is the function that runs to build answer dropdown
 * 
 */
function buildAnswerDD(){
	$('#answerlist').empty();
	$('#sortanswerlist').empty();
	
	for(var n=0;n<answer_arr.length;n++){
		$('#answerlist').append($("<option/>", {
			value: n,
			text: 'Answer '+(n+1)+' : ('+answer_arr[n].answer+')'
		}));
		
		$('#sortanswerlist').append($("<option/>", {
			value: n,
			text: (n+1)+' : ('+answer_arr[n].answer+')'
		}));
	}	
}

/*!
 * 
 * TOGGLE ANSWER - This is the function that runs to toggle answer
 * 
 */
function toggleAnswer(con){
	if(con){
		gameData.answerNum++;
		gameData.answerNum = gameData.answerNum > answer_arr.length - 1 ? 0 : gameData.answerNum;
	}else{
		gameData.answerNum--;
		gameData.answerNum = gameData.answerNum < 0 ? answer_arr.length - 1 : gameData.answerNum;
	}
	
	$('#answerlist').prop("selectedIndex", gameData.answerNum);
	loadEditAnswer(true);
}

/*!
 * 
 * ADD ANSWER - This is the function that runs to add answer
 * 
 */
function addAnswer(){
	var newAnswerText = 'New Answer';
	answer_arr.push({answer:newAnswerText, audio:'', hint:'hint', category:""});
	
	var newXMLItem = "	<item>\n";
	newXMLItem += "		<category></category>\n";
	newXMLItem += "		<answer audio=\"\"><![CDATA["+newAnswerText+"]]></answer>\n";
	newXMLItem += "		<hint></hint>\n";
	newXMLItem += "	</item>\n";
	
	$(edit.xmlFile).find('questions').append(newXMLItem);
	
	$('#answerCategory').val('');
	$('#answerAudio').val('');
	$('#answerHint').val('hint');
	$('#answerText').val(newAnswerText);
	
	gameData.answerNum = answer_arr.length-1;	
	buildAnswerDD();
	
	$('#answerlist').prop("selectedIndex", gameData.answerNum);
	loadEditAnswer(true);
}

/*!
 * 
 * REMOVE ANSWER - This is the function that runs to remove answer
 * 
 */
function removeAnswer(){
	answer_arr.splice(gameData.answerNum, 1);
	$(edit.xmlFile).find('item').eq(gameData.answerNum).remove();
	
	gameData.answerNum = 0;
	buildAnswerDD();
	$('#answerlist').prop("selectedIndex", gameData.answerNum);
	
	loadEditAnswer(true);
}

/*!
 * 
 * LOAD EDIT ANSWER - This is the function that runs to load answer value
 * 
 */
function loadEditAnswer(con){	
	//edit answer
	$('#answerCategory').val(answer_arr[gameData.answerNum].category);
	$('#answerHint').val(answer_arr[gameData.answerNum].hint);
	$('#answerAudio').val(answer_arr[gameData.answerNum].audio);
	$('#answerText').val(answer_arr[gameData.answerNum].answer);
	
	loadAnswer();
}

/*!
 * 
 * UPDATE QUESTION - This is the function that runs to update question value
 * 
 */
function updateAnswer(){
	//update array
	answer_arr[gameData.answerNum].answer = $('#answerText').val();
	answer_arr[gameData.answerNum].audio = $('#answerAudio').val();
	answer_arr[gameData.answerNum].category = $('#answerCategory').val();
	answer_arr[gameData.answerNum].hint = $('#answerHint').val();
	
	//update XML
	$(edit.xmlFile).find('item').eq(gameData.answerNum).find('category').html( $('#answerCategory').val());
	$(edit.xmlFile).find('item').eq(gameData.answerNum).find('hint').html($('#answerHint').val());
	$(edit.xmlFile).find('item').eq(gameData.answerNum).find('answer').html('<![CDATA['+$('#answerText').val()+']]>');
	$(edit.xmlFile).find('item').eq(gameData.answerNum).find('answer').attr('audio', $('#answerAudio').val());
	
	loadEditAnswer(true);
}

/*!
 * 
 * GENERATE ARRAY - This is the function that runs to generate array
 * 
 */
function generateXML(){
	var xmlstr = edit.xmlFile.xml ? edit.xmlFile.xml : (new XMLSerializer()).serializeToString(edit.xmlFile);
	$('#outputXML').val(xmlstr);
}

function saveXML(pass){
	var xmlstr = edit.xmlFile.xml ? edit.xmlFile.xml : (new XMLSerializer()).serializeToString(edit.xmlFile);
	
	$.ajax({
		type: "POST",
		url: "save.php",
		data: {password:pass,
				data:xmlstr}
				
	}).done(function(o) {
		try {
			$.parseJSON(o);
		} catch (e) {
			alert('Error, file cannot save!');
		}
		
		var data = $.parseJSON(o);
		if (!data || data === null) {
			alert('Error, file cannot save!');
		}else{
			if(data.status==true){
				alert('File save successful!');
			}else{
				if(data.option==true){
					alert('Wrong password, file cannot save!');
				}else{
					alert('Save option disabled!');
				}
			}
		}
	});	
}