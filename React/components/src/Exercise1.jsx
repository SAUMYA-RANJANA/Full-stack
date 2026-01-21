function Exercise(){
     return<div>
       <h1>Anil sidhu TODO</h1>
       <img src="	https://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg"></img>
       <ul>
        <li>raj</li>
        <li>som</li>
        <li>hari</li>
       </ul>
       <button onClick={callfun}>click</button>
     </div>
}
export default Exercise;
function callfun(){
  return alert("function called");
}