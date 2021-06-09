'use strict';

// proof of life
console.log('hello js');

let userScore = 0

let userName = prompt('How about we learn a little bit about you. What is your name?')
console.log('User\'s name is : ' + userName)
alert('Welcome ' + userName + '!')

let userGames = prompt('Do you like to play games? (Please answer yes or no)')

if (userGames.toLowerCase() === 'yes') {
  alert('Cool! Me too!')
  userScore++
} else if (userGames.toLowerCase() === 'no'){
  alert('Different strokes for different folks')
} else {
  alert('Please answer yes or no')
}
console.log('User\'s current score is: '+ userScore)

let userAnime = prompt('Do you like to watch anime? (Please answer yes or no)')

if (userAnime.toLowerCase() === 'yes') {
  alert('Cool! Me too!')
  userScore++
} else if (userAnime.toLowerCase() === 'no'){
  alert('Different strokes for different folks')
} else {
  alert('Please answer yes or no')
}
console.log('User\'s current score is: '+ userScore)


let userDive = prompt('Have you ever been skydiving? (Please answer yes or no)')

if (userDive.toLowerCase() === 'yes') {
  alert('Wow, that\s impressive!')
  userScore++
} else if (userDive.toLowerCase() === 'no'){
  alert('Who\'s crazy enough to do that!?')
} else {
  alert('Please answer yes or no')
}
console.log('User\'s current score is: '+ userScore)


let userMoon = prompt('Have you ever been to the Moon? (Please answer yes or no)')

if (userMoon.toLowerCase() === 'yes') {
  alert('Unless you are an astronaut, I don\'t believe you.')
  userScore++
} else if (userMoon.toLowerCase() === 'no'){
  alert('Maybe in the future you\'ll be able to go, if you want.')
} else {
  alert('Please answer yes or no')
}
console.log('User\'s current score is: '+ userScore)

let userTired = prompt('Are you tired of these questions? (Please answer yes or no)')

if (userTired.toLowerCase() === 'yes') {
  alert('This is the last one, I promise.')
  userScore++
} else if (userTired.toLowerCase() === 'no'){
  alert('Well I\'m tired of writing them.')
} else {
  alert('Please answer yes or no')
}
console.log('User\'s current score is: '+ userScore)

//Random number guessing game
let correctAnswer = Math.floor(Math.random() * 100) + 1;
console.log('The correct answer is: ' + correctAnswer);
let userAttempts = 4;
for(let i = 0; i < userAttempts; i++){
    let userGuess = prompt('Please Enter a Number 1 - 100:' + ' (You have ' + (userAttempts - i) + ' attempts left.)');
    while(userGuess < 1 || userGuess > 100){
        userGuess = prompt('Wrong Range.  Please Enter a Number 1 - 1000');
    }
    if (userGuess == correctAnswer){
        alert('You got it right! The correct answer was ' + correctAnswer + '! Congratulations!');
        userScore++
        break;
    } else if(userGuess < correctAnswer){
        alert('Too Low.  Try Again.');
    }  else if (userGuess > correctAnswer) {
        alert('Too High.  Try Again.');
    } else {
        alert('Something Else Went Wrong.');
    }
    console.log(i);
    if (i == userAttempts - 1){
        alert('You did not win.  Correct answer is: ' + correctAnswer);
    }
}
console.log('User\'s current score is: '+ userScore)

let arrayGames = ['final fantasy', 'persona', 'halo', 'call of duty'];
let userGameAttempts = 6;
let userCorrect = false;

while (userGameAttempts > 0 && userCorrect == false) {
  let userGameGuess = prompt('Try to guess some of my favorite video games. You have ' + userGameAttempts + ' guesses left.')
  for (let n=0; n < arrayGames.length; n++ ){
    if (userGameGuess.toLowerCase() === arrayGames[n]){
      alert('Congrats! You got it right! Some of my favorite games are Halo, Final Fantasy, Persona, and Call of Duty.')
      userCorrect = true;
      userScore++
      break;
    }
  }
  if (userCorrect === false){
    alert('Sorry. Try again.')
  }
  userGameAttempts--
  console.log('Current value of userGameAttempts: ' + userGameAttempts)
}

if (userGameAttempts === 0) [
  alert('Sorry. You ran out of guesses. Better luck next time.')
]

console.log('User score is ' + userScore)
alert('Great job! You scored ' + userScore)
alert('Thank you ' + userName + ' for visiting my site! Enjoy!')