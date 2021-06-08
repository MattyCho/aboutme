'use strict';

// proof of life
console.log('hello js');

let userGames = prompt('Do you like to play games? (Please answer yes or no)')

if (userGames.toLowerCase() === 'yes') {
  alert('Cool! Me too!')
} else if (userGames.toLowerCase() === 'no'){
  alert('Different strokes for different folks')
} else {
  alert('Please answer yes or no')
}

let userAnime = prompt('Do you like to watch anime? (Please answer yes or no)')

if (userAnime.toLowerCase() === 'yes') {
  alert('Cool! Me too!')
} else if (userAnime.toLowerCase() === 'no'){
  alert('Different strokes for different folks')
} else {
  alert('Please answer yes or no')
}

let userDive = prompt('Have you ever been skydiving? (Please answer yes or no)')

if (userDive.toLowerCase() === 'yes') {
  alert('Wow, that\s impressive!')
} else if (userDive.toLowerCase() === 'no'){
  alert('Who\'s crazy enough to do that!?')
} else {
  alert('Please answer yes or no')
}

let userMoon = prompt('Have you ever been to the Moon? (Please answer yes or no)')

if (userMoon.toLowerCase() === 'yes') {
  alert('Unless you are an astronaut, I don\'t believe you.')
} else if (userMoon.toLowerCase() === 'no'){
  alert('Maybe in the future you\'ll be able to go, if you want.')
} else {
  alert('Please answer yes or no')
}

let userTired = prompt('Are you tired of these questions? (Please answer yes or no)')

if (userTired.toLowerCase() === 'yes') {
  alert('This is the last one, I promise.')
} else if (userTired.toLowerCase() === 'no'){
  alert('Well I\'m tired of writing them.')
} else {
  alert('Please answer yes or no')
}

let userName = prompt('How about we learn a little bit about you. What is your name?')

alert('Thank you ' + userName + ' for visiting my site! Enjoy!')