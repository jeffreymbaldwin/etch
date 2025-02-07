function createGrid16() {
    for(let i =0; i<16; i++){
        for(let j = 0; j <16; j++) {
           const newDiv = document.createElement("div");
           newDiv.classList.add("grid-item");
            document.querySelector("#container").appendChild(newDiv);
    
            newDiv.addEventListener("mouseover", ( ) => {
                newDiv.style.backgroundColor = "blue";
            })
        
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

const container = document.querySelector("#container");

function clearContainer (){
    clearContainer.innerHTML = ""
}

// function createNewGrid(newSize ){
//     const gridItems = document.querySelectorAll(".grid-item");
//     const newWidthHeight = `calc(100% / ${newSize})`;
//     gridItems.forEach(item => {
//         item.style.width = newWidthHeight;
//         item.style.height = newWidthHeight;
//     });
  
// }

createGrid16();


document.querySelector("#button").addEventListener("click", () => {
    changeBoxesButton();
    // clearContainer();
    // createNewGrid();
})