console.log('JS FILE SUCCESSFULLY LOAD !');

const ApiUrl = "https://api.quotable.io/random?minLength=80&maxLength=100";

const word = document.getElementById("textcontent");
const input = document.getElementById("textinput");

var displaytime = document.getElementById("statstime");
var displayerror = document.getElementById("statstime");

let lenght = 0;
const textContentRender = async () => {
    const response = await fetch(ApiUrl);
    let data = await response.json();

    // var arr = data.content.split(" ").map((value) => {
    //     lenght++
    //     return value
    // });
    // console.log(lenght)
    // var table
    // for(let i = 0; i < lenght; i++ ){
    //     table[i] = "<span class='chars-unit'>" + arr[i] + "</span>"
    //     console.log(i)
    // }
    // console.log(table)

    // let arr = data.content.split("").map((value) => {
    var table = data.content.split(" ").map((value) => {
        lenght++;
        return value
    });
    console.log(table)
    document.getElementById('test').innerHTML += table.join(" ");


    var arr = data.content.split(" ").map((value) => {
        lenght++;
        return "<span class='chars-unit'>" + value + "</span>"
    });
    // console.log(arr)
    // console.log(arr[1])

    // word.innerHTML += arr.join("");
    // word.innerHTML += arr.join(" ");
    console.log('lenght :', lenght, 'words in the sentence' );
};
// var index = 0;
// input.addEventListener('input', () => { 
//     document.getElementById("tmpp").innerHTML= "start";
// });
 
textContentRender();

var index = 0;
document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        // console.log('Space pressed')
        var word = input.value;
        if(word !== " "){
            index++
        }
        console.log(word, index)
        input.value = ""
    }
})

