const url="https://dummyjson.com/posts";
const factpara=document.querySelector("#fact");
const btn=document.querySelector("#btn");
 const getFacts=async()=>{
     console.log("getting the data");
     let response=await fetch(url);
      let data=await response.json();
     console.log(data.posts);
    let posts = data.posts
     factpara.innerHTML=posts[2].title;

 };

//  function getFacts(){
//   fetch(URL)
//   .then((response)=>{
//     return response.json();

//   })
//   .then ((data)=>{
//     console.log(data);
//     factpara.innerText=data[2].text;

//   })
//  }
 btn.addEventListener("click",getFacts);
