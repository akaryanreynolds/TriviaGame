// Varables
// ==================================================================================
// Setting the time of game play
var timer = 100;
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
	timer = 100;
	stop();
	gameEnd();
});

// Reply button that takes you back to the start screen
$('#replayButton').on("click", function () {
	timer = 100;
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

var q2 = $('input:radio[name="q2"]:checked').val();

if(q2 == undefined){
		unansweredCount++;
	}
	else if(q2 == "Liquid Crystal Display"){
		correctCount++;
	}
	else{
		wrongCount++;
	}

var q3 = $('input:radio[name="q3"]:checked').val();

if(q3 == undefined){
		unansweredCount++;
	}
	else if(q3 == "Read Only Memory"){
		correctCount++;
	}
	else{
		wrongCount++;
	}

	var q4 = $('input:radio[name="q4"]:checked').val();

if(q4 == undefined){
		unansweredCount++;
	}
	else if(q4 == "Kodak"){
		correctCount++;
	}
	else{
		wrongCount++;
	}

	var q5 = $('input:radio[name="q5"]:checked').val();

if(q5 == undefined){
		unansweredCount++;
	}
	else if(q5 == "Japan"){
		correctCount++;
	}
	else{
		wrongCount++;
	}

	var q6 = $('input:radio[name="q6"]:checked').val();

if(q6 == undefined){
		unansweredCount++;
	}
	else if(q6 == "Red, Green and Blue"){
		correctCount++;
	}
	else{
		wrongCount++;
	}

	var q7 = $('input:radio[name="q7"]:checked').val();

if(q7 == undefined){
		unansweredCount++;
	}
	else if(q7 == "Websites"){
		correctCount++;
	}
	else{
		wrongCount++;
	}

	var q8 = $('input:radio[name="q8"]:checked').val();

if(q8 == undefined){
		unansweredCount++;
	}
	else if(q8 == "1993"){
		correctCount++;
	}
	else{
		wrongCount++;
	}

	var q9 = $('input:radio[name="q9"]:checked').val();

if(q9 == undefined){
		unansweredCount++;
	}
	else if(q9 == "Laugh Out Loud"){
		correctCount++;
	}
	else{
		wrongCount++;
	}

var q10 = $('input:radio[name="q10"]:checked').val();

if(q10 == undefined){
		unansweredCount++;
	}
	else if(q10 == "1976"){
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