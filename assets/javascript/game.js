var aLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var guessesLeft = 9;
var losses = 0;

var guessesSoFar = [];
var userGuess = null;

var LettersYetGuessed = aLetters[Math.floor(Math.random() * aLetters.length)];
console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + LettersYetGuessed);
document.onkeyup = function(event) {
var userGuess = String.fromCharCode(event.keyCode).toLowerCas,e();

if (guessesSoFar.indexOf(userGuess) < 0 && aLetters.indexOf(userGuess) >= 0) {
		guessesSoFar[guessesSoFar.length]=userGuess;

		if (LettersYetGuessed == userGuess) {
		wins++;
		console.log("You won!");
		guessesLeft = 9;
		guessesSoFar = [];
		LettersYetGuessed = aLetters[Math.floor(Math.random() * a8Letters.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + LettersYetGuessed);
	}

	if (guessesLeft == 0) {
		losses++;
		console.log("You lost!");
		guessesLeft = 9;
		guessesSoFar = [];
		letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + lettersYetGuessed);
		var html = "<p><h1>The Psychic Game</h1></p>" + "<p><h4.>Guess what letter I'm thinking of</h4></p>" + "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + "<p><h4>Your guesses so far: " + guessesSoFar + "</h4></p>";
	document.querySelector("#game").innerHTML = html;

}
