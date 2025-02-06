for(let i =0; i<33; i++){
    for(let j = 0; j < 33; j++) {
       const newDiv = document.createElement("div");
       newDiv.classList.add("grid-item");
        document.querySelector("#container").appendChild(newDiv);

        newDiv.addEventListener("mouseover", ( ) => {
            newDiv.style.backgroundColor = "blue";
        })
    
    }
}

document.querySelector("#button").addEventListener("click",() => {
    getUserInput();
    //changeForLoop();
    //changeHeightAndWidth();
})

function getUserInput (){
    prompt("Enter a number for your square x square. No number larger than 100 please!");
}