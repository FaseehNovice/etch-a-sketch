let container = document.querySelector("#container");
let n = 16;

function creatGrid(containerDiv , noOfGrid){
    for(let i = 0; i < noOfGrid * noOfGrid ; i++){
        let gridDiv = document.createElement("div");

        let reqWidth = (960 -  2 * noOfGrid )/ noOfGrid;

        gridDiv.style.width = reqWidth + "px";
        gridDiv.style.height = reqWidth + "px";
        gridDiv.style.border = "1px solid black";
        gridDiv.style.margin= "0px";
        gridDiv.style.opacity = "0.1"

        gridDiv.addEventListener("mouseenter",() => {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            gridDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            let current = parseFloat(gridDiv.style.opacity) || 0.1;
            if (current < 1) {
                gridDiv.style.opacity = current + 0.1;
            }
    })

        gridDiv.addEventListener("mouseleave",() => {
            gridDiv.style.backgroundColor = "white";
        })

        containerDiv.appendChild(gridDiv);
    }
}

function deleteGrid(container ){
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

creatGrid(container,n);

let btn = document.querySelector("button");

btn.addEventListener("click",() => {

    n = parseInt(prompt("Enter number of rows you want"));
    if(n <= 100 && n >= 0){
        deleteGrid(container);
        creatGrid(container,n);
    }
    else{
        alert("Rows Should be Greater than 0 and less than 100!")
    }
})






