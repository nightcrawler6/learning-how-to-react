// let's redefine and reassign
// open for dev mistakes and difficult to debug scenarios
var nameVar = 'Karim';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

// let's you reassign, however no redefine possibility
let nameLet = 'Kim';
nameLet = 'Cuckoo';

// it is constant, cant reassign or redefine
const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block scoping
var fullName = 'Karim Mahamed';
let firstName;
if(fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);