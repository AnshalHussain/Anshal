// Chapter 35-38
// Question 1
function showDateTime() {
  console.log(new Date());
}
showDateTime();

// Question 2
function greetUser(firstName, lastName) {
  console.log("Hello " + firstName + " " + lastName);
}
greetUser("Ali", "Khan");

// Question 3
function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(5, 7));

// Question 4
function calculator(num1, num2, operator) {
  if (operator === "+") return num1 + num2;
  if (operator === "-") return num1 - num2;
  if (operator === "*") return num1 * num2;
  if (operator === "/") return num1 / num2;
  return "Invalid Operator";
}
console.log(calculator(10, 5, "+"));

// Question 5
function square(num) {
  return num * num;
}
console.log(square(6));

// Question 6
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));

// Question 7
function countNumbers(start, end) {
  for (let i = start; i <= end; i++) {
    console.log(i);
  }
}
countNumbers(1, 5);

// Question 8
function calculateHypotenuse(base, perpendicular) {
  function calculateSquare(x) {
    return x * x;
  }
  return Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
}
console.log(calculateHypotenuse(3, 4));

// Question 9
function areaRectangle(width, height) {
  return width * height;
}
console.log(areaRectangle(5, 10));

// Question 10
function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPalindrome("madam"));

// Question 11
function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalizeWords("the quick brown fox"));

// Question 12
function longestWord(str) {
  let words = str.split(" ");
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}
console.log(longestWord("Web Development Tutorial"));

// Question 13
function countLetter(str, letter) {
  let count = 0;
  for (let ch of str) {
    if (ch === letter) count++;
  }
  return count;
}
console.log(countLetter("JSResourceS.com", "o"));

// Question 14
function calcCircumference(radius) {
  let circumference = 2 * Math.PI * radius;
  console.log("The circumference is " + circumference);
}
function calcArea(radius) {
  let area = Math.PI * radius * radius;
  console.log("The area is " + area);
}
calcCircumference(5);
calcArea(5);
//   Chapter 38 - 44

// Question 1
function power(a, b) {
    let result = 1;
    for (let i = 1; i <= b; i++) {
        result *= a;
    }
    return result;
}
console.log("Q1:", power(2, 3)); // 8

// Question 2
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    return false;
}
console.log("Q2:", isLeapYear(2024)); // true

// Question 3
function semiPerimeter(a, b, c) {
    return (a + b + c) / 2;
}
function areaOfTriangle(a, b, c) {
    let s = semiPerimeter(a, b, c);
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}
console.log("Q3:", areaOfTriangle(3, 4, 5)); // 6

// Question 4
function average(m1, m2, m3) {
    return (m1 + m2 + m3) / 3;
}
function percentage(m1, m2, m3) {
    return ((m1 + m2 + m3) / 300) * 100;
}
function mainFunction(m1, m2, m3) {
    console.log("Q4 Average:", average(m1, m2, m3));
    console.log("Q4 Percentage:", percentage(m1, m2, m3) + "%");
}
mainFunction(70, 80, 90);

// Question 5
function customIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}
console.log("Q5:", customIndexOf("Hello", "e")); // 1

// Question 6
function deleteVowels(sentence) {
    return sentence.replace(/[aeiouAEIOU]/g, "");
}
console.log("Q6:", deleteVowels("Hello World")); // Hll Wrld

// Question 7
function countVowelPairs(str) {
    let count = 0;
    for (let i = 0; i < str.length - 1; i++) {
        let pair = str[i] + str[i + 1];
        switch (pair.toLowerCase()) {
            case "aa": case "ae": case "ai": case "ao": case "au":
            case "ea": case "ee": case "ei": case "eo": case "eu":
            case "ia": case "ie": case "ii": case "io": case "iu":
            case "oa": case "oe": case "oi": case "oo": case "ou":
            case "ua": case "ue": case "ui": case "uo": case "uu":
                count++;
                break;
        }
    }
    return count;
}
console.log("Q7:", countVowelPairs("Please read this application")); // 3

// Question 8
function toMeters(km) { return km * 1000; }
function toFeet(km) { return km * 3280.84; }
function toInches(km) { return km * 39370.1; }
function toCentimeters(km) { return km * 100000; }
let distance = 5;
console.log("Q8 Meters:", toMeters(distance));
console.log("Q8 Feet:", toFeet(distance));
console.log("Q8 Inches:", toInches(distance));
console.log("Q8 Centimeters:", toCentimeters(distance));


// Question 9
function overtimePay(hours) {
    if (hours > 40) {
        return (hours - 40) * 12;
    }
    return 0;
}
console.log("Q9:", overtimePay(45)); // 60

// Question 10
function currencyNotes(amount) {
    let hundreds = Math.floor(amount / 100);
    let fifty = Math.floor((amount % 100) / 50);
    let tens = Math.floor(((amount % 100) % 50) / 10);
    console.log("Q10:", hundreds + " hundred notes, " + fifty + " fifty notes, " + tens + " ten notes");
}
currencyNotes(470); // 4 hundred notes, 1 fifty note, 2 ten notes

//   Chapter 44 - 46 (Events)

// Question 1
function showAlert() {
    alert("You clicked the link!");
}
// <a href="#" onclick="showAlert()">Click me</a>

// Question 2
function showImageAlert(imgName) {
    alert("You clicked " + imgName);
}
// <img src="mobile.jpg" onclick="showImageAlert('Mobile')" />

// Question 3
function deleteRow(btn) {
    let row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
// HTML: <button onclick="deleteRow(this)">Delete</button>

// Question 4
function changeImage(id, newSrc) {
    document.getElementById(id).src = newSrc;
}
// HTML: <img id="phone" src="1.jpg" 
// onmouseover="changeImage('phone','2.jpg')" 
// onmouseout="changeImage('phone','1.jpg')" />

// Question 5
let counter = 0;
function increaseCounter() {
    counter++;
    document.getElementById("counter").innerText = counter;
}
function decreaseCounter() {
    counter--;
    document.getElementById("counter").innerText = counter;
}
// HTML:
// <p id="counter">0</p>
// <button onclick="increaseCounter()">Increase</button>
// <button onclick="decreaseCounter()">Decrease</button>
