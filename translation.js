var inptText=document.querySelector("#input-text");
var btnClick=document.querySelector("#translate-btn");
var outputText=document.querySelector("#output-text");
var checkedValue="pirate";

const apiURL=`https://api.funtranslations.com/translate/${checkedValue}.json`;

function translationURL(text){
    return apiURL + "?text=" + text;
    
}

function errorHandler(){
    console.log(error.message);
    alert("Some error occured");
}
btnClick.addEventListener("click",clickHandler);

function clickHandler(){
    console.log(translationURL(inptText.value));
    fetch(translationURL(inptText.value))
    .then(response=>response.json())
    .then(json=>{outputText.innerText=json.contents.translated})
    .catch((error)=>errorHandler);
}