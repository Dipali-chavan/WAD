
console.log("Hello!!!");


localStorage.setItem('Name', 'Dipali');
localStorage.setItem('Gender', 'Female');

let a = localStorage.getItem('Name');
let b = localStorage.getItem('Gender');

//localStorage.clear();

localStorage.removeItem('Name');
console.log(a);
console.log(b);