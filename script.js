// # Synchronous



// console.log("Start");

// function wait(ms) {
//     const start = Date.now();
//     while (Date.now() - start < ms);
// }

// wait(3000); // wait for 3 seconds

// console.log("End");





// // # ASynchronous

// console.log("Start");

// setTimeout(() => {
//     console.log("End");
// }, 3000); // wait for 3 seconds

// // The rest of the code can continue executing while waiting for the setTimeout callback




// console.log("Start");

// function waitFor(ms) {
//     return new Promise(resolve => {
//         setTimeout(resolve, ms);
//     });
// }

// waitFor(3000)
//     .then(() => {
//         console.log("End");
//     });

// // The rest of the code can continue executing while waiting for the Promise to resolve





console.log("Start");

function waitFor(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

async function myFunction() {
    await waitFor(3000);
    console.log("End");
}

myFunction();

// The rest of the code can continue executing while waiting for the async function to complete

