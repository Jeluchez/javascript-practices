class Player {

    constructor() {
        this.point = 0;
        this.win = [];
    }

    changeBy(val) {
        this.point += val;
    }
    increment() {
        this.changeBy(1);
    }
    decrement() {
        if (this.point >= 1) {
            this.changeBy(-1);
        }

    }
    totalPoints() {
        return this.point;
    }
}
// declaramos los competidores para jugar
let player1 = new Player(), player2 = new Player();
// add eventlistener
const btn = document.getElementById('btn-generate');
const btnQuit = document.getElementById('btn-end');
let numGenerated = document.getElementById('num-generated');
// get number random
let getNum;
let comparator = [];
let i = 0;
// generar numero aleatorio
btn.addEventListener('click', function (e) {
    i++;
    getNum = getRandom();
    numGenerated.innerHTML = getNum;
    // introducir los dos numeros a comparar
    comparator.push(getNum);
    // verificar cuantas veces se ha presionado el boton, si una o dos veces. si son dos veces, entonces es porque va una partida, por lo tanto debe reiniciar el contador a 0
    if (i == 2) {
        comparateNums(comparator);
        i = 0;
        comparator = [];
    }
});
// SALIR DEL JUEGO
btnQuit.addEventListener('click', function (e){
    let wins1=showWins(player1.win);
    let wins2=showWins(player2.win);
    console.log('salio');
    let resultados =`
        <p> el player uno gano ${wins1[0]} partidas e hizo ${player1.point} puntos</p>
        <p> el player dos gano ${wins2[0]} partidas e hizo ${player2.point} puntos</p>
    `;
    const res = document.querySelector('.result');
    res.innerHTML = resultados;
    // limpiamos todo el scenario y las variables
    player1=null, player2=null;
    player1 = new Player(), player2 = new Player();
    point1.innerHTML='0';
    point2.innerHTML='0';
    comparator=[];
    i=0;
})
// sale del juego
// genero aleatorio de 1 a 10
function getRandom() {
    return Math.floor(Math.random() * (11 - 1)) + 1;
}
// obtengo los letreros de puntuacion de cada jugador
const point1 = document.querySelector('#p1 .sumado');
const point2 = document.querySelector('#p2 .sumado');

// comparo los numeros que saco cada jugador
function comparateNums(numsArray) {
    if (numsArray[0] > numsArray[1]) {
        player1.increment();
        player2.decrement();
        point1.innerHTML = player1.totalPoints();
        point2.innerHTML = player2.totalPoints();
        //    agregar las partidas que gano o perdio
        player1.win.push(1);
        player2.win.push(0);
    } else if (numsArray[0] === numsArray[1]) {
        console.log('empate');
    }
    else {
        player2.increment();
        player1.decrement();
        point2.innerHTML = player2.totalPoints();
        point1.innerHTML = player1.totalPoints();
        player2.win.push(1);
        player1.win.push(0);
    }
}
function showWins(wins){
    let win=0, lose=0;
    wins.forEach((el,i) => {
        if (el==1) {
            win +=el;
        } else {
            lose +=el
        }
    });
    return [win,lose];
}