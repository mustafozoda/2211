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





// console.log("Start");

// function waitFor(ms) {
//     return new Promise(resolve => {
//         setTimeout(resolve, ms);
//     });
// }

// async function myFunction() {
//     await waitFor(3000);
//     console.log("End");
// }

// myFunction();

// // The rest of the code can continue executing while waiting for the async function to complete











// const myPromise = new Promise((resolve, reject) => {
//     // Some asynchronous operation here, such as fetching data from a server
//     // If the operation is successful, call the resolve function with the result
//     // If there is an error, call the reject function with an error message
// });

// myPromise.then((result) => {
//     // Do something with the result if the promise was resolved successfully
// }).catch((error) => {
//     // Handle the error if the promise was rejected
// });




// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));















// try {
//     // Code that may throw an error
// } catch (error) {
//     // Code to handle the error
// }








// try {
//     const result = calculate(10, 0);
//     console.log(result);
// } catch (error) {
//     console.log('An error occurred: ' + error.message);
// }




// try {
//     // Some code that might throw an error
// } catch (error1) {
//     // Handle one type of error
// } catch (error2) {
//     // Handle another type of error
// }




async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchData();