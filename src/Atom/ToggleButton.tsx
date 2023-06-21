import { atom, Atom } from "@mongez/react-atom";

export const toggleButtons: Atom<any> = atom({
  key: "buttons",
  default: {
    displaySidebar: true,
    displayPost: true,
  }
});

// function reverse(array) {
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(array[-i])
    
//   }
// }

// const array = [1, 2, 3, 4, 5];

// console.log(reverse(array)) // [5, 4, 3, 2, 1]

// function isItOdd(number) {
//   if (typeof number != "number") {
//     return "sorry function  must accept only numbers";
//   }
//   return number % 2 === 0 ? false : true;
// }
// console.log(isItOdd(3))



// function middleCharacter(string) {

//   if(typeof string != "string"){
//     return "this not String - please Inter String"
//   }
//   else{
//     if (string.length % 2 === 0) {
//       return string.charAt(string.length / 3) + string.charAt(string.length / 2);
//     } else {
//       return string.charAt(string.length / 2);
//     }
//   }


 
// }

// console.log(middleCharacter("Hello")); // l
// console.log(middleCharacter("World")); // r
// console.log(middleCharacter("Hassan")); // ss
// console.log(middleCharacter("greeting")); // et
// function firstNonRepeatedString(string, character) {

//   if(typeof string != string || typeof character != string ){
//     throw new Error('Parameter is not a number!');

//   }
//   else{
//     const ArrayString = string.split("");
//     for (let i = 0; i < ArrayString.length; i++) {
  
//       if (ArrayString[i] === character) {
//         return ArrayString.indexOf(character);
//       } else {
//         return -1;
//       }
//     }
//   }
  
// }
// console.log(firstNonRepeatedString(12, "g")); // 11
// function firstNonRepeatedString(string, character) {
//   if (typeof string != string && typeof character != string) {
//     // throw new Error('Parameter is not a string!');

//   } else {
//     const ArrayString = string.split("");
//     for (let i = 0; i < ArrayString.length; i++) {
//       if (ArrayString[i] === character) {
//         return ArrayString.indexOf(character);
//       } else {
//         return -1;
//       }
//     }
//   }
// }
// console.log(firstNonRepeatedString("dddfffeessseggg", "g")); // 1
// function isNumeric(value) {

//   if(typeof value != "string" && typeof value != "number"){
//     throw new Error('Parameter is not a number or string');


//   }else{
//     const arrOfDigits = Array.from(String(value), Number);
//     for (let i = 0; i < arrOfDigits.length; i++) {
//       if (isNaN(arrOfDigits[i])) {
//         return false;
//       }
//     }
  
//     return true;
//   }

// }

// console.log(isNumeric(455));

// function firstNonRepeatedString(string, character) {
//   if (typeof string != "string" && typeof character != "number") {
//     throw new Error("Parameter is not a string!");
//   } else {
//     const ArrayString = string.split("");
//     for (let i = 0; i < ArrayString.length; i++) {
//       if (ArrayString[i] === character) {
//         return ArrayString.indexOf(character);
//       } else {
//         return -1;
//       }
//     }
//   }
// }
// console.log(firstNonRepeatedString("dddfffeessseggg", "g")); //

// let myVariable = 45;
// console.log(typeof myVariable); 