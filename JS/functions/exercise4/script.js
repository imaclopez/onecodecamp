

let globalVar = 10;


function varScope() {
    
  let globalVar = 20;

  console.log(`value of globalVar inside function ${globalVar}`)

}

varScope()
console.log(`value of globalVar with Global Scope is ${globalVar}`)




