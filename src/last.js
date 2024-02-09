
const word = document.getElementById("textcontent")

const input = document.getElementById("textinput")
const field = document.getElementById("field")

const finaldiv = document.getElementById("finalResult")
// var FRtable = ["a", "propos", "au-dessus", "à","travers", "agir", "ajouter", "avoir","peur", "après", "âge", "il", "d'accord", "air ", "tous", "seul", "toujours", "suis", "montant", "un", "et", "en","colère", "autre", "répondre", "tout", "n'importe", "apparaître", "pomme", "sont", "zone", "bras", "armée", "autour", "arriver", "art", "comme", "demander", "voler", "tante", "loin", "bébé", "dos", "mauvais", "sac", "boule", "banque", "base", "bain", "être", "haricot", "ours", "lit", "bière", "avant", "commencer", "cloche", "ci-dessous", "meilleur", "grand", "oiseau", "naissance", "mord", "morsure", "noir", "saignement", "bloc", "sang", "coup", "bleu", "planche", "bateau", "corps", "bouillir", "os", "livre", "frontière", "né", "les deux", "bol", "boîte", "garçon", "branche", "courageux", "pain", "pause", "respirer", "pont", "brillant", "apporter", "frère", "marron", "brosse", "construire", "brûler", "bus", "occupé", "mais", "acheter", "par", "gâteau", "appel", "peut", "casquette", "voiture", "carte", "soin", "porter", "étui", "chat", "attraper", "chaise", "chasse", "pas", "fromage", "enfant", "choix", "cercle", "ville", "classe", "intelligent", "propre", "clair","monter", "horloge", "tissu", "nuage", "près", "café", "manteau", "pièce", "froid", "couleur", "peigne", "commun", "comparer", "venir", "contrôler", "cuisiner", "cool", "cuivre", "maïs", "coin", "correct", "coût", "compte", "couvrir", "crash", "croix", "pleurer", "tasse", "couper", "danser", "sombre", "jour", "mort", "décider", "profond", "cerf", "bureau", "mourir", "sale", "plat", "faire", "chien", "porte", "bas", "dessiner", "rêver", "s'habiller", "boire", "conduire", "déposer", "sec", "canard", "poussière", "devoir", "chaque", "oreille", "tôt", "gagner", "terre", "est", "facile", "manger", "effet ", "oeuf", "huit", "autre", "vide", "fin", "ennemi", "profiter", "entrer", "égal", "pair", "événement", "jamais", "chaque", "exact", "sauf", "s'attendre", "expliquer", "visage", "fait", "échouer", "chute", "faux", "famille", "célèbre ", "loin", "ferme", "rapide", "gros", "faute", "peur", "nourrir", "sentir", "fièvre", "peu", "combat", "remplir", "film", "trouver", "fin", "feu", "premier", "poisson", "fit", "cinq", "fix", "flag", "plat", "float", "floor ", "farine", "mouche", "plier", "nourriture", "fou", "pied","pour", "forcer", "forêt", "oublier", "fourchette", "former", "renard", "quatre", "libre", "geler", "frais", "ami", "de ", "avant", "fruit", "complet", "fun", "drôle", "futur", "jeu", "portail", "obtenir", "cadeau", "donner", "heureux", "verre", "aller", "chèvre", "dieu", "or", "bon", "herbe", "tombe", "grand", "vert", "gris", "groupe", "grandir ", "pistolet", "cheveux", "moitié", "centre", "main", "heureux", "dur", "chapeau", "haine", "avoir", "il", "tête", "entendre", "lourd", "coeur", "bonjour", "aide", "poule", "elle", "ici", "cacher", "haut", "colline", "lui", "son", "coup", "passe-temps", "tenir", "trou", "maison", "espoir", "cheval", "chaud", "hôtel", "maison", "comment", "heure", "dépêchez-vous", "blessé", "je", "glace", "idée", "si", "dans", "dans", "inventer", "fer", "est", "île ", "il", "son", "gelée", "travail", "rejoindre", "jus", "sauter", "juste", "garder", "clé", "tuer", "gentil", "roi", "genou", "couteau", "frapper", "savoir", "dame", "lampe", "terre", "grand", "dernier", "tard", "rire", "paresseux", "conduire", "feuille", "apprendre", "partir", "jambe", "gauche", "prêt", "longueur", "moins", "leçon", "laisser","yeux","porter","feuille","attend","mettre","main","outil","toi","nous","vous","ils","sont","tous","et","toute","chauve","sans","cheveux","rire","oiseau"]
var FRtable = ["lui","ce","moins","bien","plus","cent","en","monsieur","devoir","vieux","un","deux","trois","quatre","cinq","six","sept","huit","neuf","dix","elle","votre","mais","voir","comme","pas","pays","coeur","mon","après","te","trois","son","même","plus","entre","tu","alors","ni","encore","noir","mot","mort","y","parler","bon","de","non","ou","passer","son","frère","terre","aussi","mer","vous","fille","en","amour","père","terre","penser","pouvoir","que","beau","air","ami","main","sur","mille","coeur","premier","ciel","trouver","nous","enfin","seul","tenir","amour","tant","se","quand","ton","à","penser","jamais","monde","mot","dont","yeux","none","encore","donc","ami","prendre","mordre","manger","dire","doit","boire","outil","éteint","mari","chercher","ou","depuis","alors","prendre","ville","parce","que","ciel","voix","voir","grand"];
console.log('table.lenght :', FRtable.length)

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
            tab = FRtable[Math.floor(Math.random()*FRtable.length)]
            tablelog.push(tab)
        }
    }

    randtab(nword)

    tabledisplayed = []
    for(let i = 0; i < tablelog.length; i++){
        tabledisplayed.push("<span id='chars-unit" + i + "'>" + tablelog[i] + "</span>")
    }
    console.log(tabledisplayed)
    console.log(tablelog)
    document.getElementById('quote').innerHTML += tabledisplayed.join(" ")
    console.log(tablelog[1])
    console.log(tabledisplayed[1])


    startingLenght = tablelog.length
    // console.log("🚀 ~ file: test.html:89 ~ startingLenght =", startingLenght)



    actualLenght = startingLenght
    console.log('lenght :', startingLenght, 'words in the sentence' )

    document.getElementById('remaining').innerHTML = actualLenght

    // console.log('word to type :', table[index])
    console.log('actualLenght', actualLenght)
    console.log(actualLenght > 0)

    // var timer = 0
    // input.addEventListener('input', () => {

    //     // document.getElementById("tmpp").innerHTML= "start";
    // });


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

        console.log(actualLenght)
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
            console.log('remaining words :', actualLenght)
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

callreload()
function callreload(){
    reload(50);
}

document.getElementById('about').style.display = "block"
document.getElementById('content').style.display = 'block';

// function openAbout(){
//     document.getElementById('about').style.display = "block"
//     console.log("startdqkfsdjfnksndf")
// }

var x = document.getElementById('about');

function showAbout(){
    if (x.style.display == 'none') {
        x.style.display = 'block'
        document.getElementById('about').style.animation = 'OpenAbout .3s';
        setTimeout(() => {
            document.getElementById('content').style.display = 'block';
            document.getElementById('content').style.animation = 'openContent 1s';
        }, 600)
    } else {
        closeAbout()
    }
}
function closeAbout(){
    document.getElementById('content').style.animation = 'closeContent .6s';
    setTimeout(() => {
        document.getElementById('content').style.display = 'none';
        setTimeout(() => {
            document.getElementById('about').style.animation = 'CloseAbout .3s';
            setTimeout(() => {
                x.style.display = 'none';
            }, 300)
        }, 300)
    }, 500)
    input.select();
}
function link(){
    setTimeout(() => {
        window.open("https://stackoverflow.com/", "_blank");
    }, 1100)
}

document.addEventListener('keyup', event => {
    if (event.code === 'Equal') {
        callreload()
        // window.location.reload();
    }
});