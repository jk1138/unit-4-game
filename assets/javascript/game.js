
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
  var clientScore = 0;
  var computerScore = 0;
  
  // Wins and Losses
  var winCounter = 0;
  var lossCounter = 0;
  
  
  // FUNCTIONS
  
  // Helper Function for getting random numbers
  var getRandom = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  // Starts the Game (and restarts the game)
  var startGame = function() {
  
	// Reset the Current Score
	clientScore = 0;
  
	// Set a new Target Score (between 19 and 120)
	computerScore = getRandom(19, 120);
  
	// Set different values for each of the crystals (between 1 and 12)
	crystal.blue.value = getRandom(1, 12);
	crystal.red.value = getRandom(1, 12);
	crystal.green.value = getRandom(1, 12);
	crystal.yellow.value = getRandom(1, 12);
  
	// Change the HTML to reflect all of these changes
	$("#your-score").text(clientScore);
	$("#total-score").text(computerScore);
  
  
	// Testing Console
	console.log("-----------------------------------");
	console.log("Total Score: " + computerScore);
	console.log("Blue: " + crystal.blue.value + " | Green: " + crystal.green.value + " | Red: " + crystal.red.value +
	  " | Yellow: " + crystal.yellow.value);
	console.log("-----------------------------------");
  };
  
  // Check if User Won or Lost and Reset the Game
  var checkWin = function() {
  
	// Check if currentScore is larger than targetScore
	if (clientScore > computerScore) {
	  alert("Sorry. You lost!");
	  console.log("You Lost");
  
	  // Add to Loss Counter
	  lossCounter++;
  
	  // Change Loss Count HTML
	  $("#loss-count").text(lossCounter);
  
	  // Restart the game
	  startGame();
	}
  
	else if (clientScore === computerScore) {
	  alert("Congratulations! You Won!");
	  console.log("You Won!");
  
	  // Add to the Win Counter
	  winCounter++;
  
	  // Change Win Count HTML
	  $("#win-count").text(winCounter);
  
	  // Restart the game
	  startGame();
	}
  
  };
  
  // Respond to clicks on the crystals
  var addValues = function(clickedCrystal) {
  
	// Change currentScore
	clientScore += clickedCrystal.value;
  
	// Change the HTML to reflect changes in currentScore
	$("#your-score").text(clientScore);
  
	// Call the checkWin Function
	checkWin();
  
	// Testing Console
	console.log("Your Score: " + clientScore);
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
  