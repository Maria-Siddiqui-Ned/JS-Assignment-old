var FamilyMembers = prompt ("Enter total number of your family members: ");
var method = +prompt ("Choose a Fitra Method by enter corresponding number from 1 to 4: \r 1 . Wheat    Rs. 250/- \r 2. Barley:     Rs. 450/- \r 3. Dates       Rs. 2100/- \r 4. Raisins     Rs. 2800/- " );
var Wheat = 250;
var Barley = 450;
var Dates = 2100;
var Raisins = 2800;  

if (method==1){
    var fitra = Wheat * FamilyMembers;
    alert ('Fitra amount of your family is: Rs.' + fitra)
    }


else if (method==2){
    var fitra = Barley * FamilyMembers;
    alert ('Fitra amount of your family is: Rs.' + fitra)
    }

else if (method==3){
    var fitra = Dates * FamilyMembers;
    alert ('Fitra amount of your family is: Rs.' + fitra)
    }

else if (method==4){
    var fitra = Raisins * FamilyMembers;
    alert ('Fitra amount of your family is: Rs.' + fitra);
    }

else {
    alert ('You selected a wrong method. Please try again!! Thankyou')
    }