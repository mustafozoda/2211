# **_`Java Script Lecture 7`_**

![](/img/js%20logo.jpg)

# **`Table of contents`**

- [Synchronous](#synchronous)
- [Asynchronous](#asynchronous)
- [New Promise](#new-promise)
- [Try and Catch](#try-and-catch)
- [Async await](#async-await)

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

# **`Synchronous`**

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

![](/img/66666.png

In this example, the `fetch()` function returns a promise that resolves with the server's response. We use `.then()` to extract the JSON data from the response and log it to the console. If there is an error, we use `.catch()` to log the error to the console.)

<br>
<br>
<br>

# **`Try/catch`**

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
