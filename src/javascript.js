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
console.log('Exercises::::::::::::::::::::::::::::::::::::::::::::::::::');
