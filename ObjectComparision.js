// To comapare two different objects
var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };
let flag = true;
for (var key in obj1) {
  if (obj1[key] !== obj2[key]) {
    flag = false;
    break;
  }
}
console.log(flag);
//Please have a review
