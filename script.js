const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const form = document.querySelector('#form');
const btnSuma = document.querySelector('#btnCalcular');
const btnResta = document.querySelector('#btnCalcular1');

const pResult = document.querySelector('#resultado');


//form.addEventListener('submit', sumarInputValues);
btnResta.addEventListener('click', RestarInputValues)

function sumarInputValues(event){
    event.preventDefault();
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;

}

function RestarInputValues(event){
    const restaInputs = parseInt(input1.value) - parseInt(input2.value);
    pResult.innerText = "Resultado: " + restaInputs;

}

