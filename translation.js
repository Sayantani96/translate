var inptText=document.querySelector("#input-text");
var btnClick=document.querySelector("#translate-btn");
var outputText=document.querySelector("#output-text");
var errorMsg=document.querySelector('#error-msg');
var checkedValue="pirate";

const apiURL=`https://api.funtranslations.com/translate/${checkedValue}.json`;

function translationURL(text){
    return apiURL + "?text=" + text;
    
}

function errorHandler(error){
    console.log(error.message);
    if(error.message) errorMsg.innerText='Some error occured';
}
btnClick.addEventListener("click",clickHandler);

function clickHandler(){
    errorMsg.innerText='';
    if(inptText.value==='') errorMsg.innerText='Enter a value';

    else{fetch(translationURL(inptText.value))
    .then(response=>response.json())
    .then(json=>{outputText.innerText=json.contents.translated})
    .catch((error)=>errorHandler(error));}
}