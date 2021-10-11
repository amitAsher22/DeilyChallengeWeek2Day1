
// Exercise 1 : Favorite Color
// Instructions
// let me = ["my","favorite","color","is","blue"]

// Write some simple Javascript code that will join all the items in the array above, and console.log the result.

let me = ["my","favorite","color","is","blue"]
let join = me.join(' ')
// console.log(join);
 


// Exercise 2 : Mixup
// Instructions
//1.Create 2 variables. The values should be strings. For example:
// let str1 = "mix" let str2 = "pod"
// 2.Slice out and swap the first 2 characters of the 2 strings from part 1.
// 3.Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).
// 4.Finally console.log the new concatenated string.

let str1 = "mix";
let str2 = "pod";

let characterOneStr1 = str1.charAt(0)
let characterOneStr2 = str2.charAt(0)

let removeCharactrstr1 = str1.substring(1)
let removeCharactrstr2 = str2.substring(1)

//Answer
let resultReplaceStr1 = characterOneStr1.concat('' , removeCharactrstr2) // mop
let resultReplaceStr2 = characterOneStr2.concat('' , removeCharactrstr1) // pix 

let NewConatenated = resultReplaceStr1 +' ' + resultReplaceStr2 // mod pix

// console.log(NewConatenated);

//Answer





// Exercise 3 : Calculator
// Instructions
// Make a Calculator. Follow the instructions:

// Prompt the user for the first number.
// Store the first number in a variable called num1.
// Prompt the user for the second number.
// Store the second number in a variable called num2.
// Create an Alert where the value is the SUM of num1 and num2.
// BONUS: Make a program that can subtract, multiply, and also divide!


let num1 = Number(prompt('write the -FIRST NUMBER- any number from 0 to 100'));
let num2 = Number(prompt('write the -SECOND NUMBER- any number from 0 to 100'));

////Answer
let numNumber = num1 + num2;
let numSubtract = num1 - num2;
let numMultiply = num1 * num2;
let numDivide = num1 / num2;
////Answer


