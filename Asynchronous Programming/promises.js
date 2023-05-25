let promise = new Promise((resolve, reject) => {
  let fetchData = false;
  if (fetchData) {
    resolve("Task Resolved.");
  } else {
    reject("Task Rejected.");
  }
});

promise
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
