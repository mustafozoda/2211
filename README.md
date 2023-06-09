# **_`Java Script Lecture 7`_**

![](/img/js%20logo.jpg)

# **`Table of contents`**

- [Synchronous](#synchronous)
- [Asynchronous](#asynchronous)
- [New Promise](#new-promise)
- [Try and Catch](#try-and-catch)
- [Async await](#async-await)
- [API](#api)
- [REST API](#rest-api)
- [What is the difference between API and REST API](#what-is-the-difference-between-api-and-rest-api)
- [Fetch](#fetch)
- [AXIOS](#axios)

<br>

# **`Synchronous`**

Synchronous JavaScript refers to the behavior of executing code in a sequential, blocking manner where each line of code waits for the previous one to complete before being executed. In other words, if a line of code takes a long time to execute, it will block subsequent lines of code from running until it has finished.

Here's an example of synchronous JavaScript code:

![](/img/sync.png)

In this example, we define a `wait` function that simply waits for a specified number of milliseconds using a busy loop. We then call the `wait` function with a delay of 3 seconds and log "End" to the console after the delay has passed.

Since the `wait` function uses a busy loop to wait for the specified time, it blocks the main thread of execution and prevents any subsequent code from running until it completes. Therefore, in this example, "End" is not logged to the console until 3 seconds have passed, even though the rest of the code has already executed.

This behavior of synchronous JavaScript can be problematic when dealing with long-running or blocking operations, as it can cause the user interface to freeze and become unresponsive. To avoid this issue, asynchronous programming techniques such as callbacks, promises, and async/await are often used instead.

<br>
<br>
<br>

# **`Asynchronous`**

Asynchronous JavaScript refers to the behavior of executing code in a non-blocking manner where each line of code does not wait for the previous one to complete before being executed. Instead, asynchronous operations are initiated and their results are processed later, while the main thread of execution moves on to execute other code.

Here are some examples of asynchronous JavaScript:

1. `setTimeout`

![](/img/2222.png)

In this example, the `setTimeout` function is used to schedule a callback function to be executed after a specified delay (in this case, 3 seconds). The main thread of execution moves on to execute the rest of the code while waiting for the callback to be executed. After 3 seconds have passed, the callback function is executed and logs "End" to the console.

2. `Promises`

![](/img/33333.png)

In this example, we define a `waitFor` function that returns a Promise that resolves after a specified delay (in this case, 3 seconds). We then call the `waitFor` function and use the `then` method to register a callback function to be executed when the Promise is resolved. The main thread of execution moves on to execute the rest of the code while waiting for the Promise to resolve. After 3 seconds have passed, the Promise is resolved and the registered callback function is executed, logging "End" to the console.

3. `Async/await`

![](/img/44444.png)

In this example, we define an `async` function that uses the `await` keyword to wait for a Promise to resolve before moving on to execute the next line of code. We then call the `waitFor` function inside the `myFunction` function using the `await` keyword with a delay of 3 seconds. After the Promise returned by `waitFor` is resolved, "End" is logged to the console. Finally, we call the `myFunction` function, which initiates the asynchronous operation and moves on to execute the rest of the code in a non-blocking manner.

These are just a few examples of how asynchronous JavaScript can be used to handle long-running or blocking operations without freezing the user interface or causing performance issues.

<br>
<br>
<br>

# **`New Promise`**

In JavaScript, promises are a way to handle asynchronous operations. Promises represent the eventual completion or failure of an asynchronous operation and allow you to write code that behaves as if the result is already available, even though it may take some time to complete.

Here is an example of using a promise in JavaScript:

![](/img/555555.png)

In this example, `myPromise` represents the asynchronous operation. The `new Promise()` constructor takes a function as an argument that defines the operation. Inside this function, you perform the asynchronous operation and call either the `resolve()` or `reject()` function depending on whether the operation was successful or not.

Once the promise is created, you can use the `.then()` method to handle the successful resolution of the promise, and the `.catch()` method to handle any errors that occur during the operation.

Here's an example of using a promise to fetch data from a server:

![](/img/66666.png)

In this example, the `fetch()` function returns a promise that resolves with the server's response. We use `.then()` to extract the JSON data from the response and log it to the console. If there is an error, we use `.catch()` to log the error to the console.)

<br>
<br>
<br>

# **`Try and catch`**

In JavaScript, a try/catch block is used for handling runtime errors that may occur during the execution of code.

The basic structure of a try/catch block is as follows:

![](/img/7777777.png)

Here's an example:

![](/img/88888.png)

In this example, the `calculate` function is called with the arguments 10 and 0. Since dividing by zero is not allowed, this will result in a runtime error. The `try/catc` block catches the error and logs a message to the console containing the error message.

It's important to note that the `catch` block only executes if an error is thrown within the `try` block. If no error is thrown, the `catch` block is skipped.

You can also have multiple `catch` blocks to handle different types of errors:

![](/img/99999.png)

In this example, if the code in the `try` block throws an error of type `error1`, the first `catch` block will handle it. If it throws an error of type `error2`, the second `catch` block will handle it.

<br>
<br>
<br>

# **`Async await`**

Async/await is a feature in JavaScript that allows for more readable and maintainable asynchronous code. It allows you to write asynchronous code that looks and behaves like synchronous code, without blocking the main thread.

In basic terms, async functions return a Promise. When an async function is called, it returns a Promise object that resolves with the value returned by the async function, or rejects with an error thrown from within the async function.

Here's an example of using async/await to make an API call:

![](/img/00000.png)

This code declares an `async` function called `fetchData`. Within this function, we use the `await` keyword to wait for each asynchronous operation to complete before moving on to the next line of code.

First, we use `await` to wait for the `fetch` method to return a response. Once we have the response, we use `await` again to parse the response body as JSON. Finally, we log the parsed data to the console.

If any errors occur during this process, the `catch` block will handle them and log the error to the console.

Overall, `async/await` makes it much easier to work with asynchronous code in JavaScript by making it look and behave more like synchronous code.

<br>
<br>
<br>

# **`API`**

![](/img/JavaScript-API-Mocking-Techniques-1.png)

An `API`, or Application Programming Interface, is a set of protocols and tools that allow different software applications to communicate with each other. Here's an example of how an API could be used with charting data:

![](/img/API.png)

In this example, we define an endpoint for an API that returns chart data in JSON format. We use `fetch()` to make a GET request to the API and pass in the endpoint as an argument.

We then use the `then()` method to check if the response was successful using the `ok` property of the Response object. If the response was not successful, we throw an error with the HTTP status code.

If the response was successful, we use another `then()` method to parse the JSON response and extract the chart data. We then use a charting library (in this case, Chart.js) to display the chart on a web page.

Finally, we use the `catch()` method to catch any errors that occur during the request and log them to the console.

<br>
<br>
<br>

# **`REST API`**

![](/img/restapiimage.png)

REST (Representational State Transfer) is an architectural style used to create web services that are lightweight, scalable, and easily maintainable. `RESTful APIs` use HTTP requests to GET, PUT, POST, and DELETE data over the internet.

In a `RESTful API`, resources are identified by unique URLs, each representing a specific entity or collection of entities. The server exposes these resources through a set of standardized HTTP methods:

- `GET`: Used to retrieve data from a resource.
- `POST`: Used to create a new resource or submit data to be processed.
- `PUT`: Used to update an existing resource.
- `DELETE`: Used to remove a resource.

`RESTful APIs` are stateless, meaning that each request contains all the information necessary for the server to fulfill it. This makes them highly scalable and easy to cache.

Here's an example of a `RESTful API` endpoint that retrieves a list of users:

![](/img/restapi.png)

The response might look something like this:

![](/img/restapi2.png)

In this example, we are using the `GET` method to request a list of users from the server. The server responds with a `JSON` object containing an array of user objects, each with an ID, name, and email address.

<br>
<br>
<br>

# **`What is the difference between API and REST API`**

Here is an example of how to retrieve data using an `API`, specifically the `Fetch API` in JavaScript:

![](/img/vv1.png)

In this example, we are using the `fetch` function, which is a built-in method in modern browsers that allows us to send HTTP requests. We pass in the endpoint URL as an argument to the `fetch` function, and then we use the `json()` method on the response object to extract the JSON data from the response. Finally, we log the user's name to the console.

Here is an example of how to retrieve data using a `REST API` with the same `Fetch API`:

![](/img/vv2.png)

In this example, we are again using the `fetch` function, but this time we are sending a request to a REST API endpoint https://api.example.com/users/1. The server will respond with a JSON object, which we can extract in the same way as before. The difference here is that we are following the principles of REST by using a standardized HTTP method, in this case, GET, to interact with a resource identified by a unique URL, which is https://api.example.com/users/1.

<br>
<br>
<br>

# **`Fetch`**

- [GET](#get)
- [POST](#post)
- [PUT](#put)
- [Delete](#delete)

The Fetch API is a modern interface for fetching resources (such as JSON data) across the network. It provides a simple, standardized way to fetch resources asynchronously across the web. The Fetch API is built into modern browsers and can be used with JavaScript to make HTTP requests.

Here's an example of how to use the Fetch API in JavaScript:

![](</img/fetch()1.png>)

In this example, we are making a GET request to the specified URL using `fetch()`. Once the request is complete, we parse the response as JSON using the `.json()` method and log the resulting data to the console. If an error occurs during the request, we catch it and log the error to the console.

You can also specify additional options in your `fetch()` request, such as the HTTP method, headers, and body. For more information on how to use the Fetch API, check out the MDN Web Docs: ***https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API***

<br>

## **`GET`**

![](/img/2211.png)

This is a JavaScript function named `getUsers` that uses the `async/await` syntax to make an asynchronous HTTP GET request to a specified URL using the `fetch` method. Here's a breakdown of how this function works:

- The try block attempts to make the HTTP request and parse the JSON response.
- First, the fetch method is called with an empty string as its argument. This will not initiate any network requests because it doesn't specify a valid URL.
- Since there is no valid URL, the fetch method will throw an error.
- The error will be caught by the catch block, which simply logs the error to the console using `console.log(error)`.

In summary, this function does not perform any useful work because it does not specify a valid URL for the `fetch` method to use. As a result, it will always catch an error and log it to the console without making any actual HTTP requests.

<br>

## **`POST`**

![](/img/dodo.png)

This is a JavaScript function named `postUser` that uses the `async/await` syntax to make an asynchronous HTTP POST request to a specified URL using the `fetch` method. Here's how this function works:

- The function takes a single parameter named user, which should be an object representing the `user` data to be sent in the HTTP request body.

- Inside the `try` block, the `fetch` method is called with the specified URL as its first argument and an options object as its second argument.

- The options object specifies that the request should use the `POST` HTTP method, and sets the `Accept` and `Content-Type` headers to `"application/json"`.

- The `JSON.stringify()` method is used to convert the `user` object into a JSON string, which is then sent in the request `body` using the body property of the options object.

- If the HTTP request is successful, the response object is returned by the `fetch` method and can be used to access the response data.

- If an error occurs during the HTTP request, the catch block will `catch` the error and log it to the console using `console.log(error)`.

In summary, this function sends a JSON-formatted user object to the specified URL using an HTTP POST request, and logs any errors that occur during the request to the console. Note that you should replace the `"..."` placeholder with the actual URL you want to use.

<br>

## **`PUT`**

![](/img/jjjjjjj.png)

The code which you see defines an asynchronous function called putUser that takes two parameters:

- id: A string or number representing the ID of the user you want to update.

- edituser: An object containing the updated user data.

Within the function, the `fetch()` method is used to send an HTTP PUT request to a URL that should be defined in place of `"..."`. The second parameter of the `fetch()` method is an object that contains information about the request, including the HTTP method (set to `"PUT"`), headers that define the content type of the request and response as JSON data, and a `body` property that contains the updated user data in JSON format.

The `await`keyword is used before the`fetch()` method call to wait for the server to respond to the request. If the request is successful, the response will be stored in the `response` variable.

If there is an error while sending the request or processing the response, the `catch` block will be executed, and any error messages will be logged to the console using `console.log()`.

Overall, this code sends an HTTP PUT request to update a user's data on the server, using the `fetch()` method to communicate with the server.

<br>

## **`Delete`**

![](/img/iiiiiiiiii.png)

The code which you see defines an asynchronous function called `deleteUser` that takes one parameter:

- `id`: A string or number representing the ID of the user you want to delete.

Within the function, the `fetch()` method is used to send an HTTP DELETE request to a URL that should be defined in place of `"..."`. The second parameter of the `fetch()` method is an object that contains information about the request, including the HTTP method (set to `"DELETE"`).

The `await` keyword is used before the`fetch()` method call to wait for the server to respond to the request. If the request is successful, the `response` will be stored in the response variable.

If there is an error while sending the request or processing the response, the catch block will be executed, and any error messages will be logged to the console using `console.log()`.

Overall, this code sends an HTTP DELETE request to delete a user's data on the server, using the `fetch()` method to communicate with the server.

<br>
<br>
<br>

# **`AXIOS`**

- [GET AXIOS](#get-axios)
- [POST AXIOS](#post-axios)
- [PUT AXIOS](#put-axios)
- [Delete AXIOS](#delete-axios)

Axios is a popular JavaScript library used to make HTTP requests from web browsers and Node.js applications. It provides an easy-to-use API for sending asynchronous HTTP requests to REST endpoints and performing CRUD operations (create, read, update, delete) on data.

Axios supports a wide range of features including request and response interception, automatic transformation of data to JSON, error handling, cancellation of requests, and much more. With its simple and intuitive API, Axios has become one of the most widely used libraries for making HTTP requests in modern web development.

Here are some examples of how to use Axios in JavaScript code:

---

<br>

## **`GET AXIOS`**

![](/img/hahahahah.png)

This code declares an asynchronous function called `postCreate` that makes a GET request to a URL using Axios. Here's what the code does in detail:

1. The function starts with a `try` block, which means any errors encountered in the block will be caught and handled gracefully.

2. Inside the `try` block, `axios.get` is called, passing in a URL string as an argument. The `get` method returns a Promise that resolves with the response data from the server.

3. The response data is destructured using object destructuring syntax so that only the `data` property of the response object is assigned to a variable. This is done using `{ data } = await axios.get('url')`.

4. If the request is successful, the value of `data` will contain the response data from the server.

5. If an error occurs during the GET request (such as a network error or a 404 error), control will be passed to the `catch` block.

6. The `catch` block is empty in this code, but it could be used to handle any errors that may occur during the GET request. For example, you could display an error message to the user or log the error for debugging purposes.

Note that the `await` keyword is used before the `axios.get` call to wait for the Promise returned by the method to resolve. This allows us to write asynchronous code in a more synchronous-looking way, making it easier to read and understand.

---

<br>

## **`POST AXIOS`**

![](/img/jkjkj.png)

This is a JavaScript async function called `postCreate` that takes in a parameter called `editUser`. The function uses the axios library to make an HTTP POST request to a specified URL with `editUser` as the data payload.

The `await` keyword is used before the axios post request, indicating that this code block will wait for the response before moving on to the next line of code. When the response is received, the data from the response is extracted using destructuring assignment and stored in a variable called `data`.

The `try...catch` block is used to handle any errors that may occur during the HTTP POST request. If there is an error, it will be caught and handled within the `catch` block.

Overall, this function is likely used to create or update a user profile on a server-side database, using the data passed in through the `editUser` parameter. The response from the server can be accessed through the `data` variable, which can then be used to update the user interface accordingly.

---

<br>

## **`PUT AXIOS`**

![](/img/uuuu.png)

This is a JavaScript function called `putUpdate` that updates an existing user with the specified `id` by sending a PUT request to a URL that includes the `id` parameter. The `editUser` parameter is an object containing data about the user being updated.

Inside the function, the axios `put` method is used to send a request to the specified URL with the `editUser` data as the request body and the `id` parameter included in the URL.

If the API call is successful, the response `data` returned by the server is destructured and assigned to the data variable using object destructuring syntax. If there are any errors during the API call, they will be caught in the `catch` block and can be handled in some way (although in this code snippet, nothing is done with the `error` object).

Note that it is typically more appropriate to use the HTTP PUT or PATCH method for updating resources, rather than POST. This is because PUT and PATCH are idempotent methods, meaning that performing the same update operation multiple times has the same effect as performing it once, whereas POST does not have this property.

---

<br>

## **`Delete AXIOS`**

![](/img/delete%20axios.png)

The given code defines an asynchronous function named `postDelete` that takes an `id` parameter.

The function uses the Axios library to send a DELETE request to a URL with the specified `id`. The URL is constructed by concatenating the string `"url/"` and the value of the `id` parameter using template literals.

If the DELETE request is successful, the response `data` from the server is stored in the data variable using destructuring assignment. You can handle the success response by writing your own custom logic or by calling another function to handle it.

If the DELETE request encounters an error, the code inside the `catch` block is executed. You can handle the error response by writing your own custom logic or by calling another function to handle it.

Note: Make sure to replace `"url"` with the appropriate URL that you want to perform the DELETE request on.
