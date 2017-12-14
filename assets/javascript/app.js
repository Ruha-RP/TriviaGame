//STEP 1: ***Getting the document ready***
$(document).ready(function() {




//STEP 2: ***Creation of a countdown timer***

	//Declaring the number counter variable to 5
	var number = 5;

	//Variable that hold the interval ID, when run function is executed
	var intervalId;

	//Defining the run function. It does two things: sets an interval of 1s and reduces the number by 1
	function run() {
		intervalId =setInterval(decrement, 1000);
	};

	//Defining the decrement function that was a parameter in the run function
	function decrement() {
	 	//number reduced by 1
		number--;
		//to display the decrementing values in html, as an h3 heading
	 	$("#show-number").html("<h3>" + number + "</h3>");

	 	//when time's up...
	 	if (number === 0) {
	 		//Text to display
	 		$("#show-number").html("<h3>Time's Up!</h3>");
	 		//Stopping the excution of run function, so time doesn't go to negatives
	 		stop();
	 		//creating a new html element that shows the stats
	 		$("#numCorrect").html("Correct answers: " + numCorrect);
	 		$("#numIncorrect").html("Incorrect answers: " + numIncorrect);
	 	}
	};

	//Defining the stop function
	function stop() {
	      clearInterval(intervalId);
	      //reset the number to 5 seconds if the player wants to restart the game
	      number = 5;
	};


	//To execute the run function, when start button is clicked
    $("#start").on("click", run);




//STEP 3: ***IDENTIFYING CORRECT AND INCORRECT ANSWERS***

//Creation of variables, objects or arrays

//The questions object:
var questionBank = {
	qOne: {
		qOne:$("#qOne"),
		aOne:$("#yesOne")
	},
	qTwo: {
		qTwo:$("#qTwo"),
		aOne:$("#yesTwo")
	}
};//closing the questionBank object

//the number of correct variable
var numCorrect = 0;

//the number of incorrect variable, in the beginning set as all incorrect
var numIncorrect = 4;

//


//4.***CREATION OF ON-CLICK EVENTS FOR EACH QUESTION***
//when the correct answer is clicked for question 1...
$("#yesOne").on("click", function() {
	//the number of correct answer increment by 1
	numCorrect++;
	//let's test it
	console.log("The numCorrect is" + numCorrect);
	//when the user clicks the incorrect answer
	numIncorrect--;
	//let's test it
	console.log("The numIncorrect is" + numIncorrect);
});



//when the correct answer is clicked for question 2...
$("#yesTwo").on("click", function() {
	//the number of correct answer increment by 1
	numCorrect++;
	//let's test it
	console.log("The numCorrect is" + numCorrect);
	//when the user clicks the incorrect answer
	numIncorrect--;
	//let's test it
	console.log("The numIncorrect is" + numIncorrect);
});

//when the correct answer is clicked fro question 3...
$("#yesThree").on("click", function() {
	//the number of correct answer increment by 1
	numCorrect++;
	//let's test it
	console.log("The numCorrect is" + numCorrect);
	//when the user clicks the incorrect answer
	numIncorrect--;
	//let's test it
	console.log("The numIncorrect is" + numIncorrect);
});



//when the correct answer is clicked for question 4...
$("#yesFour").on("click", function() {
	//the number of correct answer increment by 1
	numCorrect++;
	//let's test it
	console.log("The numCorrect is" + numCorrect);
	//when the user clicks the incorrect answer
	numIncorrect--;
	//let's test it
	console.log("The numIncorrect is" + numIncorrect);
});



});//end of .ready function


