//Opening page with start button

// Timer Function including time converter to seconds?

// Ability to get radio button values, compare to correct answers and increment correct/incorrect/unanswers

//When Timer hits 0, show final results

//Button to restart game
$(document).ready(function(){

var baseballTonight = document.createElement("audio");
baseballTonight.src="https://www.televisiontunes.com/uploads/audio/ESPN%20-%20Baseball%20Tonight.mp3";
baseballTonight.volume=0.50;
baseballTonight.autoPlay=false;
baseballTonight.preLoad=true;

var playBall = document.createElement("audio");
playBall.src="http://soundbible.com/mp3/Play Ball Umpire-SoundBible.com-675977381.mp3";
playBall.volume=1;
playBall.autoPlay=false;
playBall.preLoad=true;

var crowd = document.createElement("audio");
crowd.src="http://soundbible.com/mp3/5_Sec_Crowd_Cheer-Mike_Koenig-1562033255.mp3";
crowd.volume=0.50;
crowd.autoPlay=false;
crowd.preLoad=true;

function playSounds(){
    crowd.play();
    setTimeout(function() { baseballTonight.play(); }, 5000);
    setTimeout(function() { playBall.play(); }, 2000); 
}

var timeRemaining = 60;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var intervalID;



var radioButtons = [
    "question-one",
    "question-two",
    "question-three",
    "question-four",
    "question-five",
    "question-six",
    "question-seven",
    "question-eight",
]

function checkAnswers(){    
    for (i=0; i < radioButtons.length; i++){
        var currentButton = radioButtons[i];
        var radioButtonsList = document.getElementsByName(currentButton);
            for (var x = 0; x < radioButtonsList.length; x++){
                if (radioButtonsList[x].checked){
                    radioValue = radioButtonsList[x].value;                    
                    if(radioValue === 'right'){
                        correct++;                       
                    }
                    else {
                        incorrect++;            
                    }
                }
            } 
        unanswered = 8 - correct - incorrect
        $('#correct').text('Questions Correct: ' + correct)
        $('#incorrect').text('Questions Incorrect: ' + incorrect)
        $('#not-answered').text('Questions Not Answered: ' + unanswered)
        
                   
        }
        
    }




function printTime(){
    if (timeRemaining > 0){
        timeRemaining--;
        console.log(timeRemaining);
        $('#time-remaining').text("Time Remaining: " + timeRemaining + " seconds")
    }
    else {
        clearInterval(intervalID)        
        $('#start-page').css("display", "none");
        $('#main-content').css("display", "none");
        $('#results').css("display", "flex");        
        checkAnswers() 
    }
}

$('#start').click(function(){
    $('#start-page').css("display", "none");
    $('#main-content').css("display", "flex");
    clearInterval(intervalID);
    intervalID = setInterval(printTime, 1000);    
    playSounds();
       

})

$('#restart').click(function(){
    $('#start-page').css("display", "none");
    $('#main-content').css("display", "flex");
    $('#results').css("display", "none");
    clearInterval(intervalID)
    intervalID = setInterval(printTime, 1000);
    timeRemaining = 60;
    $('#time-remaining').text("Time Remaining: " + timeRemaining + " seconds")
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    $('.radiobutton').prop('checked', false);
    playSounds();
    

})



























})