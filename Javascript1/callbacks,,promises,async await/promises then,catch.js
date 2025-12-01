const getPromise= ()=>{
  return new Promise((resolve,reject)=> {
  console.log("promise");
  //resolve("sucess");
  reject("error");
  
});
};

let ppromise=getPromise();
ppromise.then(()=>{
  console.log("add");
});

ppromise.catch(()=>{
  console.log("this is error");
})