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




// async function fetchData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// }

// fetchData();









// // Define the endpoint for the API
// const endpoint = 'https://example.com/api/chartdata';

// // Make a GET request to the API using fetch()
// fetch(endpoint)
//     .then(response => {
//         // Check if the response was successful
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         // Parse the JSON response and extract the chart data
//         return response.json();
//     })
//     .then(data => {
//         // Use the charting library to display the data
//         const chart = new Chart('chart-container', {
//             type: 'line',
//             data: {
//                 labels: data.labels,
//                 datasets: [{
//                     label: 'Chart Data',
//                     data: data.values,
//                     borderColor: 'blue',
//                     fill: false
//                 }]
//             },
//             options: {
//                 title: {
//                     text: 'Chart Title'
//                 }
//             }
//         });
//     })
//     .catch(error => {
//         console.error(error);
//     });






// GET https://api.example.com/users



// {
//     "users": [
//         {
//             "id": 1,
//             "name": "John Doe",
//             "email": "john.doe@example.com"
//         },
//         {
//             "id": 2,
//             "name": "Jane Smith",
//             "email": "jane.smith@example.com"
//         }
//     ]
// }




// fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then(response => response.json())
//     .then(data => console.log(data.name)); // Output: Leanne Graham




// fetch('https://api.example.com/users/1')
//     .then(response => response.json())
//     .then(data => console.log(data.name)); // Output: Leanne Graham








// fetch('https://api.example.com/data')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));


// const getUsers = async () => {
//     try {
//         const response = await fetch("“);
//     const data = await response.json();
//         console.log(data);
//     }
//     catch (error) {
//         console.log(error)
//     }



// const getUsers = async () => {
//     try {
//         const response = await fetch("");
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// };



// const postUser = async (user) => {
//     try {
//         const response = await fetch(“...“,
//             {
//                 method: "POST",
//                 headers: {
//                     Accept: "application/json",
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(user),
//             });
//     }
//     catch (error) {
//         console.log(error)
//     }


// const postUser = async (user) => {
//     try {
//         const response = await fetch("...",
//             {
//                 method: "POST",
//                 headers: {
//                     Accept: "application/json",
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(user),
//             });
//     }
//     catch (error) {
//         console.log(error)
//     }
// }


// const putUser = async (id, edituser) => {
//     try {
//         const response = await fetch("...",
//             {
//                 method: "PUT",
//                 headers: {
//                     Accept: "application/json",
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(edituser),
//             });
//     }
//     catch (error) {
//         console.log(error)
//     }
// }

// const deleteUser = async (id) => {
//     try {
//         const response = await fetch("...",
//             {
//                 method: "DELETE",
//             });
//     }
//     catch (error) {
//         console.log(error)
//     }
// }


// const postCreate = async () => {
//     try {
//         const { data } = await axios.get(`url`)
//     } catch (error) {
//     }
// }


// const postCreate = async (editUser) => {
//     try {
//         const { data } = await axios.post(`url`, editUser)
//     } catch (error) {
//     }
// }




// const postCreate = async (editUser) => {
//     try {
//         const { data } = await axios.post(`url`, editUser)
//     } catch (error) {
//     }
// }


// const postCreate = async (id, editUser) => {
//     try {
//         const { data } = await axios.post(`url/${id}`, editUser)
//     } catch (error) {
//     }
// }


// const putUpdate = async (id, editUser) => {
//     try {
//         const { data } = await axios.put(`url/${id}`, editUser);
//         // handle response data
//     } catch (error) {
//         // handle error
//     }
// }

const postDelete = async (id) => {
    try {
        const { data } = await axios.delete(`url/${id}`);
        // handle success response
    } catch (error) {
        // handle error response
    }
};