//let counter = 0;  global cancel
"use strict"

let prepCounter = () => {
    
    let counter = 0; // local

    let inner = () => {
        counter++;
        console.log(counter);
    }

    return inner;
}




// incCounter();
// incCounter();
// incCounter();
// incCounter();


// let testFunc = () =>{
//     counter = 100;
//     console.log(counter);
// }

// testFunc();


