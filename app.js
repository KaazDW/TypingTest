const ApiUrl = "https://api.quotable.io/random?minLength=80&maxLength=100";

const word = document.getElementById("textcontent");
const input = document.getElementById("textinput");

var displaytime = document.getElementById("statstime");
var displayerror = document.getElementById("statstime");

let startingLenght = 0
var timerStart = false

// let RecTime = setInterval({inter}, 1000);
        
// function inter() {
//     timer++
//     console.log(timer)
//     // const d = new Date();
//     // document.getElementById("demo").innerHTML = d.toLocaleTimeString();
// }

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

    document.getElementById('quote').innerHTML += arr.join(" ");

    startingLenght = startingLenght /2
    let actualLenght = startingLenght
    console.log('lenght :', startingLenght, 'words in the sentence' );

    document.getElementById('remaining').innerHTML = actualLenght

    var index = 0;
    console.log('word to type :', table[index])
    console.log('actualLenght', actualLenght)
    console.log(actualLenght > 0)        

    // var timer = 0
    input.addEventListener('input', () => { 

        // document.getElementById("tmpp").innerHTML= "start";
    });
    var count = 0
    var RecTime 
    var rightword = 0
    document.addEventListener('keyup', event => {
        if (event.code === 'Space') {
            // console.log('Space pressed')
            if(timerStart === false){
                RecTime = setInterval(function(){
                    count += 1
                    console.log(count)
                    document.getElementById('statstime').innerHTML = count
                }, 1000);
                timerStart = true;
            }

            console.log(actualLenght)        
            if(actualLenght > 0){
                var word = input.value;
                var word = word.replace(' ','')
                input.value = ""

                if(word === "" || input.value === " "){
                    return 0
                }
                
                // console.log('typeof :', typeof table[index] + ' || ' + 'typeof', typeof word)
                console.log('word.value :', word, 'index :', index, '> :', table[index])
                console.log(word === table[index])
                console.log(word, ' || ', table[index])
                console.log(`${word.length} || ${table[index].length}`);

                if(word === table[index]){
                    console.log('right input >', 'chars-unit'+index)
                    document.getElementById('chars-unit'+index).style.color = 'green' 
                    rightword++
                } else{
                    console.log('false input')
                    document.getElementById('chars-unit'+index).style.color = 'red'
                }

                actualLenght--
                console.log('remaining words :', actualLenght)  
                document.getElementById('remaining').innerHTML = actualLenght


                if(word !== " "){
                    index++
                }

            if(actualLenght === 0){
                var duration = count
                console.log( 'duration', duration)
                console.log('rightword', rightword)
                console.log('word', startingLenght)
                clearInterval(RecTime);
                input.style.display = 'none'
                }
            }
        }
    })
}; textContentRender();




