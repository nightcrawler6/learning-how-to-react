// anonymous normal function assigned into a variable
const square = function(x) {
    return x*x;
}

// normal function can also be defined as non-anonymous such as:
function square2(x){
    return x*x;
}

// arrow functions are ALWAYS anonymous and can only be
// assigned to variables
const squareArrow = (x) => {
    return x*x;
}

// a more concise format:
const squareArrow2 = (x) => x*x;

console.log(square(8));
console.log(squareArrow(9));
console.log(squareArrow2(2));

// normal format
const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}

//shorthand format
const getFirstName2 = (fullName) => fullName.split(' ')[0];

const fullName = 'Karim Mahamed';
console.log(getFirstName(fullName));
console.log(getFirstName2(fullName));