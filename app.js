//Lettres : Space, W, A, S, D, F, G
//keyCode :  32   87 65 83 68 70 71
// https://keycode.info/

const suite = [87, 65, 83]
var suiteTest = []

correspondance = ['w','a','s','d','f','g','rightArrow','leftArrow','upArrow','downArrow','space']
correspondance2= [87, 65, 83, 68, 70, 71, 39, 37, 38, 40, 32]
correspondance3= ['gold.png','lead.png','phosphorerus.png','platinium.png','potassium.png','tin.png','zinc.png','','','','']


var anim = document.querySelectorAll('.circle');

img = document.getElementById('image');

paused;
var paused = function () {
    anim[0].style.animationPlayState = 'paused';
    img.src = ''
}

img.src = ''

function touche(e){
    anim[0].style.animationPlayState = 'running';
        
    var touche = event.keyCode;

    img.src = 'symbols/'+correspondance3[correspondance2.indexOf(touche)];

    console.log(`keyCode "${touche}" pressed.`);
    suiteTest.push(touche);

    if (suite[suiteTest.length-1] !== suiteTest[suiteTest.length-1]) suiteTest = [];
    console.log(`suiteTest = [${suiteTest}], suite = [${suite}]`);

    if (suite[suite.length-1] == suiteTest[suite.length-1]) {
        suiteTest = []
        alert('good')
    };

    setTimeout(paused, 990);
}

