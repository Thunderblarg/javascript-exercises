//import {calc} from "./calculator";

function ready(){
    console.log("we in here");
    display = document.getElementById("display");
    display.value = 0;

    for (let idx = 0; idx < 10; idx++){
        let goddamnit = "n" + idx.toString();
        console.log(goddamnit);
        let button = document.getElementById(goddamnit);
        console.log(button);
        //button.addEventListener("click", addInput(button));
        document.getElementById("n" + idx.toString()).addEventListener("click", addInput(button));
    }    
}

function addInput(button){    
    if(display.value == 0){
        display.value = button.id.substring(1);
    }
    else
    {
        display.value += button.id.substring(1);
    }
}

document.addEventListener( "DOMContentLoaded", function() {
    document.removeEventListener("DOMContentLoaded", arguments.callee, false );
    ready();
}, false );



function initializeGrid(gridSizeX, gridSizeY){
    console.log(`Initializing grid of size ${gridSizeX} by ${gridSizeY}`);
    calc = document.getElementById("calcContainer");
    for(Yidx = 0; Yidx < gridSizeY; Yidx++){
        for(Xidx = 0; Xidx < gridSizeX; Xidx++){
            calc.innerHTML += `<div class="calcButton">sdf</div>`;
        }
    }
    calc.style.cssText += `display: grid;
                           grid-template-columns: repeat(${gridSizeX}, auto);
                           grid-template-rows: repeat(${gridSizeY}, auto);`;
}

function operate(operator, operand1, operand2){

}

const add = function(one, two) {
	return one + two;
};

const subtract = function(one, two) {
	return one - two;
};

const multiply = function(one, two) {
    return one * two;
};

const divide = function(one, two) {
    return one / two;
};


    /*
    document.querySelectorAll(".gridCell").forEach(cell =>{
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = `rgb(${random28BitInt(256)}, ${random28BitInt(256)}, ${random28BitInt(256)})`;
            handleTransparency(cell);
        });
    });
    */
//}