const form=document.querySelector('form');
const resultDiv=document.querySelector('.result');
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  getWordInfo(form.elements[0].value);

});

const getWordInfo=async (word)=>{

  try{

 
   const response=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
   const data=await response.json();
   resultDiv.innerHTML=`<p>${data[0].meanings[0].partOfSpeech}</p>
   
   <p>${data[0].meanings[0].definitions[0].definition}</p>`;
  }
   catch (error){
       resultDiv.innerHTML=`<P> can't found</p>`;
   }
   console.log(data);
}