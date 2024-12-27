let boxes= document.querySelectorAll(".box");
// let turn= document.querySelector("#turn");
let reset= document.querySelector("#reset");
let turn0=true;

const win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

boxes.forEach(box=>{
    box.addEventListener("click",()=>{
        if(box.innerHTML=="" && turn0){
            box.innerHTML="X";
            turn0=false;
        }
        else if(box.innerHTML=="" && !turn0){
            box.innerHTML="O";
            turn0=true;
        }
        checkWin();
    });
}
);

function checkWin(){
    for(let i=0;i<win.length;i++){
        if(boxes[win[i][0]].innerHTML==boxes[win[i][1]].innerHTML && boxes[win[i][1]].innerHTML==boxes[win[i][2]].innerHTML && boxes[win[i][0]].innerHTML!=""){
            alert(boxes[win[i][0]].innerHTML+" wins!");
            resetGame();
        }
    }
}
resetGame=()=>{
    boxes.forEach(box=>{
        box.innerHTML="";
    });
    turn0=true;
}