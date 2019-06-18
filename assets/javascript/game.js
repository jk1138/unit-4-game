// The specific letters that the user typed.
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Setting for zero
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterUser = [];
var eachofLetters = null;


// Sets the computerGuess variable equal to a random choice from the computerChoice array.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

function countGuessesLeft() {
	document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}

function farUserGuesses() {
	document.querySelector("#letter").innerHTML = "Your Guesses so far: " + letterUser.join(' ');
}

countGuessesLeft();

var restart = function() {
	guessesLeft = 9;
	letterUser = [];
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

// When the user presses a key, it will run the following function..
document.onkeyup = function(event) {
	guessesLeft--;

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	letterUser.push(userGuess);
	countGuessesLeft();
	farUserGuesses();

	if (userGuess === computerGuess){
		wins++;
		document.querySelector("#wins").innerHTML = "Wins: " + wins;
		restart();
	} 
	else if (guessesLeft === 0) {
		losses++;
		document.querySelector("#lose").innerHTML = "Loses: " + losses;
		restart();
	}
  };

//--------------------------------   SOLUTION   -----------------------------------

// GLOBAL VARIABLES
// =================================================================

// Crystal Variables
var crystal = {
	blue:
	{
	  name: "Blue",
	  value: 0
	},
	green:
	{
	  name: "Green",
	  value: 0
	},
	red:
	{
	  name: "Red",
	  value: 0
	},
	yellow:
	{
	  name: "Yellow",
	  value: 0
	}
  };
  
  // Scores (Current and Target)
  var currentScore = 0;
  var targetScore = 0;
  
  // Wins and Losses
  var winCount = 0;
  var lossCount = 0;
  
  
  // FUNCTIONS
  // =================================================================
  
  // Helper Function for getting random numbers
  var getRandom = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  // Starts the Game (and restarts the game)
  var startGame = function() {
  
	// Reset the Current Score
	currentScore = 0;
  
	// Set a new Target Score (between 19 and 120)
	targetScore = getRandom(19, 120);
  
	// Set different values for each of the crystals (between 1 and 12)
	crystal.blue.value = getRandom(1, 12);
	crystal.red.value = getRandom(1, 12);
	crystal.green.value = getRandom(1, 12);
	crystal.yellow.value = getRandom(1, 12);
  
	// Change the HTML to reflect all of these changes
	$("#your-score").text(currentScore);
	$("#target-score").text(targetScore);
  
  
	// Testing Console
	console.log("-----------------------------------");
	console.log("Target Score: " + targetScore);
	console.log("Blue: " + crystal.blue.value + " | Green: " + crystal.green.value + " | Red: " + crystal.red.value +
	  " | Yellow: " + crystal.yellow.value);
	console.log("-----------------------------------");
  };
  
  // Check if User Won or Lost and Reset the Game
  var checkWin = function() {
  
	// Check if currentScore is larger than targetScore
	if (currentScore > targetScore) {
	  alert("Sorry. You lost!");
	  console.log("You Lost");
  
	  // Add to Loss Counter
	  lossCount++;
  
	  // Change Loss Count HTML
	  $("#loss-count").text(lossCount);
  
	  // Restart the game
	  startGame();
	}
  
	else if (currentScore === targetScore) {
	  alert("Congratulations! You Won!");
	  console.log("You Won!");
  
	  // Add to the Win Counter
	  winCount++;
  
	  // Change Win Count HTML
	  $("#win-count").text(winCount);
  
	  // Restart the game
	  startGame();
	}
  
  };
  
  // Respond to clicks on the crystals
  var addValues = function(clickedCrystal) {
  
	// Change currentScore
	currentScore += clickedCrystal.value;
  
	// Change the HTML to reflect changes in currentScore
	$("#your-score").text(currentScore);
  
	// Call the checkWin Function
	checkWin();
  
	// Testing Console
	console.log("Your Score: " + currentScore);
  };
  
  // MAIN PROCESS
  // =================================================================
  
  // Starts the Game the First Time.
  startGame();
  
  $("#blue").click(function() {
	addValues(crystal.blue);
  });
  
  $("#red").click(function() {
	addValues(crystal.red);
  });
  
  $("#green").click(function() {
	addValues(crystal.green);
  });
  
  $("#yellow").click(function() {
	addValues(crystal.yellow);
  });
  