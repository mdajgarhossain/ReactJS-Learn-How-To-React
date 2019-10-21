//Part 1b - Javascript:::::::::::::::::::::::::::::::::::::::::::::::::::::
//Essential Javascript for ReactJS

//Variables::::::::::::::

const x = 1;
let y = 5;
console.log(x, y);

y += 10;
console.log(x, y);

y = 'sometext';
console.log(x, y);

// x = 4;


//Arrays:::::::::
console.log('::::::::::::::::::::::::Arrays:::::::::');

const t = [1, -1, 3];

t.push(5);

console.log(t);
console.log(t[1]);

//forEach() method
t.forEach((value) => {
    console.log(value);
});

//concat() method
const t2 = t.concat(6);

console.log(t);
console.log(t2);

//map() method
const array1 = [1, 2, 3];

const returnedArray = array1.map((value) => {
    return value * 2;
});
console.log(returnedArray);

const returnedArray2 = array1.map((value) => {
    return '<li>' + value + '</li>';
});
console.log(returnedArray2);

//destructuring assignment
const array2 = [5, 6, 7, 8, 9];

const elem1 = array2[0];
const elem2 = array2[1]
const elem3 = array2[2]

console.log(elem1, elem2, elem3);

//destructuring
const [first, second, third] = array2;
console.log(first, second, third);

//...rest
const [item1, item2, ...rest] = array2;
console.log(item1, item2);
console.log(rest);

//Objects::::::::::::::

const obj = {
    name: 'Jewel',
    languages: ['JavaScript', 'Html', 'CSS'],
    stack: {
        frontend: 'ReactJS',
        backend: 'NodeJS'
    },
    age: 25
};

console.log(obj.name);
const newProp = 'age';
console.log(obj[newProp]);
console.log(obj);

obj.current = 'ReactJS';
obj['next'] = 'NodeJs';
obj['address details'] = 'Dhaka';
console.log(obj);


//Functions:::::::::::

const sum = (n1, n2) => {
    console.log(n1);
    console.log(n2);
    
    return n1 + n2;
};

const result = sum(5, 2);
console.log(result);

const square = n => {
    console.log(n);
    
    return n * n;
};

const result2 = square(7);
console.log(result2);

const square2 = n => n * n;
console.log(square2(5));

//This form is particularly handy when manipulating arrays, e.g. using the map method:
const myArray = [100, 200, 300];
const returnedValue =myArray.map(value => value * 3);
console.log(returnedValue);


//function declaration
function product(a, b) {
    return a * b;
}

const result3 = product(250, 2);
console.log(result3);

//function expression
const average = function(a, b) {
    return (a + b) / 2;
};

const result4 = average(2, 5);
console.log(result4);


//Exercises::::::::::::::::

//Object methods and "this"::::::::::::::::::::::::::::::
console.log('Object methods and "this"::::::::::::::::::::::::::::::::::::::::::::::::::');


//Recap Udacity for REactJS:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//Lesson-1: Objects in Depth
//3.Invoking Object Methods::A Method Can Access the Object it was Called On:::::

const employee = {
    name: 'Jewel',
    age: 7,
    whatIsThis: function() {
        console.log(this);
    },
    introduce: function() {
        console.log(`My name is ${this.name}!`);
    },
    growOneYear: function() {
        this.age += 1;
        console.log('Current age: ' + this.age);
    }
};

employee.whatIsThis();
employee.introduce();
employee.growOneYear();
employee.growOneYear();

//Lesson-1 : 4.Beware of Globals::::::::::::::::::::::::::::::::::::::::::::
//Things that Belong to Objects & 'this' and Function Invocation::::
const chameleon = {
    eyes: 2,
    lookAround: function() {
        // debugger;   //using it to know the value of 'this'
        console.log(`I see you with my ${this.eyes} eyes!`);//using 'this' to retrieve a property from 'chameleon' object
    }
};
chameleon.lookAround();


function whoThis() {
    // debugger;   //using it to know the value of 'this' ****
    console.log(this);
    this.trickish = true;// using 'this' to set a property

}
whoThis();
console.log(window.trickish); //since 'window' is global object
console.log(this.trickish); //'this' refers to the 'window' object


//this and Invocation
/*note: 1.How the function is invoked determines the value of this inside the function. 
2. In the above example  .lookAround() is invoked as a method, the value of this inside of 
.lookAround() is whatever is left of the dot at invocation. 
3. Now let's compare that with the whoThis() function. Since it is called as a regular 
function (i.e., not called as an method on an object), its invocation looks like:
whoThis();  Well, there is no dot. And there is no object left of the dot. So what is the 
value of this inside the whoThis() function?
4. When a regular function is invoked, the value of this is the global window object.*/


const car = {
    numberOfDoors:  2,
    drive: function() {
        console.log(`Get in one of the ${this.numberOfDoors} doors!`);
    }
};

const letsRoll = car.drive;
letsRoll();


//Global Variables are Properties on window::::
/*Note: Every variable declaration that is made at the global level (outside of a function) 
automatically becomes a property on the window object!*/

var currentlyEating = 'Ice Cream';

console.log(window.currentlyEating);
console.log(window.currentlyEating === currentlyEating); //return true

//Globals and var, let, and const::::::::
/* Note: Only declaring variables with the var keyword will add them to the window object. 
If you declare a variable outside of a function with either let or const, it will not be 
added as a property to the window object. */

let currentlyEating2 = 'Ice Cream';

console.log(window.currentlyEating2);
console.log(window.currentlyEating2 === currentlyEating2); //return false

//Global Functions are Methods on window::::

function learnSomethingNew() {
    window.open('https://www.google.com/');
    // this.open('https://www.google.com/')
}

// learnSomethingNew();
console.log(window.learnSomethingNew === learnSomethingNew); //return true

//Avoid Globals:::::::
/*note: Counterintuitively, though, global variables and functions are not ideal. There are 
actually a number of reasons why, but the two we'll look at are: Tight coupling and Name 
collisions*/

//Tight Coupling:::
/*Tight coupling is a phrase that developers use to indicate code that is too dependent on 
the details of each other. The word "coupling" means the "pairing of two items together." In 
tight coupling, pieces of code are joined together in a way where changing one 
unintentionally alters the functioning of some other code: */

var developer = 'Ajgar';
// var myName = 'Ajgar';

function introMyself() {
    console.log(`${developer} is a JavaScript developer!`);
}

introMyself();

//Name Collisions::::::::::::
/* */

let counter = 1;

function incrementOne() {
    counter += 1;
    console.log(counter);
}

function againIncrementOne() {
    counter += 1;
    console.log(counter);
}

incrementOne();
incrementOne();

againIncrementOne();

incrementOne();

/*Note: So what should you do instead? You should write as few global variables as possible. 
Write your variables inside of the functions that need them, keeping them as close to where 
they are needed as possible. Now, there are times when you'll need to write global variables,
but you should only write them as a last resort. Excessive use of global variables is not a 
good practice.*/