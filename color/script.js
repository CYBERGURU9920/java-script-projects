const first= document.getElementsByTagName("body")[0];
function changeColor(name){
    first.style.backgroundColor = name;
}

changeColor();


function rand(){
    return Math.floor(Math.random()*256);

}

function generateColor(){
    let color = `rgb(${rand()}, ${rand()}, ${rand()})`;
    return color;
}