//state management
//--store quiz q&a
var quiz = {
	quizQuestions:[
		{
			firstQuestion: "question",
			firstAnswers: ["ans-1", "ans-2", "ans-3",  "ans-4"]
		}
	]
};

//--store answer total
var quizTotal = 0;

//state modification functions
//--if an answer is chosen, add to quiz total
function userChoice(selectedAns){	
	quizTotal+=selectedAns;
	console.log(quizTotal);
}

//--delete current question
function deleteQuestion(){
	delete quizQuestion[i];
}

//render functions
//--show the q&a as unordered list
//--show what number the user is on a 'p' item
//--show the end result after the quiz is done

//event listenters
//--start button listener
//--next button listener 

$(document).ready(function() {
	$('#begin').click(function(){
		$('div').first().removeClass('hidden').addClass('show');
		$('#next').removeClass('hidden');
		$(this).remove('button');
	});
	$('#next').click(function(){
		var value = $('.show input:checked').val();
		if(value === undefined){
			alert("You haven't chosen one!");
		} else {
			value = parseInt(value);
			userChoice(value);
			$('.show').next().removeClass('hidden').addClass('show');
			$('.show').first('div').removeClass('show').addClass('hidden');		
		}
	});
})