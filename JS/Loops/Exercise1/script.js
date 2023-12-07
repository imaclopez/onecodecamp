

// In this activity, the user is prompted to enter a score. Based on the score entered, the code uses conditional statements (if, else if, and else) to determine the corresponding grade. 

//     If the score is 90 or above, it assigns the grade 'A'. 
//     If the score is between 80 and 89, it assigns the grade 'B'. 
//     If the score is between 70 and 79, it assigns the grade 'C'. 
//     If the score is between 60 and 69, it assigns the grade 'D'. 

//     Otherwise, if the score is below 60, it assigns the grade 'F'. The grade is then printed to the console.



let score = parseInt(prompt('Enter the score: '));
let grade;90

if (score > 90) {
    grade = "A";
  } else if (score <= 90 && score >= 80 ) {
    grade = "B";
  } else if (score < 80 && score >= 70 ) {
    grade = "C";
  } else if (score < 70 && score >= 60 ) {
    grade = "D";
  } else if (score <= 60) {
    grade = "F";
  }

console.log('for a score of ' + score + ' grade is ' + grade)
