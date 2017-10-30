// Setting the time of game play
var timer = 101;
var intervalId;


// Defining the variables that will be used to show the game score.
var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;

// var questionsArray = [

// 	{
// 	question01: 'What do you call the small image icons used to express emotions or ideas in digital communication?',
// 	responses01: [Smiley, Emoji, Gif, Icon],
// 	anwswer01: this.responses01[0]
// 	},

// ];



$(document).ready(function() {

	console.log('page is ready');

$('#gameContainer').hide();
$('#resultsContainer').hide();	

// Start button hides the start page and then shows the game page with questions
$('#startButton').on("click", function() {
    	$('#gameContainer').show();
    	$('#startButtonDiv').hide();
    	run();
    	timerStart();
	});

// Functions for running the clock
	function run() {
      intervalId = setInterval(timerStart, 1000);
    }

	function timerStart(){
		timer--;

	      if (timer === 0) {
	        stop();
	        alert("Time Up!");
	        gameEnd();
		}
	$('#gameTimer').html('Time Remaining: ' + timer + ' Seconds');
	}

// If done button is clicked
	$("#doneButton").on("click", function(){
			count = 0;
			stop();
			gameEnd();
			});

// Stop the time at 0 to prevent it from counting negative numbers
	 function stop() {
      clearInterval(intervalId);
    }

 // Function and ifs for ending the game
 	function gameEnd() {

 	var q1 = $('input:radio[name="q1"]:checked').val();

	if(q1 == undefined){
			unansweredCount++;
		}
		else if(q1 == "Emoji"){
			correctCount++;
		}
		else{
			wrongCount++;
		}
	$('#gameContainer').hide();
	$('#resultsContainer').show();	
	


	$('#correctAnswers').html(correctCount);
	$('#wrongAnswers').html(wrongCount);
	$('#unanswered').html(unansweredCount);

}

	
});