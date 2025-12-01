function getData(dataId,getNextData){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
       console.log("data", dataId);
       resolve("success");
       if (getNextData){
         getNextData();
    }

    },1000);
  });
}
  console.log("1");
  getData(1)
    .then((res)=>{
      console.log("2");
      return getData(2);
   
    })
    .then((res)=>{
      console.log("3");
      return getData(3);
   
    })
    .then((res)=>{
      console.log("success");
    });

