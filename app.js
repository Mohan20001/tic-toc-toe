let player=true;
let twoPlayerMode = true;
let playerX="";
let playerO="";
let choiceA=0;
let choiceB=0;
// let arr=["123","456","789","147","258","369","159","356","321"];
let arr=[];
function setTxt(e){   
    if(twoPlayerMode==true){
        if (player == true) {
            if(e.innerHTML == ''){
                    e.innerHTML="x";
                    e.style.color="red";
                    player=false;
                    playerX +=e.getAttribute("data-id");
                    // console.log(playerX +=e.getAttribute("data-id"));
                    checkForGameOver(playerX,arr);

            }
        }else if (player==false) {
            if(e.innerHTML == ''){
                    e.innerHTML="o" ;
                    player=true; 
                    playerO +=e.getAttribute("data-id");
                    // console.log(playerO +=e.getAttribute("data-id"));
                    checkForGameOver(playerO,arr);
            }           
        }
     }
}

let checkForGameOver = (str,list)=>{
     for (let index = 0; index < list.length; index++) {
         if (str == list[index]) {
             console.log("gameover");
             twoPlayerMode=false;
         }
     }
}

let rptn= ()=>{
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j < 10; j++) {
            for (let k = 1; k < 10; k++) {
                // console.log(`${i}${j}${k}`)
                arr.push(`${i}${j}${k}`);
            }
            
        }
        
    }
}
rptn();