
const word = document.getElementById("textcontent")
const input = document.getElementById("textinput")
const field = document.getElementById("field")

const finaldiv = document.getElementById("finalResult")


// Random frequent Word-List by languages
var frWordList = ["lui","ce","moins","bien","plus","cent","en","monsieur","devoir","vieux","un","deux","trois","quatre","cinq","six","sept","huit","neuf","dix","elle","votre","mais","voir","comme","pas","pays","coeur","mon","après","te","trois","son","même","plus","entre","tu","alors","ni","encore","noir","mot","mort","y","parler","bon","de","non","ou","passer","son","frère","terre","aussi","mer","vous","fille","en","amour","père","terre","penser","pouvoir","que","beau","air","ami","main","sur","mille","coeur","premier","ciel","trouver","nous","enfin","seul","tenir","amour","tant","se","quand","ton","à","penser","jamais","monde","mot","dont","yeux","none","encore","donc","ami","prendre","mordre","manger","dire","doit","boire","outil","éteint","mari","chercher","ou","depuis","alors","prendre","ville","parce","que","ciel","voix","voir","grand"];
var enWordList = ["him","this","less","well","more","hundred","in","sir","duty","old","one","two","three","four","five","six","seven","eight","nine","ten","she","your","but","see","as","not","country","heart","my","after","you","three","his","same","more","between","you","then","neither","again","black","word","death","there","speak","good","of","no","or","to pass","its","brother","earth","also","sea","you","daughter","in","love","father","earth","think","power","that","beautiful","air","friend","hand","on","thousand","heart","first","sky","find","we","finally","alone","to hold","love","so much","to be","when","your","to","think","never","world","word","whose","eyes","none","again","so","friend","to take","bite","to eat","to say","must","to drink","tool","off","husband","to look for","or","since","then","to take","city","because","that","sky","voice","see","big"];

// Default language init to french
var usedWordList = frWordList;

const radiosLangs = document.querySelectorAll('nav input[type="radio"]');

radiosLangs.forEach(radio => {
    radio.addEventListener('change', function() {
    console.log("checkSettings", checkSettings());
    });
});

function checkSettings(){
    let result = [];
    radiosLangs.forEach(radio => {
        if (radio.value === 'fr' && radio.checked) {
            usedWordList = frWordList;
            result.push('fr');
        } else if (radio.value === 'en' && radio.checked) {
            usedWordList = enWordList;
            result.push('en');
        } else if (radio.value === 'twenty' && radio.checked) {
            result.push('twenty');
        } else if (radio.value === 'fifty' && radio.checked) {
            result.push('fifty');
        }
    });
    return result;
}

finaldiv.style.display = 'none'

let RecTime = undefined
var index
var timerStart
var wpmfull
var wpm
var count 
var rightword
var falseword
var colored
let actualLenght
let startingLenght
var tablelog

function reload(nword){
    finaldiv.style.display = 'none'
    field.style.display = 'flex'
    document.getElementById('stats').style.display = 'block'

    input.select()
    input.value=""
    index = 0
    if(RecTime !== undefined){
        clearInterval(RecTime)
    }
    tablelog = []
    document.getElementById('statstime').innerHTML = '0'

    document.getElementById('quote').innerHTML = " "

    timerStart = false
    wpmfull = 0
    wpm = 0
    count = 0.5
    rightword = 0
    falseword = 0
    colored = true;

    function randtab(x){
        for(let i = 0; i < x; i++){
            tab = usedWordList[Math.floor(Math.random()*usedWordList.length)]
            tablelog.push(tab)
        }
    }

    randtab(nword)

    tabledisplayed = []
    for(let i = 0; i < tablelog.length; i++){
        tabledisplayed.push("<span id='chars-unit" + i + "'>" + tablelog[i] + "</span>")
    }
    // console.log(tabledisplayed)
    // console.log(tablelog)
    document.getElementById('quote').innerHTML += tabledisplayed.join(" ")
    // console.log(tablelog[1])
    // console.log(tabledisplayed[1])


    startingLenght = tablelog.length

    actualLenght = startingLenght
    // console.log('lenght :', startingLenght, 'words in the sentence' )

    document.getElementById('remaining').innerHTML = actualLenght

    // console.log('word to type :', table[index])
    // console.log('actualLenght', actualLenght)
    // console.log(actualLenght > 0)

    document.getElementById('chars-unit'+(index)).style.color = 'rgb(79, 117, 175)'
}
    document.addEventListener('keyup', event => {
        if (event.code === 'Space' || event.code === 'Enter') {
            // console.log('Space pressed')
            if(timerStart === false){
                RecTime = setInterval(function(){
                    count += 1
                    // console.log(count)
                    document.getElementById('statstime').innerHTML = count/100
                }, 10);
                timerStart = true
            }

            // console.log(actualLenght)
            if(actualLenght > 0){
                var word = input.value
                var word = word.replace(' ','')
                input.value = ""

                if(word === "" || input.value === " "){
                    return 0
                }

                if(word === tablelog[index]){
                    rightword++
                    // console.log('right input >', 'chars-unit'+index)
                    if(actualLenght !== 0){
                        document.getElementById('chars-unit'+index).style.color = 'rgb(89, 208, 156)'
                    }
                } else{
                    falseword++
                    // console.log('false input')
                    if(actualLenght !== 0){
                        document.getElementById('chars-unit'+index).style.color = 'rgb(255, 138, 138)'

                    }
                }

                actualLenght--
                // console.log('remaining words :', actualLenght)
                document.getElementById('remaining').innerHTML = actualLenght

                if(word !== " "){
                    index++
                }

                if(actualLenght === 0){
                    var duration = count/100
                    clearInterval(RecTime)
                    Rectime = undefined
                    field.style.display = 'none'
                    document.getElementById("stats").style.display = 'none'
                    colored = false;
                    // console.log( 'duration', duration)
                    // console.log('rightword', rightword)
                    // console.log('word', startingLenght)

                    wpmfull = (rightword * 60) / duration
                    wpm = wpmfull.toFixed(3);
                    
                    document.getElementById("stat-word").innerHTML = startingLenght
                    document.getElementById("stat-correct").innerHTML = rightword
                    document.getElementById("stat-duration").innerHTML = `${duration}'`

                    if(falseword == 0)
                        document.getElementById('statserror').innerHTML = 'PERFECT !!';
                    else 
                        document.getElementById('statserror').innerHTML = falseword;

                        
                    // document.getElementById('wpmf').innerHTML = wpmfull
                    document.getElementById('wpm').innerHTML = wpm
                    finaldiv.style.display = 'block'

                }else{
                    document.getElementById('chars-unit'+(index)).style.color = 'rgb(55, 91, 146)' 
                }
            }
        }
    })

callreload()
function callreload(){
    reload(50);
}

// document.getElementById('about').style.display = "block"
// document.getElementById('content').style.display = 'block';

// function openAbout(){
//     document.getElementById('about').style.display = "block"
//     console.log("startdqkfsdjfnksndf")
// }

// var x = document.getElementById('about');

// function showAbout(){
//     if (x.style.display == 'none') {
//         x.style.display = 'block'
//         document.getElementById('about').style.animation = 'OpenAbout .3s';
//         setTimeout(() => {
//             document.getElementById('content').style.display = 'block';
//             document.getElementById('content').style.animation = 'openContent 1s';
//           }, 600)
//     } else {
//         closeAbout()
//     }
// }
// function closeAbout(){
//     document.getElementById('content').style.animation = 'closeContent .6s';
//     setTimeout(() => {
//         document.getElementById('content').style.display = 'none';
//         setTimeout(() => {
//             document.getElementById('about').style.animation = 'CloseAbout .3s';
//             setTimeout(() => {
//                     x.style.display = 'none';
//             }, 300)
//         }, 300)
//     }, 500)
//     input.select();
// }
// function link(){
//     setTimeout(() => {
//         window.open("https://stackoverflow.com/", "_blank");
//     }, 1100)
// }

document.addEventListener('keyup', event => {
    if (event.code === 'Equal') {
        callreload()
    }
});