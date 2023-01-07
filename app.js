document.getElementById('about').style.display = 'none';

const word = document.getElementById("textcontent")

const input = document.getElementById("textinput")
input.select();

const finaldiv = document.getElementById("finalResult")
finaldiv.style.display = 'none'
var FRtable = ["a", "propos", "au-dessus", "à","travers", "agir", "ajouter", "avoir","peur", "après", "âge", "il", "d'accord", "air ", "tous", "seul", "toujours", "suis", "montant", "un", "et", "en","colère", "autre", "répondre", "tout", "n'importe", "apparaître", "pomme", "sont", "zone", "bras", "armée", "autour", "arriver", "art", "comme", "demander", "voler", "tante", "loin", "bébé", "dos", "mauvais", "sac", "boule", "banque", "base", "bain", "être", "haricot", "ours", "lit", "bière", "avant", "commencer", "cloche", "ci-dessous", "meilleur", "grand", "oiseau", "naissance", "mord", "morsure", "noir", "saignement", "bloc", "sang", "coup", "bleu", "planche", "bateau", "corps", "bouillir", "os", "livre", "frontière", "né", "les deux", "bol", "boîte", "garçon", "branche", "courageux", "pain", "pause", "respirer", "pont", "brillant", "apporter", "frère", "marron", "brosse", "construire", "brûler", "bus", "occupé", "mais", "acheter", "par", "gâteau", "appel", "peut", "casquette", "voiture", "carte", "soin", "porter", "étui", "chat", "attraper", "chaise", "chasse", "pas", "fromage", "enfant", "choix", "cercle", "ville", "classe", "intelligent", "propre", "clair","monter", "horloge", "tissu", "nuage", "près", "café", "manteau", "pièce", "froid", "couleur", "peigne", "commun", "comparer", "venir", "contrôler", "cuisiner", "cool", "cuivre", "maïs", "coin", "correct", "coût", "compte", "couvrir", "crash", "croix", "pleurer", "tasse", "couper", "danser", "sombre", "jour", "mort", "décider", "profond", "cerf", "bureau", "mourir", "sale", "plat", "faire", "chien", "porte", "bas", "dessiner", "rêver", "s'habiller", "boire", "conduire", "déposer", "sec", "canard", "poussière", "devoir", "chaque", "oreille", "tôt", "gagner", "terre", "est", "facile", "manger", "effet ", "oeuf", "huit", "autre", "vide", "fin", "ennemi", "profiter", "entrer", "égal", "pair", "événement", "jamais", "chaque", "exact", "sauf", "s'attendre", "expliquer", "visage", "fait", "échouer", "chute", "faux", "famille", "célèbre ", "loin", "ferme", "rapide", "gros", "faute", "peur", "nourrir", "sentir", "fièvre", "peu", "combat", "remplir", "film", "trouver", "fin", "feu", "premier", "poisson", "fit", "cinq", "fix", "flag", "plat", "float", "floor ", "farine", "mouche", "plier", "nourriture", "fou", "pied","pour", "forcer", "forêt", "oublier", "fourchette", "former", "renard", "quatre", "libre", "geler", "frais", "ami", "de ", "avant", "fruit", "complet", "fun", "drôle", "futur", "jeu", "portail", "obtenir", "cadeau", "donner", "heureux", "verre", "aller", "chèvre", "dieu", "or", "bon", "herbe", "tombe", "grand", "vert", "gris", "groupe", "grandir ", "pistolet", "cheveux", "moitié", "centre", "main", "heureux", "dur", "chapeau", "haine", "avoir", "il", "tête", "entendre", "lourd", "coeur", "bonjour", "aide", "poule", "elle", "ici", "cacher", "haut", "colline", "lui", "son", "coup", "passe-temps", "tenir", "trou", "maison", "espoir", "cheval", "chaud", "hôtel", "maison", "comment", "heure", "dépêchez-vous", "blessé", "je", "glace", "idée", "si", "dans", "dans", "inventer", "fer", "est", "île ", "il", "son", "gelée", "travail", "rejoindre", "jus", "sauter", "juste", "garder", "clé", "tuer", "gentil", "roi", "genou", "couteau", "frapper", "savoir", "dame", "lampe", "terre", "grand", "dernier", "tard", "rire", "paresseux", "conduire", "feuille", "apprendre", "partir", "jambe", "gauche", "prêt", "longueur", "moins", "leçon", "laisser","yeux","porter","feuille","attend","mettre","main","outil","toi","nous","vous","ils","sont","tous","et","toute","chauve","sans","cheveux","rire","oiseau"]

console.log('table.lenght :', FRtable.length)

var tablelog = []
function randtab(x){
    for(let i = 0; i < x; i++){
        tab = FRtable[Math.floor(Math.random()*FRtable.length)]
        tablelog.push(tab)
    }
}

randtab(50)

tabledisplayed = []
for(let i = 0; i < tablelog.length; i++){
    tabledisplayed.push("<span id='chars-unit" + i + "'>" + tablelog[i] + "</span>")
}
console.log(tabledisplayed)
console.log(tablelog)
document.getElementById('quote').innerHTML += tabledisplayed.join(" ")
console.log(tablelog[1])
console.log(tabledisplayed[1])


let startingLenght = tablelog.length
// console.log("🚀 ~ file: test.html:89 ~ startingLenght =", startingLenght)

var timerStart = false
var wpmfull = 0
var wpm = 0

let actualLenght = startingLenght
console.log('lenght :', startingLenght, 'words in the sentence' )

document.getElementById('remaining').innerHTML = actualLenght

var index = 0
// console.log('word to type :', table[index])
console.log('actualLenght', actualLenght)
console.log(actualLenght > 0)        

// var timer = 0
// input.addEventListener('input', () => { 

//     // document.getElementById("tmpp").innerHTML= "start";
// });
var count = 0.5
var RecTime 
var rightword = 0
var falseword = 0
var colored = true;

document.getElementById('chars-unit'+(index)).style.color = 'rgb(79, 117, 175)'


document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        // console.log('Space pressed')
        if(timerStart === false){
            RecTime = setInterval(function(){
                count += 1
                console.log(count)
                document.getElementById('statstime').innerHTML = count/100
            }, 10);
            timerStart = true
        }

        console.log(actualLenght)        
        if(actualLenght > 0){
            var word = input.value
            var word = word.replace(' ','')
            input.value = ""

            if(word === "" || input.value === " "){
                return 0
            }
            
            // console.log('typeof :', typeof table[index] + ' || ' + 'typeof', typeof word)
            // console.log('word.value :', word, 'index :', index, '> :', table[index])
            // console.log(word === table[index])
            // console.log(word, ' || ', table[index])
            // console.log(`${word.length} || ${table[index].length}`)

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
            console.log('remaining words :', actualLenght)  
            document.getElementById('remaining').innerHTML = actualLenght


            if(word !== " "){
                index++
            }

            if(actualLenght === 0){
                var duration = count/100
                clearInterval(RecTime)
                input.style.display = 'none'
                document.getElementById("stats").style.display = 'none'
                colored = false;
                console.log( 'duration', duration)
                console.log('rightword', rightword)
                console.log('word', startingLenght)

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

function openAbout(){
    console.log("startdqkfsdjfnksndf")
    document.getElementById('about').style.display = "block"
}
function closeAbout(){
    document.getElementById('about').style.display = "none"
}




