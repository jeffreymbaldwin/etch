const container = document.querySelector("#container");

function defaultGrid ( ) {
    for (let i = 0; i < 16; i++){
        for (let j = 0; j < 16; j++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("grid-item");
            container.appendChild(newDiv);

            newDiv.addEventListener("mouseover", () => {
                newDiv.style.backgroundColor = "blue";
            });
        }
    }
       
}

function changeBoxesButton () {
  const userInput = prompt("Please write a number you want for square x square. No numbers larger than 100")
  if (userInput <= 100 && userInput > 0) {
    gridSize = userInput;
  } else {
    alert("WOW! Really? Enter a valid number between 1 and 100");
  }
    
}


function clearContainer (){
    container.innerHTML = ""
}

function createNewGrid(){
    for (let i = 0; i < gridSize; i++){
        for (let j = 0; j < gridSize; j++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("grid-item");
            container.appendChild(newDiv);

            newDiv.addEventListener("mouseover", () => {
                newDiv.style.backgroundColor = "blue";
            });
        }
    }
    
    const gridItems = document.querySelectorAll(".grid-item");
    const newWidthHeight = `calc(100% / ${gridSize})`;
    gridItems.forEach(item => {
        item.style.width = newWidthHeight;
        item.style.height = newWidthHeight;
    });
  
}

document.querySelector("#button").addEventListener("click", () => {
    changeBoxesButton();
    clearContainer();
    createNewGrid();
})

defaultGrid();

