// arrays

let names: string[] = ["Alexis", "Antoine", "Albane"];
let ages: number[] = [25, 28, 24];

names.push("Dider");
ages.push(50);

// type inference with arrays

let fruits = ["apples", " pears", "bananas", "mangos"];

fruits.push("peaches");

const f = fruits[3];

let things = [1, true, "hello"];

const t = things[0];

// object literals

let user: { firstname: string; age: number; id: number } = {
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

const score = person.score

console.log(score);


// functions 

function 