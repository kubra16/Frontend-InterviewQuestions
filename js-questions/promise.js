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

// Create 2 mock API’s which returns a list of students and each student has a name, some marks and a unique registration ID. Data from the 2 API’s can have common students i.e. mock API 1 can have a student as — ABC / 98% / 1234 (name / marks / registration ID) and this same data can be there in mock API 2 response as well. Now after creating these 2 API’s using Promises and hard-coded data, you need to merge the data coming from both API’s and have to delete the duplicates.

function mockApi1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { name: "Alice", marks: "95%", regId: 1234 },
        { name: "Bob", marks: "90%", regId: 2345 },
        { name: "Charlie", marks: "85%", regId: 3456 },
      ]);
    }, 1000);
  });
}

function mockApi2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { name: "Alice", marks: "95%", regId: 1234 }, // duplicate
        { name: "David", marks: "80%", regId: 4567 },
        { name: "Eve", marks: "88%", regId: 5678 },
      ]);
    }, 1000);
  });
}

function fetchstudent() {
  return Promise.all([mockApi1(), mockApi2()]);
}

function removeDublicates(data1, data2) {
  let mergedStudents = [...data1, ...data2];
  console.log(mergedStudents);

  let uniqueStudents = [];
  const studentMap = new Map();

  mergedStudents.forEach((student) => {
    if (!studentMap.has(student.regId)) {
      studentMap.set(student.regId, student);
      uniqueStudents.push(student);
    }
  });
  return uniqueStudents;
}

fetchstudent().then(([data1, data2]) => {
  const result = removeDublicates(data1, data2);
  console.log(result);
});
