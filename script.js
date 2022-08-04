
function start() {
    var buttonCalculateImc = document.querySelector('#button-calculate-imc');
    buttonCalculateImc.addEventListener('click', handleCalculateImc);  
   // var inputWeight = document.querySelector('#input-weight');
    //var inputHeight = document.querySelector('#input-height');      
   // handleCalculateImc();
   
  }  
  function handleCalculateImc() {
    var inputWeight = Number(document.querySelector('#input-weight').value);
    var inputHeight = Number(document.querySelector('#input-height').value);
  
    var imc = calculateImc(inputWeight, inputHeight);
  
    var resultImc = document.querySelector('#imc');
    resultImc.textContent = imc.toFixed(2).replace('.', ',');
    
    condicao(imc)
  }
  
  function calculateImc(weight, height) {
    return weight / (height * height);
    
  }         
  function condicao(imc){
    
    var mensagemIMC = document.querySelector(`#p-mensagem`)
    
        if (imc < 18.5){
        mensagemIMC.textContent = (`Abaixo do peso`)
    } else if (imc > 18.60 && imc < 25.00) {
        mensagemIMC.textContent = (`Peso ideal (parabéns)`)
    } else if ( imc > 25.00 && imc < 30.00) {
        mensagemIMC.textContent = (`Levemente acimado peso`)
    } else if (imc > 30.00 && imc < 35.00){
        mensagemIMC.textContent = (`Obesidade grau I`)
    } else if (imc > 35 && imc < 40.00) {
        mensagemIMC.textContent =  (`Obesidade grau II (severa)`)
    } else {
        mensagemIMC.textContent =  (`Obesidade III(mórbita)`) 
    } 
    }
    
    start();  



