const printReturnedExpected = (expected, returned) => {
    console.log("Expected: ", expected, " got: ", returned);
}

const example1 = [1, 2, 3, 4, 5, 6];

/**
 * Exercise 1
 * @param {number[]} values 
 * @param {number} number 
 * @returns {number[]} array values which are greater than number
 */


//MY SOLUTION
console.log("My 1st Exercise Solution:");
function greaterThan(arr, number) {
    return arr.filter((val) => {
        return val > number;
    });
}

let newArr = greaterThan([ 1, 2, 3, 4, 5, 6 ], 2);
console.log(newArr);


console.log("greaterThan");
printReturnedExpected(example1, greaterThan(example1, 0));
printReturnedExpected([4, 5, 6], greaterThan(example1, 3));
printReturnedExpected([], greaterThan(example1, 7));
console.log("-------------------------------------------------");


/**
 * Exercise 2
 * @param {number[]} values 
 * @param {number} number 
 * @returns {number[]} Array where each value has been incremented by number
 */

function plusValue(arr, number) {
    return arr.map( val => val + number );
 }
 
 console.log("My 2nd Exercise Solution:");
 console.log(plusValue([1,2,3,4],3));
 
 

console.log("plusValue");
printReturnedExpected(example1, greaterThan(example1, 0));
printReturnedExpected(example1, plusValue(example1, 0));
printReturnedExpected([2, 3, 4, 5, 6, 7], plusValue(example1, 1));
printReturnedExpected([0, 1, 2, 3, 4, 5], plusValue(example1, -1));
console.log("-------------------------------------------------");


/**
 * Exercise 3
 * 
 * @param {number[]} values 
 * @returns {number} Sum of all values
 * */
function sumReduce(arr) {
    return arr.reduce((acc, next) => acc += next , 0);
}

console.log("My 3rd Exercise Solution:");
console.log(sumReduce([2,3,4,5]));
 

console.log("sumReduce");
printReturnedExpected(0, sumReduce([5, -5]));
printReturnedExpected(10, sumReduce([5, 5]));
printReturnedExpected(0, sumReduce([])); //You might need to set the initial value for this
console.log("-------------------------------------------------");

/**
 * Exercise 4
 * Write a function which returns a Promise, which resolves to `text` after `milliseconds` of time has passed. 
 * More info on Promise: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * @param {string} text 
 * @param {number} milliseconds
 * @returns {Promise} A promise that will resolve to text after <time> seconds
 * */
function returnInXSeconds(text, milliseconds) {
    let promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(text);
        }, milliseconds);
      });

      promise1.then((text) => {
        console.log(text);
      });
}
console.log("My 4th Exercise Solution:");
returnInXSeconds("Hello world", 2000);
/* UNCOMMENT THIS when you want to test this function 
const text = "This is text";
const milliseconds = 1000;
console.log("'" + text + "'" + " should be printed after " + milliseconds + " milliseconds.");
returnInXSeconds(text, milliseconds)
    .then(console.log);
console.log("-------------------------------------------------");
*/
