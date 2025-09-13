let container = document.querySelector("#container");


for(let i = 0; i < 256 ; i++){
    let gridDiv = document.createElement("div");

    gridDiv.style.width = "21px";
    gridDiv.style.height = "21px";
    gridDiv.style.border = "2px solid black";
    gridDiv.style.margin= "0px"

    container.appendChild(gridDiv);
}
container.style,justifyContent = "center";





