// //Getting the document ready
// $(document).ready(function() {

// //Creation of the countdown timer

// //Declaring the number counter variable to 5
// var number = 5;

// //Varible that hold the interval ID, when run function is executed
// var intervalId;

// //To execute the run function, when start button is clicked

// $("#start").on("click", run() {

// 	//Defining the run function. It does two things: sets an interval of 1s and reduces the number by 1
// 	function run() {
		
// 		intervalId =setInterval(decrement, 1000);
// 		console.log("Am I working?");
// 	};

	// //Defining the decrement function that was a parameter in the run function
	// function decrement() {
	// 	//number reduced by 1
	// 	number--;
	// 	//to display the decrementing values in html, as an h3 heading
	// 	$("#show-number").html("<h3>" + number + "</h3>");

	// 	//when time's up...
	// 	if (number === 0) {
	// 		//Text to display
	// 		$("#show-number").html("<h3>Time's Up!</h3>");
	// 		//Stopping the excution of run function, so time doesn't go to negatives
	// 		stop();
	// 	}
	// };

	// //Defining the stop function
	// function stop() {
	      
	//       clearInterval(intervalId);
	// };

// });//closing the onclick function

// });//closing the .ready function


//Getting the document ready
$(document).ready(function() {

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

});//end of .ready function


