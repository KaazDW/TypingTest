console.log('JS FILE SUCCESSFULLY LOAD !');

const ApiUrl = "https://api.quotable.io/random?minLength=80&maxLength=100";

const word = document.getElementById("textcontent");
const input = document.getElementById("textinput");

var displaytime = document.getElementById("statstime");
var displayerror = document.getElementById("statstime");

let lenght = 0
const textContentRender = async () => {
    const response = await fetch(ApiUrl);
    let data = await response.json();

    var table = data.content.split(" ").map((value) => {
        lenght++;
        return value
    });
    console.log(table)

    let n = 0 //number
    var arr = data.content.split(" ").map((value) => {
        lenght++
        n++
        return "<span id='chars-unit"+n+"'>" + value + "</span>"
    });
    document.getElementById('test').innerHTML += arr.join(" ");
    document.getElementById('chars-unit2').style.color = 'red'

    console.log('lenght :', lenght, 'words in the sentence' );

    var index = 0;
    // console.log(table[index])
    console.log(table[index])
    document.addEventListener('keyup', event => {
        if (event.code === 'Space') {
            // console.log('Space pressed')
            var word = input.value;
            var word = word.replace(' ','')

            // console.log('typeof :', typeof table[index] + ' || ' + 'typeof', typeof word)
            console.log('word.value :', word, 'index :', index, '> :', table[index])
            console.log(word === table[index])
            console.log(word, ' || ', table[index])
            console.log(`${word.length} || ${table[index].length}`);
            console.log()
            console.log(document.getElementById('chars-unit2'))
            console.log('chars-unit' + index)

            if(word === table[index]){
                console.log('Right word')
                console.log('chars-unit'+index)
                idd='chars-unit' + index
                console.log('idd =', idd)
                console.log(document.getElementById(idd))
                // document.getElementById('chars-unit'+index).style.color = 'green'
            } else{
                // document.getElementById('chars-unit'+index).style.color = 'green'
            }



            if(word !== " "){
                index++
            }
            input.value = ""

        }
    })
}; textContentRender();




// var index = 0;
// input.addEventListener('input', () => { 
//     document.getElementById("tmpp").innerHTML= "start";
// });