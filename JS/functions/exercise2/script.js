
let base = parseInt(prompt('Enter the BASE: '));
let power = parseInt(prompt('Enter the POWER: '));


function exponent(base, power) {
    let result = base**power;
    let exponentNumbers=[base, power, result];
    // console.log(`${exponentNumbers[0]} raised to the power of ${exponentNumbers[1]} is ${exponentNumbers[2]} `);
    return exponentNumbers;
}



let exponentNumbers = exponent(base,power);

console.log(`${exponentNumbers[0]} raised to the power of ${exponentNumbers[1]} is ${exponentNumbers[2]} `);

let result = exponentNumbers[2];

let a = result % 3;
let b = result % 5
console.log("Remainder is divieded by 3,",a)
console.log("Remainder is divieded by 5,",b)

if (a==0) {
    console.log("Fizz");
} else if (b==0) {
    console.log("Buzz");
    
}
  else {
    console.log("FizzBuzz");
  }










