var name = prompt ("Please enter your name : ");
var length = name.length;
var firstLetter = name.slice(0,1);
var firstcaps = firstLetter.toUpperCase();
var remainingLetter= name.slice(1,length+1);
remainingLetter = remainingLetter.toLowerCase();
alert('Your name with first letter capitalized is :' + firstcaps + remainingLetter );