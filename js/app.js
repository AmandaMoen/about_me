'use strict';

var userName = prompt('Hi! Glad you are here! What is your name?');
var score = 0; // Keep a tally of correct answers given by user.


alert ('Hi, ' + userName + ', nice to meet you! I am going to ask you a few fun questions about me. Please answer with y/n or yes/no.');
console.log('User was asked their name, responded with ' + userName + '.');

// Question 1
var answer1 = prompt('Do you think I like pets?').toLowerCase().trim();

if (answer1 === 'yes' || answer1 === 'y') {
  alert('You\'re right, ' + userName + '! I have a dog and a cat!');
  score++;
} else if (answer1 === 'no' || answer1 === 'n') {
  alert('Um, no, ' + userName + ' you\'re wrong, I love animals!');
} else {
  alert('Sorry, that was not a valid answer. Maybe you made a typo? Oh well, let\'s move on to the next question.');
}
console.log('User was asked if they thought I liked pets, responded with ' + answer1 + '.');

// Question 2
var answer2 = prompt('Next question! Do you think I have a sister?').toLowerCase().trim();

if (answer2 === 'no' || answer2 === 'n') {
  alert('You are correct, ' + userName + '! I have a brother who lives at home with me.');
  score++;
} else if (answer2 === 'yes' || answer2 === 'y') {
  alert('Sorry, ' + userName + ', I do not have a sister.');
} else {
  alert('Invalid response.');
}
console.log('User was asked if they thought I had a sister. ' + userName + ' responded with ' + answer2 + '.');

// Question 3
var answer3 = prompt('Next question! Do you think I like to drive?').toLowerCase().trim();

if (answer3 === 'yes' || answer3 === 'y') {
  alert('You are correct, ' + userName + '! I love driving, especially a manual transmission.');
  score++;
} else if (answer3 === 'no' || answer3 === 'n') {
  alert('Sorry, ' + userName + ', you\'re wrong, driving calms and centers me.');
} else {
  alert('Invalid response.');
}
console.log('User was asked if they thought I like to drive. ' + userName + ' responded with ' + answer3 + '.');

// Question 4
var answer4 = prompt('Next question! Do I suffer from migraines?').toLowerCase().trim();

if (answer4 === 'yes' || answer4 === 'y') {
  alert('Sadly, you are correct, ' + userName + '. Sometimes my migraines keep me from being able to do my class work.');
  score++;
} else if (answer4 === 'no' || answer4 === 'n') {
  alert('Sadly, ' + userName + ', you\'re wrong.  I wish I didn\'t suffer from migraines.');
} else {
  alert('Invalid response.');
}
console.log('User was asked if they thought I suffer from migraines.' + userName + ' responded with ' + answer4 + '.');

// Question 5
var answer5 = prompt('Final question! Do I like the colors blue and green?').toLowerCase().trim();

if (answer5 === 'yes' || answer5 === 'y') {
  alert('Yep, ' + userName + ', you are correct! My birthstone is aquamarine, and I love sea tones.');
  score++;
} else if (answer5 === 'no' || answer5 === 'n') {
  alert('Sorry, ' + userName + ', you\'re wrong. I\'m a water baby, Pisces, born in March, and love colors related to water.');
} else {
  alert('Invalid response.');
}
console.log('User was asked if they thought I like the colors blue and green.' + userName + ' responded with ' + answer5 + '.');

// Question 6; guess my age
var guessesRemain = 4;
var myAge = 31;

while (guessesRemain > 0) {
  var answer6 = parseInt (prompt('Now I will give you ' + guessesRemain + ' chances to correctly guess my age.'));
  guessesRemain--;
  console.log(userName + ' thinks that I am ' + answer6 + '.');
  if (answer6 === myAge) {
    alert(userName + ' you are correct.');
    score++;
    break;
  } else if (answer6 < myAge){
    alert(userName + ', you are too low.');
  } else if (answer6 > myAge){
    alert(userName + ', you are too high.');
  } else if (isNaN(answer6)){
    alert(userName + ', please enter a number.');
  }
}
if (guessesRemain === 0) {
  alert('Sorry, ' + userName + ', you are out of guesses.  I am ' + myAge + '.');
}

// Question 7
var guessesLeft = 6;
var faveAnime = ['7 Deadly Sins', 'Fairy Tail', 'Sword Art Online'];

alert('Final question.');
while (guessesLeft > 0) {
  var answer7 = prompt(userName + ', I will give you ' + guessesLeft + ' chances to correctly guess the title of one of my favorite animes.').toLowerCase().trim();
  guessesLeft--;
  console.log(userName + ' thinks that I like to watch ' + answer7 + '.');
  if (answer7 === faveAnime[0].toLowerCase() || answer7 === faveAnime[1].toLowerCase() || answer7 === faveAnime[2].toLowerCase()) {
    alert(userName + ', you are correct! My favorite animes are ' + faveAnime[0] + ', ' + faveAnime[1] + ', and ' + faveAnime[2] + '.');
    score++;
    break;
  } else {
    alert(userName + ', you are wrong.');
  }
  if (guessesLeft === 0) {
    alert('Sorry, ' + userName + ', you are out of guesses.  My favorite animes are ' + faveAnime[0] + ', ' + faveAnime[1] + ', and ' + faveAnime[2] + '.');
  }
}

// Inform the user how many questions they got correct out of 7.
if (score > 4) {
  alert('Congratulations ' + userName + ' you have answered ' + score + ' questions out of 7 questions correctly.');
} else {
  alert('Sorry, ' + userName + ', you only got ' + score + ' questions out of 7 correct.  Better luck next time.');
}