'use strict';

// arguments object - no longer bound with arrow functions

var add = function add(a, b) {
    console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 1001));

var addArrow = function addArrow(a, b) {
    //console.log(arguments); --> no longer accessible
    return a + b;
};

// this keyword - no longer bound
var user = {
    name: 'Karim',
    cities: ['Zalafa', 'Tel-Aviv'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city + '!';
        });

        this.cities.forEach(function (city) {
            console.log(_this.name + ' has lived in: ' + city);
        });
    }
};
console.log(user.printPlacesLived());

var multiplier = {
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 5,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};
console.log(multiplier.multiply());
