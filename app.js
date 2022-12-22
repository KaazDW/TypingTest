console.log('JS FILE SUCCESSFULLY LOAD !');

const ApiUrl = "https://api.quotable.io/random?minLength=80&maxLength=100";

const word = document.getElementById("textcontent");
const input = document.getElementById("textinput");

var displaytime = document.getElementById("statstime");
var displayerror = document.getElementById("statstime");

let startingLenght = 0
const textContentRender = async () => {
    const response = await fetch(ApiUrl);
    let data = await response.json();

    var table = data.content.split(" ").map((value) => {
        startingLenght++;
        return value
    });
    console.log(table)

    let n = -1 //number
    var arr = data.content.split(" ").map((value) => {
        startingLenght++
        n++
        return "<span id='chars-unit"+n+"'>" + value + "</span>"
    });
    let actualLenght = startingLenght

    document.getElementById('test').innerHTML += arr.join(" ");
    // document.getElementById('chars-unit2').style.color = 'red'

    console.log('lenght :', startingLenght, 'words in the sentence' );

    var index = 0;
    // console.log(table[index])
    console.log('word to type :', table[index])
    // while(actualLenght < 0){
        document.addEventListener('keyup', event => {
            if (event.code === 'Space') {
                // console.log('Space pressed')
                var word = input.value;
                var word = word.replace(' ','')
                input.value = ""

                if(word === "" || input.value === " "){
                    // console.log('ca marche pas ptn')
                    return 0
                }
                
                // console.log('typeof :', typeof table[index] + ' || ' + 'typeof', typeof word)
                console.log('word.value :', word, 'index :', index, '> :', table[index])
                console.log(word === table[index])
                console.log(word, ' || ', table[index])
                console.log(`${word.length} || ${table[index].length}`);
                console.log()
                // console.log(document.getElementById('chars-unit2'))
                // console.log('chars-unit' + index)

                if(word === table[index]){
                    console.log('right input >', 'chars-unit'+index)
                    document.getElementById('chars-unit'+index).style.color = 'green' 
                    actualLenght--
                } else{
                    console.log('false input')
                    document.getElementById('chars-unit'+index).style.color = 'red'
                }
                console.log('remaining words :', actualLenght)  

                if(word !== " "){
                    index++
                }
            }
        })
    // }
}; textContentRender();




// var index = 0;
// input.addEventListener('input', () => { 
//     document.getElementById("tmpp").innerHTML= "start";
// });