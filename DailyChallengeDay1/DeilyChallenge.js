
// Exercise 1:

// let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
// 1.Remove Banana from the array.
// 2.Sort the array in alphabetical order.
// 3.Add “Kiwi” to the end of the array.
// 4.Remove “Apples” from the array. Don’t use the same method as in part 1.
// 5.Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. 
// [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
// At the end you should see this outcome:
// ["Kiwi", "Oranges", "Blueberries"]

/// origin array
let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

// chang array 
let fruits2 = ["Banana", "Apples", "Oranges", "Blueberries"];
let Banana = fruits2.shift()
let removeBanana = fruits2

// console.log(removeBanana);

// chang array 
let fruits3 = ["Banana", "Apples", "Oranges", "Blueberries"];

let sortArray = fruits3.sort();

// console.log(sortArray);

// chang array 
let fruits4 = ["Banana", "Apples", "Oranges", "Blueberries"];

 fruits4.push("Kiwi")
// console.log(fruits4);

// chang array 
let fruits5 = ["Banana", "Apples", "Oranges", "Blueberries"];

fruits5.splice(1 ,1)

// console.log(fruits5);





// //////////////////////////////////////////////////////////////////////////////////////////////


// Exercise 2:


// let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// Access and then console.log “Oranges”.

let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]]
 let Oranges = moreFruits[1][1]

// console.log(Oranges);
