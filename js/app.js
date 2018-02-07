'use strict';

var userName = prompt('Hi! Glad you are here! What is your name?');

alert ('Hi, ' + userName + ', nice to meet you! I am going to ask you a few fun questions about me. Please answer with y/n or yes/no.');
console.log('User was asked their name, responded with ' + userName + '.');

var answer1 = prompt('Do you think I like pets?').toLowerCase().trim();

if (answer1 === 'yes' || answer1 === 'y') {
	alert('You\'re right, ' + userName + '! I have a dog and a cat!');
} else if (answer1 === 'no' || answer1 === 'n') {
	alert('Um, no, ' + userName + ' you\'re wrong, I love animals!');
} else {
	alert('Sorry, that was not a valid answer. Maybe you made a typo? Oh well, let\'s move on to the next question.');
} 
console.log('User was asked if they thought I liked pets, responded with ' + answer1 + '.');

var answer2 = prompt('Next question! Do you think I have a sister?').toLowerCase().trim();

if (answer2 === 'no' || answer2 === 'n') {
	alert('You are correct, ' + userName + '! I have a brother who lives at home with me.');
} else if (answer2 === 'yes' || answer2 === 'y') {
	alert('Sorry, ' + userName + ', I do not have a sister.');
} else {
	alert('Invalid response.');
}
console.log('User was asked if they thought I had a sister. ' + userName + ' responded with ' + answer2 + '.')

var answer3 = prompt('Next question! Do you think I like to drive?').toLowerCase().trim();

if (answer3 === 'yes' || answer3 === 'y') {
	alert('Your are correct, ' + userName + '! I love driving, especially a manual transmission.');
} else if (answer3 === 'no' || answer3 === 'n') {
	alert('Sorry, ' + userName + ', you\'re wrong, driving calms and centers me.');
} else {
	alert('Invalid response.');
}
console.log('User was asked if they thought I like to drive. ' + userName + ' responded with ' + answer3 + '.');

var answer4 = prompt('Next question! Do I suffer from migraines?').toLowerCase().trim();

if (answer4 === 'yes' || answer4 === 'y') {
	alert('Sadly, you are correct, ' + userName + '. Sometimes my migraines keep me from being able to do my class work.');
} else if (answer4 === 'no' || answer4 === 'n') {
	alert('Sadly, ' + userName + ', you\'re wrong.  I wish I didn\'t suffer from migraines.');
} else {
	alert('Invalid response.');
}
console.log('User was asked if they thought I suffer from migraines.' + userName + ' responded with ' + answer4 + '.');

var answer5 = prompt('Final question! Do I like the colors blue and green?').toLowerCase().trim();

if (answer5 === 'yes' || answer5 === 'y') {
	alert('Yep, ' + userName + ', you are correct! My birthstone is aquamarine, and I love sea tones.');
} else if (answer5 === 'no' || answer5 === 'n') {
	alert('Sorry, ' + userName + ', you\'re wrong. I\'m a water baby, Pisces, born in March, and love colors related to water.');
} else {
	alert('Invalid response.');
}
console.log('User was asked if they thought I like the colors blue and green.' + userName + ' responded with ' + answer5 + '.');
/*if (answer is correct) {
	tell them they are right
} else {
	tell them they are wrong
}*/