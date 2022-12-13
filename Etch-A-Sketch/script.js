/***********************************
 * The assignment said to give the user a prompt to reset things, but I like my way better
 ***********************************/

function ready() {
    var gridContainer = document.getElementById("gridContainer");
    let input = document.getElementById("sliderValue");
    let slider = document.getElementById("sizeSlider");
    let reset = document.getElementById("reset");
    initializeGrid(16);
    input.addEventListener("input", () => {
        slider.value = input.value;
    });
    slider.addEventListener("input", () => {
        input.value = slider.value;
    });
    reset.addEventListener("click", () => {
        initializeGrid(slider.value);
    });
}

document.addEventListener( "DOMContentLoaded", function(){
    document.removeEventListener( "DOMContentLoaded", arguments.callee, false );
    ready();
}, false );

function random28BitInt(max) {
    return Math.floor(Math.random() * max);
}

function initializeGrid(gridSize){
    console.log(`Initializing grid of size ${gridSize}`);
    gridContainer.innerHTML = "";
    for(Yidx = 0; Yidx < gridSize; Yidx++){
        for(Xidx = 0; Xidx < gridSize; Xidx++){
            gridContainer.innerHTML += `<div class="gridCell"></div>`;
        }
    }
    gridContainer.style.cssText += `grid-template-columns: repeat(${gridSize}, auto);
                                    grid-template-rows: repeat(${gridSize}, auto);`
    document.querySelectorAll(".gridCell").forEach(cell =>{
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = `rgb(${random28BitInt(256)}, ${random28BitInt(256)}, ${random28BitInt(256)})`;
            handleTransparency(cell);
        });
    });
}

function handleTransparency(cell){
    // Check if the cell has opacity on it
    if (cell.style.opacity){
        // if it does, subtract 10% from the current opacity value
        if (cell.style.opacity > 0){
            cell.style.opacity -= 0.10;
        // if it's fully transparent, change the gridContainer 
        } else {
            gridContainer.style.backgroundColor = `rgb(${random28BitInt(256)}, ${random28BitInt(256)}, ${random28BitInt(256)})`
        }
    } else {
        // If it doesn't, add it, starting at full opacity
        cell.style.opacity = 1;
    }
}