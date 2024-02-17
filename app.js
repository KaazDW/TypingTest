// Description: Main script for the typing test app
const word = document.getElementById("textcontent")
const input = document.getElementById("textinput")
const field = document.getElementById("field")
let timerInterval
let indexLetterToTap
let timerStart
let wpmBase
let wpmFinal
let timerValue
let trueWords
let falseWords
let wordRemaining
let nbWordAtStart
let playableWordList

// Final result section display
const resultSection = document.getElementById("finalResult")
resultSection.style.display = 'none'

// Random frequent Word-List by languages
let frWordList = ["lui","ce","moins","bien","plus","cent","en","monsieur","devoir","vieux","un","deux","trois","quatre","cinq","six","sept","huit","neuf","dix","elle","votre","mais","voir","comme","pas","pays","coeur","mon","après","te","trois","son","même","plus","entre","tu","alors","ni","encore","noir","mot","mort","y","parler","bon","de","non","ou","passer","son","frère","terre","aussi","mer","vous","fille","en","amour","père","terre","penser","pouvoir","que","beau","air","ami","main","sur","mille","coeur","premier","ciel","trouver","nous","enfin","seul","tenir","amour","tant","se","quand","ton","à","penser","jamais","monde","mot","dont","yeux","none","encore","donc","ami","prendre","mordre","manger","dire","doit","boire","outil","éteint","mari","chercher","ou","depuis","alors","prendre","ville","parce","que","ciel","voix","voir","grand"];
let enWordList = ["him","this","less","well","more","hundred","in","sir","duty","old","one","two","three","four","five","six","seven","eight","nine","ten","she","your","but","see","as","not","country","heart","my","after","you","three","his","same","more","between","you","then","neither","again","black","word","death","there","speak","good","of","no","or","to pass","its","brother","earth","also","sea","you","daughter","in","love","father","earth","think","power","that","beautiful","air","friend","hand","on","thousand","heart","first","sky","find","we","finally","alone","to hold","love","so much","to be","when","your","to","think","never","world","word","whose","eyes","none","again","so","friend","to take","bite","to eat","to say","must","to drink","tool","off","husband","to look for","or","since","then","to take","city","because","that","sky","voice","see","big"];

// Default language and display
let usedWordList = frWordList;
document.addEventListener('DOMContentLoaded', function(){
    loadSettings();
});

// Reaction to settings change (language and game mode)
const radiosLangs = document.querySelectorAll('nav input[type="radio"]');
radiosLangs.forEach(radio => {
    radio.addEventListener('change', function() {
        loadSettings();
    });
});


function loadSettings(){
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

    if (result.includes('twenty')) {
        reload(5);
    } else if (result.includes('fifty')) {
        reload(50);
    }
}

// Fonction use to reload the game with the number of words to type
function reload(nbWord){
    // Handle display
    resultSection.style.display = 'none'
    field.style.display = 'flex'
    document.getElementById('stats').style.display = 'block'

    // Reset all variables and data displayed
    input.select()
    input.value=""
    indexLetterToTap = 0
    if(timerInterval !== undefined){
        clearInterval(timerInterval)
    }
    playableWordList = []
    document.getElementById('statstime').innerHTML = '0'
    document.getElementById('quote').innerHTML = " "
    timerStart = false
    wpmBase = 0
    wpmFinal = 0
    timerValue = 0
    trueWords = 0
    falseWords = 0
    isColored = true;

    // Fill the playableWordList with random words from the usedWordList
    for(let i = 0; i < nbWord; i++){
        tab = usedWordList[Math.floor(Math.random()*usedWordList.length)]
        playableWordList.push(tab)
    }

    // Format the playableWordList to display it in the HTML document & display it
    tabledisplayed = []
    for(let i = 0; i < playableWordList.length; i++){
        tabledisplayed.push("<span id='chars-unit" + i + "'>" + playableWordList[i] + "</span>")
    }
    document.getElementById('quote').innerHTML += tabledisplayed.join(" ")

    // Color the first word to type
    document.getElementById('chars-unit0').style.color = 'rgb(55, 91, 146)'

    // Init variables with the playableWordList content
    nbWordAtStart = playableWordList.length
    wordRemaining = nbWordAtStart
    document.getElementById('remaining').innerHTML = wordRemaining
}

// event listener for the input field
document.addEventListener('keyup', event => {
    if (event.code === 'Space' || event.code === 'Enter') {
        if(input.value === "" || input.value === " "){
            return 0;
        }

        // Start Timer
        if(timerStart === false){
            timerInterval = setInterval(function(){
                timerValue += 1
                document.getElementById('statstime').innerHTML = timerValue/100
            }, 10);
            timerStart = true
        }

        // Check if the game is not already finished
        if(wordRemaining > 0){
            let word = input.value.replace(' ','')
            input.value = ""

            // Exception if the input is empty
            if(word === "" || input.value === " "){
                return 0
            }

            // Check the validity of the word send
            if(word === playableWordList[indexLetterToTap]){
                trueWords++
                if(wordRemaining !== 0){
                    document.getElementById('chars-unit'+indexLetterToTap).style.color = 'rgb(89, 208, 156)'
                }

            } else{
                falseWords++
                if(wordRemaining !== 0){
                    document.getElementById('chars-unit'+indexLetterToTap).style.color = 'rgb(255, 138, 138)'
                }
            }
            if(word !== " "){
                indexLetterToTap++
            }
            wordRemaining--;
            document.getElementById('remaining').innerHTML = wordRemaining

            // If all words are typed
            if(wordRemaining === 0){
                let duration = timerValue/100
                clearInterval(timerInterval)

                // Handle display
                field.style.display = 'none'
                document.getElementById("stats").style.display = 'none'

                // Calculation of the WPM based on time spend and number of words typed
                wpmBase = (trueWords * 60) / duration
                wpmFinal = wpmBase.toFixed(3);

                // Update finale result section
                document.getElementById("stat-word").innerHTML = nbWordAtStart
                document.getElementById("stat-correct").innerHTML = trueWords
                document.getElementById("stat-duration").innerHTML = `${duration}'`

                if(falseWords === 0)
                    document.getElementById('statserror').innerHTML = 'PERFECT !!';
                else
                    document.getElementById('statserror').innerHTML = falseWords;

                document.getElementById('wpm').innerHTML = wpmFinal

                // Display the final result section
                resultSection.style.display = 'block'

            }else{
                // If all words are not typed yet
                // Color the next word to type in blue
                document.getElementById('chars-unit'+(indexLetterToTap)).style.color = 'rgb(55, 91, 146)'
            }
        }
    }
})

// Shortcuts definitions
document.addEventListener('keyup', event => {
    if (event.code === 'Equal') {
        loadSettings()
    }
});