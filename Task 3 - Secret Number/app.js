var SecretNumber = 5;
var guess = +prompt('Guess the Secret Number from 1 to 10');

if ( guess==5){
    alert ("Congratulations! You guessed the secret number.");
    }

else if ( guess>5 && guess<10){
        alert ("You guess is too high. Please try again!!");
        }
        
else if ( guess<5 && guess>0){
    alert ("You guess is too low. Please try again!!");
    }

else{
    alert ("Please enter a valid number from 1 to 10.");
    }
    