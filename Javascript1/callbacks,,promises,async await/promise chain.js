function asyncFunc1(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
       console.log("some datal");
       resolve("success");

    },1000);
  });
}

function asyncFunc2(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
       console.log("some data2");
       resolve("success");

    },4000);
  });
}

// console.log("fetching datal");
// let p1=asyncFunc();
// p1.then((res)=>{
//   console.log(res);
// })

console.log("fetching data1");
asyncFunc1().then((res)=>{
      console.log("fetching data2");
      asyncFunc2().then((res)=>{})
})