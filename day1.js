// Day 1 excesise

// 1. Write a single line comment which says, comments can make code readable
      //comments can make code readable

// 2. Write another single comment which says, Welcome to learn Javascript
// Welcome to learn Javascript

// 3. Write a multiline comment which says, comments can make code readable, easy to reuse and informative
   /*comments can make code readable, easy to reuse and informative */

// 4. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types
   
// string
 let a="Preethika";
 
// // number
 let b = 3;

// //  boolian
 let s = true;

// //  undefine
 let d 

// null
 //let f= 


//6. Create datatypes.js file and use the JavaScript typeof operator to check different data types. Check the data type of each variable
var fruit ="banana";
console.log(typeof fruit);

//7. Declare four variables with assigned values
var stringVariable="happy";
var numberVarible=5;
var booleanVarible=true;
var arrayVarible=[1,2,3];
console.log(stringVariable);
console.log(numberVarible);
console.log(booleanVarible);
console.log(arrayVarible);

//8. Declare variables to store your first name, last name, marital status, country and age in multiple lines

var firstName="Preethika";
var lastName="Thavanesan";
var maritalStatus="Single";
var country="Sri Lanka";
console.log(firstName);
console.log(lastName);
console.log(maritalStatus);
console.log(country);

// 9. Declare variables to store your first name, last name, marital status, country and age in a single line

var person={
      frstName:"Preethi",
      lastName:"Thavanesan",
      maritalStatus:"Single",
      age:22,
  }
  console.log(person);
  
// 10. Declare two variables myAge and yourAge and assign them initial values and log to the browser console.

var myAge=22;
var yourAge=55;
console.log(myAge);
console.log(yourAge);

















// Day 2 Exercise

var challenge = 'learn Javascript';

console.log(challenge);

console.log(challenge.length);   //16

console.log(challenge.toUpperCase());   //LEARN JAVASCRIPT

console.log(challenge.toLowerCase());  //learn javascript

var slicedPhrase = challenge.substring(6);
console.log(slicedPhrase);                      //javascript

var challenge = 'learn Javascript';
var array = challenge.split(' ');           //(2) ['learn', 'Javascript']
console.log(array);

var challenge = 'learn Javascript';
var array = challenge.split(' ');           //(2) ['learn', 'Javascript']
console.log(array);

var companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
var companiesArray = companiesString.split(', ');
console.log(companiesArray);                         //["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]


var challenge = 'learn Javascript';
var newChallenge = challenge.replace('Javascript', '30 Days Of Python');
console.log(newChallenge);                    //learn 30 Days Of Python

var challenge = 'learn Javascript';
var cha = challenge.charAt(15);
console.log(cha);                    //t


var challenge = 'learn Javascript';
var char = challenge.charCodeAt(6);
console.log(char);                       //74


var challenge = 'learn Javascript';
var position = challenge.indexOf('a');
console.log(position);                      //2


var challenge = 'learn Javascript';
var lastPosition = challenge.lastIndexOf('a');
console.log(lastPosition);                 //9



var sentence = 'You cannot end a sentence with because because because is a conjunction';
var positionOfBecause = sentence.indexOf('because');
console.log('Position of the first "because" is at index:', positionOfBecause);

var sentence = 'You cannot end a sentence with because because because is a conjunction';
var lastPositionOfBecause = sentence.lastIndexOf('because');
console.log('Position of the last "because" is at index:', lastPositionOfBecause);

var sentence = 'You cannot end a sentence with because because because is a conjunction';
var positionOfBecause = sentence.search(/\bbecause\b/);
console.log('Position of the first "because" is at index:', positionOfBecause);

var str = ' learn Javascript ';
var trimmedStr = str.trim();
console.log(trimmedStr);

var str = 'learn Javascript';
var result = str.startsWith('learn');
console.log(result); 

var str = 'learn Javascript';
var result = str.endsWith('Javascript');
console.log(result); 

var str = 'learn Javascript';
var matches = str.match(/a/g);
console.log(matches);

var firstPart = '30 Days of ';
var secondPart = 'JavaScript';
var mergedString = firstPart.concat(secondPart);
console.log(mergedString);

var str = 'learn Javascript';
var repeatedString = str.repeat(2);
console.log(repeatedString);

var firstString = '30 Days of ';
var secondString = 'JavaScript';
var mergedString = firstString.concat(secondString);
console.log(mergedString);

var message = 'learn JavaScript ';
var repeatedMessage = message.repeat(2);
console.log(repeatedMessage); 











