
let randomNumber1 = Math.floor(Math.random()*6 + 1);
let randomNumber2 = Math.floor(Math.random()*6 + 1);

let playerOne = document.querySelector('img');
playerOne.setAttribute('src', 'images/dice'+randomNumber1+'.png');

let playerTwo = document.querySelector('#dice2');
playerTwo.setAttribute('src', 'images/dice'+randomNumber2+'.png');

if (randomNumber1 > randomNumber2) {
    let h1 = document.querySelector('h1');
    h1.innerHTML = '🚩Player 1 Wins!';
} else if (randomNumber1 < randomNumber2) {    
    document.querySelector('h1').innerHTML = 'Player 2 Wins!🚩';
} else {
    document.querySelector('h1').innerHTML = 'DRAW';
}

function refreshPage(){
    window.location.reload();
} 