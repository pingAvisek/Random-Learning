const names = ["Abhishek", "Akshyay", "Aparad", "Anotolo"];

// names.forEach((name) => {
//   console.log(name);
// });

let myForEach = function (arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    callback(element);
  }
};

myForEach(names, (name) => {
  console.log(name);
});
