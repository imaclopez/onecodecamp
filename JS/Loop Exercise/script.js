

// In this activity, the user is prompted to enter a score. Based on the score entered, the code uses conditional statements (if, else if, and else) to determine the corresponding grade. 

//     If the score is 90 or above, it assigns the grade 'A'. 
//     If the score is between 80 and 89, it assigns the grade 'B'. 
//     If the score is between 70 and 79, it assigns the grade 'C'. 
//     If the score is between 60 and 69, it assigns the grade 'D'. 

//     Otherwise, if the score is below 60, it assigns the grade 'F'. The grade is then printed to the console.
// 2.] Create a JavaScript program that prints all the numbers between a given range. 
// Prompt the user to enter the starting and ending numbers for the range. 
// Use a loop to iterate through the numbers in the range. Print each number in the console.
console.log("hello");

let score = parseInt(prompt('Enter the score: '));
let grade;

if (score > 90) {
    grade = "A";
  } else if (score < 90 && score >= 80 ) {
    grade = "B";
  } else if (score < 80 && score >= 70 ) {
    grade = "C";
  } else if (score < 70 && score >= 60 ) {
    grade = "D";
  } else if (score <= 60) {
    grade = "F";
  }

console.log('for a score of ' + score + ' grade is ' + grade)
80


let start = parseInt(prompt('Enter the starting number: '));
let end = parseInt(prompt('Enter the ending number: '));

for (i=start; i< end ; i++) {
98
    console.log(i);
}


  // //1.] 
// let score = parseInt(prompt('Enter the score: '));
// let grade;

// //continue code here


// //2.] 
// let start = parseInt(prompt('Enter the starting number: '));
// let end = parseInt(prompt('Enter the ending number: '));

// //continue code here


// let grade;
