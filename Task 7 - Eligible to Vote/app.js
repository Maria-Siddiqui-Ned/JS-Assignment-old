var nationality = prompt ("Please enter your Nationality: ");
nationality= nationality.toUpperCase();

if (nationality == 'PAKISTANI' || nationality == 'INDIAN'){
    age = +prompt("Please enter your age: ");
    
    if (age >= 18){
        gender = prompt("Please enter your gender: ");
        gender = gender.toUpperCase();
        
        if (gender == 'MALE'){
            alert("You are eligible to vote!!");
        }
        
        else if (gender == 'FEMALE'){
            MaritalStatus = prompt ('Please enter your Marital Status')
            MaritalStatus = MaritalStatus.toUpperCase();
            
            if (MaritalStatus == 'MARRIED'){
                alert("You are eligible to vote!!");
            }
            
            else if (MaritalStatus == 'UNMARRIED'){
                alert("Sorry, You are not eligible to vote!!");
            }

            else{
                alert("Please enter a correct Marital Status!!");
            }
        }
        
        else{
            alert("Please enter a correct gender!!");
        }

    }
    else{
        alert("Sorry, You are not eligible to vote!!");
    }

}

else{
    alert("Sorry, You are not eligible to vote!!");
}