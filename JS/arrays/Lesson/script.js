

let colors =["red","blue", "green"];
console.log(colors);

colors.push("black");

console.log(colors);

index = colors.indexOf("blue")

console.log(index);

colors.splice(index,1)

console.log(colors);

indexGreen = colors.indexOf("green")
console.log(indexGreen);


indexRed = colors.indexOf("red")

colors[indexRed] = "green-swap"
colors[indexGreen] = "blue-swap"
console.log(colors);









/**
 Create an array and name it 'colors'
    include the colors: red, blue, green

    1. add black after the last index of the array. Then print the array
    2. remove the value blue and swap the position of green and red. Then print the array.
    3. Add the color yellow on the first index of the array. Then print the array.
 */

