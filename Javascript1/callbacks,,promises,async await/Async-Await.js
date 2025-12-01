function getData(dataId){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
       console.log("data", dataId);
       resolve("success");
       
    },3000);
  });
}



(async function(){
  console.log("get ready for 1");
  await getData(1);
  console.log("get ready for 2");
  await getData(2);
})();