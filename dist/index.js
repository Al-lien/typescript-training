"use strict";
// arrays
let names = ["Alexis", "Antoine", "Albane"];
let ages = [25, 28, 24];
names.push("Dider");
ages.push(50);
// type inference with arrays
let fruits = ["apples", " pears", "bananas", "mangos"];
fruits.push("peaches");
const f = fruits[3];
let things = [1, true, "hello"];
const t = things[0];
// object literals
let user = {
    firstname: "Alexis",
    age: 30,
    id: 1,
};
user.firstname = "Antoine";
user.id = 2;
// type inference with object literals
let person = {
    name: "luigi",
    score: 30,
};
person.name = "mario";
person.score = 40;
const score = person.score;
// functions
function addTwoNumbers(a, b) {
    // ": number" after braces means return value must be a number
    return a + b;
}
const subtractTwoNumbers = (a, b) => {
    return a - b;
};
function addAllNumbers(items) {
    const total = items.reduce((a, c) => a + c, 0);
}
addAllNumbers([5, 7, 10, 1, 4]);
// return type inference
function formatGreeting(name, greeting) {
    return `${greeting}, ${name}`;
}
const result = formatGreeting("Alexis", "Hello");
console.log(result);
