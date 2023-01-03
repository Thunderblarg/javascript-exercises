//import {calc} from "./calculator";

var op1 = null;
var op2 = null;
var opr = null;

var reset = {reset: false};

function ready(){
    console.log("we in here");
    let display = document.getElementById("display");
    let equals = document.getElementById("equals");
    display.value = 0;
    equals.disabled = true;
    
    for (let idx = 0; idx < 10; idx++){
        let button = document.getElementById("n" + idx.toString());
        document.getElementById("n" + idx.toString()).addEventListener("click", () =>{
            addInput(button, reset);
        });
    }

    document.getElementById("clear").addEventListener("click", function(){
        clear();
    });

    document.getElementById("decimal").addEventListener("click", function(){
        if(display.value.toString().indexOf(".") < 0){
            display.value += ".";
        }
    });

    equals.addEventListener("click", function(){
        if(op1 != 0){
            display.value = operate(opr, Number(op1), Number(display.value))
            equals.disabled = true;
            opr = null;
        }

    });

    
    document.getElementById("plus").addEventListener("click", function(){
        addOperator("add");
    });

    document.getElementById("minus").addEventListener("click", function(){
        addOperator("minus");
    });

    document.getElementById("multiply").addEventListener("click", function(){
        addOperator("multiply");
    });

    document.getElementById("divide").addEventListener("click", function(){
        addOperator("divide")
    });
}

function addOperator(operator){
    op1 = display.value;
    opr = operator;
    reset.reset = true;
}

function clear(){
    op1 = null;
    op2 = null;
    opr = null;
    display.value = 0;
}

function addInput(button, reset){    
    if(display.value.length < 10){
        if(display.value === "0" || reset.reset == true){
            display.value = button.id.substring(1);
            reset.reset = false;
            if(op1)equals.disabled = false;
        }
        else
        {
            display.value += button.id.substring(1);
        }
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
    return operator == "add"        ? add(operand1, operand2)
         : operator == "minus"      ? subtract(operand1, operand2)
         : operator == "multiply"   ? multiply(operand1, operand2)
         : operator == "divide"     ? divide(operand1, operand2)
         : "Somehow you got here, you done goofed";
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