
let counter1=0;

let counter2=0;


function call() {

    

    return function increment() {
            counter++ ;
            console.log(counter);
    }
}

call()();
call()();
call()();
call()();
call()();






