//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/
// let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
// let dog_names = ["Max","HAS","PuRple","dog"]

// function findWords(){
//     //Your code goes here
// }

//Call method here with parameters

const findWords = (dogString, dogNames) => {
  let myArray = dogString.replaceAll(',','').split(" ");
  for(let name of myArray){
    console.log(name)
  }

  for(let dogName of dogNames){
    if (myArray.includes(dogName)){
      return `Matched ${dogName}`;
    }
  }
  return "No Match"
};

let dog_string = "Hello Rusty, my name is Dog, and I have purple eyes!";
let dog_names = ["Max", "HAS", "PuRple", "dog"];

console.log(findWords(dog_string, dog_names));



//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let givenArr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let counter = 0; counter < arr.length; counter++){
      if(counter % 2 == 0){
        arr.splice(counter, 1, "even index")
      }
    }
    return arr
}

console.log(replaceEvens(givenArr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]



//============Codewars Exercise #1 ============//
// Create a function that takes an integer as an argument and returns 
//"Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(evenOrOdd(7))

//============Codewars Exercise #2 ============//
/* Complete the function which takes two arguments and returns
 all numbers which are divisible by the given divisor. First argument
  is an array of numbers and the second is the divisor.*/

function divisibleBy(numbers, divisor) {
  let nums = [];
  for (num of numbers) {
    if (num % divisor == 0) {
      nums.push(num);
    }
  }
  return nums;
}

console.log(divisibleBy([1,2,3,4,5,6,7], 3))