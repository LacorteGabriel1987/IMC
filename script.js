
function start() {
    var buttonCalculateImc = document.querySelector('#button-calculate-imc');
    buttonCalculateImc.addEventListener('click', handleCalculateImc);  
    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height'); 
     
    handleCalculateImc();
  }  
  function handleCalculateImc() {
    var inputWeight = Number(document.querySelector('#input-weight').value);
    var inputHeight = Number(document.querySelector('#input-height').value);
  
    var imc = calculateImc(inputWeight, inputHeight);
  
    var resultImc = document.querySelector('#imc');
    resultImc.textContent = imc.toFixed(2).replace('.', ',');
  }
  
  function calculateImc(weight, height) {
    return weight / (height * height);
  }  
  start();  
    
  /*function condicao(){
        if (imc < 18.5){
        console.log (`Abaixo do peso`)
    } else if (imc > 18.60 && imc < 25.00) {
        console.log(`Peso ideal (parabéns)`)
    } else if ( imc >25.00 && imc < 30.00) {
        console.log (`Levemente acimado peso`)
    } else if (imc > 30.00 && imc < 35.00){
        console.log (`Obesidade grau I`)
    } else if (imc > 35 && imc < 40.00) {
        console.log (`Obesidade grau II (severa)`)
    } else {
        console.log (`Obesidade III(mórbita)`) 
    }
    }
   */
  



