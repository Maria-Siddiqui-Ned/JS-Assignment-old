var contactNumbers = [];
var contactNames = [];

contactNumbers.push(+prompt ('Enter First Contact Number: '));
contactNames.push(prompt ('Enter First Contact Name: '));

contactNumbers.push (+prompt ('Enter Second Contact Number: '));
contactNames.push(prompt ('Enter Second Contact Name: '));

contactNumbers.push(+prompt ('Enter third Contact Number: '));
contactNames.push(prompt ('Enter third Contact Name: '));

contactNumbers.push (+prompt ('Enter fourth Contact Number: '));
contactNames.push (prompt ('Enter fourth Contact Name: '));

for (let i = 0; i < 4; i++){
        console.log(contactNumbers[i]);
        console.log(contactNames[i]);
}