//Lettres : Space, W, A, S, D, F, G
//keyCode :  32   87 65 83 68 70 71
// https://keycode.info/

const suite = [87, 65, 83]
var suiteTest = []

var anim = document.querySelectorAll('.circle');

anim[0].style.animationPlayState = 'paused';
var paused = function () {
    anim[0].style.animationPlayState = 'paused';
}


function touche(e){
    anim[0].style.animationPlayState = 'running';
        
    var touche = event.keyCode;

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

