// function sortear() {
//     let np = 100;

//     let ns = Math.round(Math.random() * np);

//     document.getElementById('d').innerHTML = ns;
// }

function getRandomInt(min, max) {
    min = Math.ceil(1);
    max = Math.floor(60);
    let num1 = Math.floor(Math.random() * (max - min)) + min;
    let num2 = Math.floor(Math.random() * (max - min)) + min;
    let num3 = Math.floor(Math.random() * (max - min)) + min;
    let num4 = Math.floor(Math.random() * (max - min)) + min;
    let num5 = Math.floor(Math.random() * (max - min)) + min;
    let num6 = Math.floor(Math.random() * (max - min)) + min;
    document.getElementById('num1').innerHTML = num1;
    document.getElementById('num2').innerHTML = num2;
    document.getElementById('num3').innerHTML = num3;
    document.getElementById('num4').innerHTML = num4;
    document.getElementById('num5').innerHTML = num5;
    document.getElementById('num6').innerHTML = num6;
}