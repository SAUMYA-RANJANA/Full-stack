//Create 3 divs with common class name - “box”. Access them & add some unique text to each of them.
let divs=document.querySelectorAll(".box");
console.log(divs[1]);
divs[0].innerText="new unique value 1";
divs[1].innerText="new unique value 2";
divs[2].innerText="new unique value 3";