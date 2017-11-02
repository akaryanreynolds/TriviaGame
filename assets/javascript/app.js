// Varables
// ==================================================================================
// Setting the time of game play
var timer = 10;
var intervalId;

// Defining the variables that will be used to show the game score.
var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;
// ==================================================================================
// END Varables



$(document).ready(function() {

	console.log('page is ready');

// Begnning game state
$('#gameContainer').hide();
$('#resultsContainer').hide();




// Click Functions:
// ==================================================================================
// Start button hides the start page and then shows the game page with questions
$('#startButton').on("click", function() {
	$('#gameContainer').show();
	$('#startButtonDiv').hide();
	run();
	timerStart();
});

// Done button to complete game and take you to the results screen
$("#doneButton").on("click", function(){
	timer = 10;
	stop();
	gameEnd();
});

// Reply button that takes you back to the start screen
$('#replayButton').on("click", function () {
	timer = 10;
	correctCount = 0;
	wrongCount = 0;
	unansweredCount = 0;
	$('#startButtonDiv').show();
	$('#gameContainer').hide();
	$('#resultsContainer').hide();
})
// ==================================================================================
// END Click Functions




// Clock Functions
// ==================================================================================

// Starts the timer and counts down by one seco
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

// Stop the time at 0 to prevent it from counting negative numbers
 function stop() {
  clearInterval(intervalId);
}

 // ==================================================================================
 // END Clock Functions



// If Statments 
// ==================================================================================
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

// Displaying the resutl counts in the html
$('#correctAnswers').html(correctCount);
$('#wrongAnswers').html(wrongCount);
$('#unanswered').html(unansweredCount);

}
// ==================================================================================
// END If Statements
	
});