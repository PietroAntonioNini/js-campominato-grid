// prendo la griglia
const gridElement = document.querySelector("#grid");

//creo una function che generi un array di 100 numeri ordinati
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

// Creo la select con 3 livelli di difficoltà
const selectElement = document.createElement("select");
selectElement.innerHTML = `
  <option value="1">Difficoltà 1</option>
  <option value="2">Difficoltà 2</option>
  <option value="3">Difficoltà 3</option>
`;

//aggiungo la select a sinistra del titolo
document.querySelector(".container-fluid").prepend(selectElement);


document.querySelector("#play").addEventListener("click", function() {

    document.querySelector(".container").style.display = "flex"; // Mostra la griglia

    //mi salvo una const per prendere il valore dell'elemento select
    const difficultyLevel = selectElement.value;
    console.log(difficultyLevel);

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

})
