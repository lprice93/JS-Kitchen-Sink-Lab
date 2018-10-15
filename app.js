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