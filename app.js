console.log('JS FILE SUCCESSFULLY LOAD !');

const ApiUrl = "https://api.quotable.io/random?minLength=80&maxLength=100";

const word = document.getElementById("textcontent");
const input = document.getElementById("textinput");

var displaytime = document.getElementById("statstime");
var displayerror = document.getElementById("statstime");

let cpt = 0;
const textContentRender = async () => {
    const response = await fetch(ApiUrl);
    let data = await response.json();

    let arr = data.content.split("").map((value) => {
        cpt++;
        return "<span class='chars-unit'>" + value + "</span>";
    });
    word.innerHTML += arr.join("");
    console.log('lenght ' + cpt);
};

input.addEventListener('input', () => { 
    document.getElementById("tmpp").innerHTML= "start";

});

textContentRender();

