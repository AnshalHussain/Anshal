// Chapter 23 - 25

// Question 1
const word1 = "Pakistani";
const index1 = word1.indexOf("n");
console.log("String:", word1);
console.log("Index of 'n':", index1);

// Question 2
const word2 = "Hello World";
const lastIndex = word2.lastIndexOf("l");
console.log("String:", word2);
console.log("Last index of 'l':", lastIndex);

// Question 3
const word3 = "Pakistani";
const char = word3.charAt(3);
console.log("String:", word3);
console.log("Character at index 3:", char);

// Question 4
const firstName = prompt("Enter your first name:");
const lastName = prompt("Enter your last name:");
const fullName = firstName.concat(" ", lastName);
console.log("Full name:", fullName);

// Question 5
const city = "Hyderabad";
const replacedCity = city.replace("Hyder", "Islam");
console.log("City:", city);
console.log("After replacement:", replacedCity);

// Question 6
const message = "Ali and Sami are best friends. They play cricket and football together.";
const replacedMessage = message.replace(/and/g, "&");
console.log("Message:", message);
console.log("After replacement:", replacedMessage);

// Question 7
const strNum = "472";
console.log("Value:", strNum, "Type:", typeof strNum);
const convertedNum = Number(strNum);
console.log("Value:", convertedNum, "Type:", typeof convertedNum);

// Question 8
const userInput4 = prompt("Enter something in lowercase:");
console.log("User input:", userInput4);
console.log("Upper case:", userInput4.toUpperCase());

// Question 9
const userInput5 = prompt("Enter a number with decimal (e.g. 35.36):");
const withoutDot = userInput5.replace(".", "");
console.log("Number:", userInput5);
console.log("Result:", withoutDot);               

// Chapter 26–30 

// Question 1
const num1 = +prompt("Enter a positive integer:");
console.log("number:", num1);
console.log("round off value:", Math.round(num1));
console.log("floor value:", Math.floor(num1));
console.log("ceil value:", Math.ceil(num1));

// Question 2
const num2 = +prompt("Enter a negative floating point number:");
console.log("number:", num2);
console.log("round off value:", Math.round(num2));
console.log("floor value:", Math.floor(num2));
console.log("ceil value:", Math.ceil(num2));

// Question 3
const num3 = +prompt("Enter a number:");
console.log("The absolute value of", num3, "is", Math.abs(num3));

// Question 4
const dice = Math.floor(Math.random() * 6) + 1;
console.log("random dice value:", dice);

// Question 5
const coin = Math.floor(Math.random() * 2) + 1;
if (coin === 1) {
  console.log(coin, "random coin value: Tails");
} else {
  console.log(coin, "random coin value: Heads");
}

// Question 6
const randomNum = Math.floor(Math.random() * 100) + 1;
console.log("random number between 1 and 100:", randomNum);

// Question 7
const weightInput = prompt("Enter your weight in kilograms:");
const weight = parseFloat(weightInput);
console.log("The weight of user is", weight, "kilograms");

// Question 8
const secretNum = Math.floor(Math.random() * 10) + 1;
const guess = +prompt("Enter a number between 1 and 10:");
if (guess === secretNum) {
  alert("Congratulations! You guessed the secret number.");
} else {
  alert("Try again! The secret number was " + secretNum);
}