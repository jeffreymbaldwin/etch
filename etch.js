for(let i =0; i<64; i++){
    for(let j = 0; j <64; j++) {
       const newDiv = document.createElement("div");
       newDiv.classList.add("grid-item");
        document.querySelector("#container").appendChild(newDiv);

        newDiv.addEventListener("mouseover", ( ) => {
            newDiv.style.backgroundColor = "blue";
        })
    
    }
}

