var person = "Lindsay"

const countries = 50;

// compute result of adding 5 and 4 and store in appropriate variable
var x = 5;
var y = 4;
var z = x + y;

console.log(person.charCodeAt(0));
// display an alert for any name beginning with a letter after L
if (person.charCodeAt(0) === 75) {
    alert("Back of line!");
} else {
    alert("Next!");
}

// create a function with an alert
function sayHello() {
    alert("Hello World!")
}
sayHello();

function checkAge(name, age) {
    if (age < 21) {
        alert(`Sorry ${name} you are not old enough to view this page!`);
    } else {
        alert("Carry On");
    }
}
checkAge(person, 19);
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

// create a loop to display each array item to developer console
var veggies = ["Broccoli", "Cucumbers", "Carrots", "Spinach"]
for (x in veggies) {
    console.log(x);
}

let personArray = [
    {
        name: "Siobhan",        //don't forget the commas to separate each argument
        age: 31
    },
    {
        name: "Ruth",
        age: 20
    },
    {
        name: "Joy",
        age: 22
    },
    {
        name: "Austin",
        age: 24
    },
    {
        name: "Giovanni",
        age: 17
    }
];

for (let = 0; let > 21; i++) {      /* why do I need to use i++? */
    console.log(personArray);
    console.log(personArray.name);
    console.log(personArray.age);
}
// create a getLength function that accepts any word as an argument. return = number of var in string
function getLength(str) {
    return str.length;
}

// call getLength function and pass Hello World as argument. Store return result in a variable
getLength("Hello World!");
let length = getLength("Hello World!");
console.log(getLength("Hello World!"));

// you do not have to retype "hello world!" here as it automatically references the argument inside isEven var
var isEven = getLength("Hello World!"); {
    if (isEven % 2 === 0);
}

// be sure to define isEven or isOdd. define one and JavaScript will determine the other as true or false
if (getLength("Hello World!") == length.isEven) {
    alert("The world is nice and even!");
} else (getLength("Hello World!") == length.isOdd); {
    alert("The world is an odd place!");
}