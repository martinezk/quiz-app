//state management
//--store quiz q&a
var quiz = {
	quizQuestions:[
		{
			firstQuestion: "question-1",
			firstAnswers: ["ans-1", "ans-2", "ans-3",  "ans-4"]
		}
	]
};
var quesTemplate = (
	'<h2>' + '</h2>' +
	'<ul>' +
		'<li><input type="radio" name="ans-1" value="1"><label for="ans-1">' + '</label></li>' +
		'<li><input type="radio" name="ans-2" value="2"><label for="ans-2">' + '</label></li>' +
		'<li><input type="radio" name="ans-3" value="3"><label for="ans-3">' + '</label></li>' +
		'<li><input type="radio" name="ans-4" value="4"><label for="ans-4">' + '</label></li>' +
	'</ul>'
);

//--store answer total
var quizTotal = 0;

//state modification functions
//--if an answer is chosen, add to quiz total
function userChoice(quiz, quizQuestion){	
	for (var i=firstAnswers[1]; i<5; i++){
		if (i===1){
			quizTotal+=1;
		} else if (i===2){
			quizTotal+=2;
		} else if (i===3){
			quizTotal+=3;
		} else {
			quizTotal+=4;
		}
	}
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
function checkAns1(){
	var value = $('.question-1 input:checked').val();
	console.log(value);
}
$('.question-1 > button').click(checkAns1)
