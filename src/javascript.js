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

//Creating Objects:::

//Using literal notation:
const myObject = {};

// Using the Object() constructor function:
const myObject1 = new Object();


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

//Lesson-1 : 5.Extracting Properties and Values::::::::::::::::::::::::::::::::::::::::

//Object Methods:::::::

const myNewObject = new Object();
console.log(myNewObject); //an empty object

/*The Object() function actually includes a few methods of its own to aid in the development 
of your applications. These methods are: Object.keys() and Object.values()*/


//Object.keys() and Object.values()::::::::
/*At its core, an object is just a collection of key/value pairs. if we want to extract only 
the keys from an object? */

const stack = {
    frontend: 'ReactJs',
    backend: 'NodeJs',
    fullstack: 'MERN',
    courses: 3,
    obj: {}
};
console.log(stack);

//1st approach
// iterate through an object and extract keys from an object
for(let key in stack) {
    // console.log(key);
    console.log(`${key} : ${stack[key]}`);
}

const keysArray =[];
for(let key in stack) {
    keysArray.push(key);
}
console.log(keysArray);

const valuesArray =[];
for(let key in stack) {
    const value = stack[key];
    valuesArray.push(value);
}
console.log(valuesArray);

//2nd approach
/*Object.keys() is given an object, it extracts just the keys of that object, then returns 
those keys in an array: */
const keys = Object.keys(stack);
console.log(keys);

/*Likewise, if we want a list of the values of an object, we can use Object.values(): */
const values = Object.values(stack);
console.log(values);


//Lesson-2 : Functions at Runtime::::::::::::::::::::::::::::::::::::::::::

// 2.First-Class Functions::::::::::::::::::::::::::::
//Functions are First-Class Functions:::
/*In JavaScript, functions are first-class functions. This means that you can do with a 
function just about anything that you can do with other elements, such as numbers, strings, 
objects, arrays, etc. JavaScript functions can: a.Be stored in variables, b.Be returned from 
a function. c.Be passed as arguments into another function

Note that while we can, say, treat a function as an object, a key difference between a 
function and an object is that functions can be called (i.e., invoked with ()), while 
regular objects cannot.*/

//a.Functions can Be stored in variables
//function expression
const myFunction = function howdy(n1, n2) {
    return (n1 +n2 ) / 2;
}

console.log(myFunction(4, 5));
console.log(myFunction.length); //we can access length property on function(just like array's length and array is an object)
console.log(myFunction.name);//we can access name property on function


//function declaration
function average1(n1, n2) {
    return (n1 + n2) / 2;
}

console.log(average(4, 2));
console.log(average.length); //we can access length property on function (just like array's length and array is an object)
console.log(average.name);//we can access name property on function

/*NOTE: So it turns out we can access properties on function just like object , because in 
Javascript functions are first-class object */


//b.Functions can Be returned from a function
//Functions Can Return Functions
/*Recall that a function must always return a value.  a function will always return just one 
value. we can treat a function as a value. and just as easily return a function from another 
function!*/

/*higher-order function:  A function that returns another function is known as higher-order 
function. */

function alertThenReturn() {
    alert('Message 1!');

    return function() {
        alert('Message 2!');
    }
}

// const innerFunction = alertThenReturn();
// innerFunction();

/* invoked immediately without being stored in a variable. */
// alertThenReturn()();


//3.Callback Functions:::::
//c. Functions can Be passed as arguments into another function
/*A function that takes other functions as arguments (and/or returns a function) is known as 
a higher-order function. A function that is passed as an argument into another function is 
called a callback function.*/
function callAndAdd(n, callback) {
    return n + callback();
}

function returnsThree() {
    return 3;
}

console.log(callAndAdd(700, returnsThree));


//Array Methods:::

//a)forEach()

function logIfOdd(n) {
    if(n % 2 !== 0) {
        console.log(`${n} is odd!`);
    } else {
        console.log(`${n} is even!`);
    }
}

logIfOdd(100);
logIfOdd(99);

[1, 5, 2, 4, 6, 3].forEach(function logIfOdd(n) {
    if(n % 2 !== 0) {
        console.log(`${n} is odd!`);
    } else {
        console.log(`${n} is even!`);
    }
});

//another way
[1, 5, 2, 4, 6, 3].forEach(function(n) {
    if(n % 2 !== 0) {
        console.log(`${n} is odd!`);
    } else {
        console.log(`${n} is even!`);
    }
});

//another way
[101, 55, 22, 444, 66, 33].forEach(logIfOdd);


//b)map()
const names = ['Mohammad', 'Karim', 'Jewel'];

const nameLengths = names.map(function(name) {
    return name.length;
});

console.log(nameLengths);

/*Note: Remember that the key difference between forEach() and map() is that forEach() 
doesn't return anything, while map() returns a new array with the values that are returned 
from the function. Again, it is important to understand that the map() method returns a new 
array; it does not modify the original array.*/


//c)filter():

const namesArray = ['David', 'Richard', 'Veronika'];

const shortNames = namesArray.filter(function(name) {
    return name.length > 6;
});

console.log(shortNames);

/*Note: The difference is that the function passed to filter() is used as a test, and only 
items in the array that pass the test are included in the new array.  */


//Lesson-2: 4. Scope::::::::::::::::::::::::
/*A function's runtime scope describes the variables available for use inside a given 
function. The code inside a function has access to: a.The function's arguments. b.Local 
variables declared within the function. c.Variables from its parent function's scope. 
d.Global variables.*/

const teacher = 'Ajgar'; //global variable in global scope

function giveIntro() {
    const you = 'student'; //local variable inside parent's function scope

    function introduce() {
        console.log(`Hey ${you}, I am ${teacher}`);
    }
    return introduce();
}

giveIntro();

//JavaScript is Function-Scoped:::
/*This is all because variables in JavaScript are traditionally defined in the scope of a 
function, rather than in the scope of a block. Since entering a function will change scope, 
any variables defined inside that function are not available outside of that function. On 
the other hand, if there are any variables defined inside a block (e.g., within an if 
statement), those variables are available outside of that block. Let's see an example of how 
function-scoping in JavaScript works:*/

var globalNumber = 5;

function globalIncrementer() {
    const localNumber = 10;

    globalNumber += 1;
    return globalNumber;
}

console.log(globalIncrementer());
console.log(globalIncrementer());
console.log(globalIncrementer());

/*After calling the function a few times, we see that the value of globalNumber has indeed 
increased each time. However, when attempting to access localNumber outside of the function, 
we see an error: */

// console.log(localNumber);

/*Because JavaScript is function-scoped, functions have access to all its own variables as 
well as all the global variables outside of it */

//Block-Scoping:::
/*ES6 syntax allows for additional scope while declaring variables with the let and const 
keywords. These keywords are used to declare block-scoped variables in JavaScript, and 
largely replace the need for var */

//ES6- Lesson-1: 2.Let and Const
/*when using var can get us into trouble. */

function getClothing(isCold) {
    if(isCold) {
        var freezing = 'Grab a jacket!';
    } else {
        var hot = 'It’s a shorts kind of day.';
        console.log(freezing);  //return undefined
    }
}

getClothing(false);

/*Hoisting
Hoisting is a result of how JavaScript is interpreted by your browser. Essentially, before 
any JavaScript code is executed, all variables declared with var are "hoisted", which means 
they're raised to the top of the function scope */

//let and const::
/*Variables declared with let and const eliminate this specific issue of hoisting because 
they’re scoped to the block, not to the function. Previously, when you used var, variables 
were either scoped globally or locally to an entire function scope */

function solvedGetClothing(isCold) {
    if(isCold) {
        let freezing = 'Grab a jacket!';
    } else {
        let hot = 'It’s a shorts kind of day.';
        console.log(freezing);  //return Uncaught ReferenceError:  freezing is not defined
    }
}

// solvedGetClothing(false);

/*This behavior prevents variables from being accessed only until after they’ve been 
declared. Above output throws an error Because freezing is not declared inside the else 
statement, the function scope, or the global scope, a ReferenceError is thrown.*/


//Scope Chain:::
/*Whenever your code attempts to access a variable during a function call, the JavaScript 
interpreter will always start off by looking within its own local variables. If the variable 
isn't found, the search will continue looking up what is called the scope chain. Let's take 
a look at an example: */

const globe = 'Mountain';
function one() {
    console.log('I am one! ' + globe + ' from global scope!');
    two();
    function two() {
        three();
        function three() {
            console.log('I am three!');
        }
    }
}

one();


//Variable Shadowing:::
/*What happens when you create a variable with the same name as another variable somewhere 
in the scope chain? In fact, the variable with local scope will just temporarily "shadow" 
the variable in the outer scope. This is called variable shadowing. */

const currency = 'USD';

function displayPrice(price) {
    const currency = 'BDT';

    console.log(`${currency} ${price}`);
    
}

displayPrice(700); // BDT 700



//Lesson - 2: 5- Closures:::

//block scope vs function scope with scope chain:::
const num = 1;
function check() {
    // const num = 1;
    if(num === 1) {
        // const num = 2;
        console.log(num);
    }
}
check();


/*The process of a function retaining access to its scope is called a closure. */
function remember(number) {
    return function() {
        return number;
    }
}

const returnedFunction = remember(5);
console.log(returnedFunction());

/*MDN defines a closure as: "the combination of a function and the lexical environment 
within which that function was declared." */

//Creating a Closure:::
/*Every time a function is defined, closure is created for that function. Strictly speaking, 
then, every function has closure! This is because functions close over(capture) at least one 
other context along the scope chain: the global scope.  it is important to note that a 
function maintains a reference to its parent's scope. If the reference to the function is 
still accessible, the scope persists!*/

//Closures and Scope:::
const devName = 'Jewel'; //global scope

function displayStack() { //function scope & global scope create a lexical environment  using closure function can retain scope or maintain scope chain 
    const stack = 'Javascript Developer';
    function inner() { //it retains its scope & hold a reference from its parent function scope by closure
        // debugger; //check closure in dev tool
        return `I am a ${stack}.`;
    }
    return inner();
}

console.log(displayStack());

/*more details see udacity */



//Lesson-2 : 6.Immediately-Invoked Function Expressions (IIFE)

//function declaration
function returnHello() {
    return 'Hello';
}

console.log(returnHello());

//function expression

//anonymous
const myFunc1 = function() {
    return 'Hello';
}

console.log(myFunc1());

//named
const myFunc2 = function returnHello() {
    return 'Hello';
}

console.log(myFunc2());

//Immediately-Invoked Function Expressions: Structure and Syntax
(function greet() {
    console.log('Hello there!');
})();

//Passing Arguments into IIFE's
(function(name) {
    console.log(`My name is ${name}`);
})('Ajgar');

(function(x, y) {
    console.log(x * y);
})(3, 5);

//IIFE's and Private Scope
const myFunction = (
    function() {
        const hi = 'Hi';

        return function() {
            console.log(hi);
        }
    }
)();

myFunction();// ei function chaile return func ke use korte parbe kintu modify korte parbe na karon eta totally private scope eta ke bahir theke access somvob na 

//Alternative Syntax for IIFE's
(function myFunction() {
    const hello = 'Hello';
        console.log(`${hello} there!`);
}());


const button = document.getElementById('button');

button.addEventListener('click', (function() {
    let count = 0;

    return function() {
        count += 1;

        if(count === 2) {
            alert('This alert appears every other clicks!');
            count = 0;
        }
    }
})());


//Lesson-3: Classes and Objects::::::::::::::::::::::::::::::::::::::::

//Lesson-3: 1.Intro

// an object can represent data and functionality:::
/*An object can represent data and functionality. objects can have properties to represent 
attributes or characteristics, as well as methods to represent actions that can be 
performed. */

//Lesson-3: 2.Constructor Functions

//Structure and Syntax
function SoftwareDeveloper() {
    this.favoriteLanguage = 'JavaScript';
}

//Creating a New Object
const developer = new SoftwareDeveloper();
console.log(developer);

//Creating Multiple Objects
const engineer = new SoftwareDeveloper();
console.log(engineer);
const programmer = new SoftwareDeveloper();
console.log(programmer);

//Constructor Functions Can Have Parameters
function SoftwareDeveloper2(name) {
    this.favoriteLanguage = 'JavaScript';
    this.name = name;
}

const instructor = new SoftwareDeveloper2('Jewel');
console.log(instructor);
const trainer = new SoftwareDeveloper2('Ajgar');
console.log(trainer);

function Hero(name, role) {
    this.name = name;
    this.role = role;

    this.introduce = function() {
        console.log(`My name is ${this.name} and I am a ${this.role}.`);
    }
}

const kohinoor = new Hero('Kohinoor', 'Mother');
console.log(kohinoor);
kohinoor.introduce()

const gafur = new Hero('Abdul Gafur', 'Father')
console.log(gafur);
gafur.introduce();

//Omitting the new Operator
let coder = SoftwareDeveloper2('Najir');
console.log(coder);
 
//Seeing the Object's Constructor (instanceof)
function Developer(name) {
    this.name = name;
}

const dev = new Developer('Hossain');
console.log(typeof dev);
console.log(dev instanceof Developer);