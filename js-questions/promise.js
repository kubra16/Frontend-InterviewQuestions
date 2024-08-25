// Promises are used to handle Asynchronous operation in javascript.
// it allows to write a code which can handle eventual results( or errors) of operartions that takes time, Such as fetching a data from a server or reading a file.

// Promises is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Promises are the container or placeholder for an asynchronous operation or future value.

// 1. Pending : initial state of promises where it is not fullfiled or rejected.
// 2. Fullfiled: the operation completed successfully and a promise has a value.
// 3. Rejected : the operation failed and the promise has a reason( error).

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(console.log("hello , Promise has been resolved"));
  }, 4000);
});

// 1. Simple example to simulate Promises

function fetchData() {
  const Data = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data Fetched successfully");
    }, 2000);
  })
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
}
// fetchData();

// Problem 2: Chaining Promises
// Write a function processOrder that simulates a food order. The function should return a Promise that resolves with "Order received" after 1 second. Chain two additional Promises:

// The first one simulates cooking and resolves with "Food cooked" after 2 seconds.
// The second one simulates delivery and resolves with "Food delivered" after 3 seconds.
// Tasks:

// Chain these promises together and log each result to the console.
// Add error handling for each step.

async function processOrder() {
  let OrderRecieved = true;
  try {
    return new Promise((resolve, reject) => {
      if (OrderRecieved) {
        setTimeout(() => resolve("Order recieved"), 1000);
      } else {
        reject("No orders");
      }
    })
      .then((msg) => {
        console.log(msg);
        return new Promise((resolve, reject) => {
          if (OrderRecieved) {
            setTimeout(() => {
              resolve("Food cooked");
            }, 2000);
          } else {
            reject("No orders");
          }
        });
      })
      .then((msg) => {
        console.log(msg);
        return new Promise((resolve, reject) => {
          if (OrderRecieved) {
            setTimeout(() => {
              resolve("Food delivered");
            }, 4000);
          } else {
            reject("no orders");
          }
        });
      })
      .then((msg) => {
        console.log(msg);
      });
  } catch (err) {
    console.log(err);
  }
}
processOrder();
