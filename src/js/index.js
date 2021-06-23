import "../css/style.scss";
import Square from "./classes/Square";
import Circle from "./classes/Circle";


const holder = document.querySelector(".container");
const arrShapes = [];
let intervalPauze = false;
const startKnop = document.querySelector(".startknop");
const stopKnop = document.querySelector(".stopknop");
const resetKnop = document.querySelector(".resetknop");

const interval = setInterval(function(){
    if(!intervalPauze){
    arrShapes.push(new Circle(500,30,150,holder),new Square(20, 20, 200, holder));
    console.log(arrShapes.length);
    document.querySelector('.count').innerText = `Aantal vormen : `+arrShapes.length;
    console.log(arrShapes)
    if(arrShapes.length===50){
        document.querySelector('.container').innerHTML="";
        arrShapes.length = 0;
        
        // `<div class ="container">Gewonnen!</div>`
        // clearMyInterval();
    }}
},1000)

startKnop.onclick = () => {
    console.log("start")
    intervalPauze = false;
}

stopKnop.onclick = () => {
    console.log("stop")
    intervalPauze = true;
}

resetKnop.onclick = () => {
    console.log("reset")
    intervalPauze = true;
    document.querySelector('.container').innerHTML="";
    arrShapes.length = 0;
    document.querySelector('.count').innerText = `Aantal vormen : `+arrShapes.length
}



function clearMyInterval(){
    clearInterval(interval);
}

// new Square(400, 300, 400, holder);

