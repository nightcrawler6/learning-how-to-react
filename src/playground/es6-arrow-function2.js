// arguments object - no longer bound with arrow functions

const add = function(a, b) {
    console.log(arguments);
    return a+b;
}
console.log(add(55,1, 1001));

const addArrow = (a,b) => {
    //console.log(arguments); --> no longer accessible
    return a+b;
}

// this keyword - no longer bound
const user = {
    name: 'Karim',
    cities: ['Zalafa', 'Tel-Aviv'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city + '!');

        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in: ' + city);
        })
    }
};
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1,2,3,4,5],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((number) => number*this.multiplyBy);
    }
}
console.log(multiplier.multiply());