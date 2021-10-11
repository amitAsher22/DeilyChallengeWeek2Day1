

// Exercise 1 : Find Nemo
// Instructions
// Ask the user to give you a sentence containing the word “Nemo”. For example "I love the movie named Nemo !"
// Find the word “Nemo”
// Console.log a string as follows: "I found Nemo at [the position of the word Nemo]!".
// Bonus : If you can’t find Nemo, console.log “I can’t find Nemo”.
// Hint : use an if/else statement


let sentenceWithNemoFromUser = prompt("write please sentence containing the word “Nemo”");

let Nemo = Number(sentenceWithNemoFromUser.search("Nemo"))
let LengthSentence = sentenceWithNemoFromUser.length



if(Nemo === -1 ){
    console.log('I can’t find Nemo');
}else if (Nemo <= LengthSentence){
    console.log(`I found Nemo at [the position containing the word is : ${Nemo}]`);
}