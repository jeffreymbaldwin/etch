for(let i =0; i<16; i++){
    for(let j = 0; j < 16; j++) {
       const newDiv = document.createElement("div");
       newDiv.classList.add("grid-item");
        document.querySelector("#container").appendChild(newDiv);
    
    }
}