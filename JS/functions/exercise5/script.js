let a = [1,2,3,4,5];
console.log(`Old Array, ${a}`)

function newArray(oldArray,func) {
  console.log(oldArray)
  let result = [];
  let lenghtArray = oldArray.length
  console.log(lenghtArray)

  for (let i=0; i < lenghtArray; i++) {

    let newNumber = func(oldArray[i]);
    console.log(`New Array Element ${newNumber}`)
    result.push(newNumber)
    console.log(`New Array, ${result}`)

  }
 return result
}


function byTen(num) {
  return num*10;
}

let byTenArray = newArray(a,byTen);
console.log(byTenArray)
