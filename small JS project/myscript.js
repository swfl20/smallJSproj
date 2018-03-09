// global variables
var count; // number of guesses
var n;     // the number to be guessed

//function for full date
function getFullDate() {
	var today = new Date();
	var months = ["January", "February", "March", "April", "May", "June", "July",
				  "August", "September", "October", "November", "December"];
	var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	var day = day[today.getDay()];  
	var date = today.getDate();
	var month = months[today.getMonth()];
	var year = today.getFullYear();
	return day + " " + date + " " + month + " " + year;
}
//validation of name 
function checkName(name) {
	var invalid = /[^a-zA-Z]/;	
	if ( invalid.test(name)) {
	document.gameForm.name.value = "";
		alert( name + " is not a valid name.");
	}
}
//validation of the number being guessed
function checkNumber(str) {
	number = parseInt(str);
	if ( isNaN(number) || number < 0 || number > 1000 ) {
	document.gameForm.number.value = "";
		alert( str + " is not a valid number.");
	}
}
//initialization of count
function initialization(){
	count = 0;
	document.getElementById("counter").innerHTML = count;
	n = Math.floor( 1 + 1000*Math.random() );
}
/*this part contains function for the game hints to be displayed to help user to guess the number_
also when the user has guessed the correct number, a message will be displayed depending_
how well their abilities are*/
function updateGuesses() {
	var name = document.getElementById("name").value;
	var number = document.getElementById("number").value;
		
		if (!(number >= 1 && number <= 1000) || name == ""){
		alert("Error, missing required input!");
		}else{
		
		if (number == n){
		alert("Well done" + " " + name + "!!!");
		win();increment();
		}
		else if (number > n)
		{alert(name + ", your guess is Too big!");
		increment();
		}
		else if (number < n)
		{alert(name + ", your guess is too small!");
		increment();
		}
		}
}
//increment the guesses by 1 when all conditions are met
function increment() {
	var number = document.getElementById("number").value;
	// Increment count by 1
	count++;
	// Update the number of guesses so far
	document.getElementById("counter").innerHTML = count;
}
//their results based on their performance
function win() {
	if (count == 10)
	{document.getElementById("show").innerHTML = "Ahah!" + " " + name + ", You know the secret!";}
	else if (count < 10)
	{document.getElementById("show").innerHTML = "Wow, eIther you know the secret or you got lucky!";}
	else if (count > 10)
	{document.getElementById("show").innerHTML = name + " " + "You should do better than that!";}
}
