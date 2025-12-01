//For a given array of numbers,print the square of each value using the forEach loop.
let nums=[2,3,4,5,6];
nums.forEach((num)=>
{
    console.log(num*num);
})
let arr=[1,2,3,4,5,34,56];
let evenArr=arr.filter((val)=>
{
    return val%2===0;
});
consolw.log(evenArr);