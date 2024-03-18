// JavaScript has 8 Datatypes
// 1.String
// 2.Number
// 3.Bigint
// 4.Boolean
// 5.Undefined
// 6.Null
// 7.Symbol
// 8.Object

// The Object Datatype
//The object data type can contain:

// 1.An object
// 2.An array
// 3.A date write they function

// OPERATORS

//The Assignment Operator = assigns values

//The Addition Operator + adds values

//The Multiplication Operator * multiplies values

//The Comparison Operator > compares values

// //Operator    ////Description
// +	            //Addition
// -	           //Subtraction
// *	          //Multiplication
// **	       //Exponentiation (ES2016)
// /	        //Division
// %	       //Modulus (Division Remainder)
// ++	    //Increment
// --	   //Decrement

// // Creating an array
// let fruits = ["Apple", "Banana", "Orange"];

// // Accessing elements
// console.log(fruits[0]); // Output: "Apple"
// console.log(fruits[1]); // Output: "Banana"
// console.log(fruits[2]); // Output: "Orange"

// let numbers = [1, 2, 3, 4, 5];

// // Adding elements
// numbers.push(6); // Adds 6 to the end: [1, 2, 3, 4, 5, 6]
// numbers.unshift(0); // Adds 0 to the beginning: [0, 1, 2, 3, 4, 5, 6]

// // Removing elements
// numbers.pop(); // Removes the last element: [0, 1, 2, 3, 4, 5]
// numbers.shift(); // Removes the first element: [1, 2, 3, 4, 5]

// // Modifying elements
// numbers[0] = 10; // Modifies the first element to 10: [10, 2, 3, 4, 5]

// console.log(numbers); // Output: [10, 2, 3, 4, 5]

// let arrayMethods = {
//     push: function() { /* Adds one or more elements to the end of an array and returns the new length of the array. */ },
//     pop: function() { /* Removes the last element from an array and returns that element. */ },
//     shift: function() { /* Removes the first element from an array and returns that element. */ },
//     unshift: function() { /* Adds one or more elements to the beginning of an array and returns the new length of the array. */ },
//     concat: function() { /* Combines two or more arrays and returns a new array. */ },
//     slice: function() { /* Returns a shallow copy of a portion of an array into a new array selected from begin to end (end not included). */ },
//     splice: function() { /* Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. */ },
//     forEach: function() { /* Executes a provided function once for each array element. */ },
//     map: function() { /* Creates a new array populated with the results of calling a provided function on every element in the calling array. */ },
//     filter: function() { /* Creates a new array with all elements that pass the test implemented by the provided function. */ },
//     reduce: function() { /* Executes a reducer function on each element of the array, resulting in a single output value. */ },
//     sort: function() { /* Sorts the elements of an array in place and returns the sorted array. */ }
// x    // The length property provides an easy way to append a new element to an array:
// };

// Here's a shortened version of the descriptions for each method:

// push: Adds element(s) to end, returns new length.
// pop: Removes last element, returns it.
// shift: Removes first element, returns it.
// unshift: Adds element(s) to start, returns new length.
// concat: Combines arrays, returns new array.
// slice: Copies portion of array.
// splice: Modifies array by adding/removing elements.
// forEach: Executes function for each element.
// map: Executes function for each element, returns new array.
// filter: Returns elements passing condition.q
// reduce: Applies function to reduce array to single value.
// sort: Sorts array elements.
// Let me know if you need further assistance!

let arkin = ["arkin", "roma"];
let roma = ["mers", "chert"];
let erke = arkin.concat(roma);
console.log(erke);
