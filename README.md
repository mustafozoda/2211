# **_`Java Script Lecture 7`_**

<br>

# **`Table of contents`**

- [Synchronous](#synchronous)
- [Asynchronous](#asynchronous)
- [New promise](#new-promise)
- [Try and Catch](#try-and-catch)
- [Async await](#async-await)

<br>
<br>
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
