console.log('JS FILE SUCCESSFULLY LOAD !');

const ApiUrl = "https://api.quotable.io/random?minLength=80&maxLength=100";

const word = document.getElementById("textcontent");
const input = document.getElementById("textinput");

var displaytime = document.getElementById("statstime");
var displayerror = document.getElementById("statstime");


let quote = "";
let time = 60;
let timer = "";
let entryerror = 0;



const textContentRender = async () => {
    const response = await fetch(ApiUrl);
    let data = await response.json();

    let arr = data.content.split("").map((value) => {
        return "<span class='chars-unit'>" + value + "</span>";
    });
    word.innerHTML += arr.join("");
};

var tmp = 0;
input.addEventListener("input", () => { 
    var tpm = tmp + 1;
    document.getElementById("tmpp").innerHTML= tmp;




});

textContentRender();

