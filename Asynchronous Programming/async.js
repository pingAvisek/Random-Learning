let a = 10;
let b = 20;

setTimeout(() => {
  a = 50;
  console.log("Value of a: " + a);
}, 1000);

a = 25;

console.log("Outside of the block: " + a);
