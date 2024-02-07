// prendiamo la griglia
const gridElement = document.querySelector("#grid");

//creo una function che generi un array di 100 numeri casuali non ripetibili
function getOrderedNumbersArray() {
    const numbersArray = [];
  
    // Ciclo da 1 a 100 e aggiungo ogni numero all'array
    for (let i = 1; i <= 100; i++) {
      numbersArray.push(i);
    }
  
    return numbersArray;
}
        
//salvo un array di numeri ordinati
const orderNumbersArray = getOrderedNumbersArray();

// griglia 10x10
for(let i = 0; i < 100; i++) {
    
    // creo un elemento, gli metto la classe "square" e lo aggiungo nella griglia
    const newElement = document.createElement("div");
    newElement.classList.add("square");
    newElement.innerText = orderNumbersArray[i];
    
    //aggiungo un event listener ad ogni quadrato che aggiungo
    newElement.addEventListener("click", function() {

        //con this seleziono lo square e aggiungo o tolgo la class active
        this.classList.toggle("active");

        console.log(this.innerText);
    });
    
    gridElement.append(newElement);
}