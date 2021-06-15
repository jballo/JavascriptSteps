// using 'strict'

// 10. Values and Variables

// console.log('Jonas');

// console.log("Pan");

// console.log(23);

// let firstName = "Justin";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);


// console.log(firstName + 13);

// firstName = "Matilda";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let PI = 3.1415;
// console.log(PI);

// let myFirstJob = 'SalesAssociate';
// let myCurrentJob = 'STEM Tutor';




// 2. Data Types

// console.log(true);
// console.log(false);

// let peaceful = true;

// console.log(peaceful);


// let chaotic = false;
// let name = 'Carlos';
// let age = 19;
// let height = 5.8;

// console.log(typeof(chaotic));
// console.log(typeof(name));
// console.log(typeof(age));
// console.log(typeof(height));

// chaotic = 'nobody';
// console.log(typeof(chaotic));
// console.log(typeof chaotic);

// let year;
// console.log(typeof year);

// age = year;

// console.log(typeof age);


// // console.log(typeof null);            //javascript error




//3. let, const and var

// let age = 30;
// console.log(age);

// age = 50;
// console.log(age);


// const birthYear = 1999;
// console.log(birthYear);

// // birthYear = 7;       CANNOT CHANGE A CONST

// var job = 'STEM Tutor';         //var if function scoped compared to let is block scoped
// job = 'Assistant';


// // lastName = "Schmedtmann";       //global
// // console.log(lastName);          //global





// 4. Basic Operators
// const now = 2025;
// const agePete =now - 1991;
// const ageReb = now- 2001;
// console.log(agePete, ageReb);

// console.log(agePete * 2, ageReb / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2


// const firstName = 'Jonas';
// const lastName = 'Smith';

// console.log(firstName + ' ' + lastName);

// // Assignment operators
// let x = 10 + 5;
// x+= 27;         // x= x + 27;
// x += 3;         // x = x + 3;
// x++;            // x = x + 1;

// x--;            // x = x -1;
// x--;

// console.log(10 + 5);
// console.log(x);

// // Comparison operators
// console.log(ageReb > agePete);          // <=, >=. >, <
// console.log(agePete >= 18);

// console.log( now - 1991 > now - 2001);      




// 5. Operator Precedence

// check MDN Documents to check ALL precedence

// 1. Math op
// 2. Bitwise
// 3.  compare op
// 4. equatilty comp op


let x, y;
x = y = 25 - 10 - 5;            // x = y = 10, x = 10

console.log(x, y);

let justin = 20;
let rebecca = 21;

console.log( (justin + rebecca) /2);        //add paranthesis just in case you want to declare precedence


// 6. 