let player=true;
let twoPlayerMode = true;
let playerX="x:";
let playerO="o:";
let arr=["123","456","789","147","258","369","159","356"]
function setTxt(e){   
    if(twoPlayerMode==true){
        if (player == true) {
            if(e.innerHTML == ''){
                e.innerHTML="x";
                player=false;
                console.log(playerX +=e.getAttribute("data-id"));
          
            }
        }else if (player==false) {
            if(e.innerHTML == ''){
                e.innerHTML="o" ;
                player=true; 
                console.log(playerO +=e.getAttribute("data-id"));
            }           
        }
     }
}
