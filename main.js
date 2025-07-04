
function calcularINSS() {
  const salarioBrutoInput = document.getElementById("sal_bruto_inss, sal_bruto");
  const salarioBruto = parseFloat(salarioBrutoInput.value); // Converte o valor para número
  
  let inss;

  if (salarioBruto <= 1045) {
    inss = salarioBruto * 0.075;
  } else if (salarioBruto <= 2089.6) {
    inss = salarioBruto * 0.09;
  } else if (salarioBruto <= 3134.4) {
    inss = salarioBruto * 0.12;
  } else if (salarioBruto <= 6101.06) {
    inss = salarioBruto * 0.14;
  } else {
    inss = salarioBruto * 0.14;
  }
  
  const resultadoINSSElement = document.getElementById("resultadoINSS");
  resultadoINSSElement.textContent = `O valor do INSS é: R$ ${inss.toFixed(2)}`;}

  // Adiciona um manipulador de eventos para o botão "Calcular"
  document.addEventListener("DOMContentLoaded", function () {
      const calcularButtonINSS = document.querySelector(".ui-btn");
      calcularButton.addEventListener("click", calcularINSS);
  });
  function calcularFGTS() {

      const salarioBrutoInput = document.getElementById("sal_bruto_fgts, sal_bruto");
      const salarioBruto = parseFloat(salarioBrutoInput.value); // Converte o valor para número
      
      const mesesTrabalhadosInput = document.getElementById("num_dias_fgts");
      const mesesTrabalhados = parseInt(mesesTrabalhadosInput.value);
          
      // Suponha que a alíquota do FGTS seja de 8% do salário bruto
      const aliquotaFGTS = 0.08;
          
      // Calcule o FGTS com base nos meses trabalhados e no salário bruto
      const fgtsMensal = salarioBruto * aliquotaFGTS;
      const fgtsTotal = fgtsMensal * mesesTrabalhados;
                 
      const resultadoFGTSElement = document.getElementById("resultadoFGTS");
      resultadoFGTSElement.textContent = `O valor do FGTS é: R$ ${fgtsMensal.toFixed(2)} por mês.\nO valor do FGTS total por mses trabalhados é: R$ ${fgtsTotal.toFixed(2)}`;
  }
  
  // Adiciona um manipulador de eventos para o botão "Calcular"
  document.addEventListener("DOMContentLoaded", function () {
      const calcularButtonFGTS = document.querySelector(".ui-btn");
      calcularButtonFGTS.addEventListener("click", resultadoFGTS);
  });
  
 
  function calcularIRRF() {
      const salarioBrutoInput = document.getElementById("sal_bruto_irrf, sal_bruto");
      const salarioBruto = parseFloat(salarioBrutoInput.value);
  
      const numDependentesInput = document.getElementById("ndp_irrf");
      const numDependentes = parseInt(numDependentesInput.value);
  
      let impostoDeRenda = 0;
  
      if (salarioBruto <= 1903.98) {
          impostoDeRenda = 0;
      } else if (salarioBruto <= 2826.65) {
          impostoDeRenda = (salarioBruto - 1903.98) * 0.075;
      } else if (salarioBruto <= 3751.05) {
          impostoDeRenda = (salarioBruto - 2826.65) * 0.15;
      } else if (salarioBruto <= 4664.68) {
          impostoDeRenda = (salarioBruto - 3751.05) * 0.225;
      } else {
          impostoDeRenda = (salarioBruto - 4664.68) * 0.275;
      }
  
      // Aplicar desconto por número de dependentes
      const descontoDependentes = numDependentes * 189.59;
      
      // Deduzir o desconto de dependentes do imposto de renda
      impostoDeRenda -= descontoDependentes;
  
      // Certifique-se de que o imposto de renda não seja negativo
      impostoDeRenda = Math.max(impostoDeRenda, 0);
  
      // Calcula o desconto do INSS
      const descontoINSS = salarioBruto * 0.08;
  
      // Calcula o valor final do IRRF após descontos
      const impostoIRRF = impostoDeRenda;
  
      const resultadoIRRFElem = document.getElementById("resultadoIRRF");
      resultadoIRRFElem.textContent = `O valor do IRRF é: R$ ${impostoIRRF.toFixed(2)}`;
  }
  
  // Adicione um manipulador de eventos para o botão "Calcular"
  document.addEventListener("DOMContentLoaded", function () {
      const calcularButton = document.querySelector(".ui-btn");
      calcularButton.addEventListener("click", resultadoIRRF);
  });
  

  function calcularFerias() {
    const salarioBruto = parseFloat(document.getElementById("sal_bruto_ferias").value);
    const diasFerias = parseInt(document.getElementById("diasFerias").value);
    const numDependentes = parseInt(document.getElementById("ndp_ferias").value);

    let valorFerias = salarioBruto * (diasFerias / 30);

    if (numDependentes != 0) {
        const valorPorDependente = 100;
        valorFerias = valorFerias + (numDependentes * valorPorDependente);
    }

    const valorFeriasElement = document.getElementById("resultadoFerias");
    valorFeriasElement.textContent = `O valor das férias é R$ ${valorFerias.toFixed(2)}`;
}
function calcularSalario() {
  const salarioBrutoInput = document.getElementById("sal_bruto");
  const salarioBruto = parseFloat(salarioBrutoInput.value); 

  let inss;

  if (salarioBruto <= 1045) {
    inss = salarioBruto * 0.075;
  } else if (salarioBruto <= 2089.6) {
    inss = salarioBruto * 0.09;
  } else if (salarioBruto <= 3134.4) {
    inss = salarioBruto * 0.12;
  } else if (salarioBruto <= 6101.06) {
    inss = salarioBruto * 0.14;
  } else {
    inss = salarioBruto * 0.14;
  }
  
  const aliquotaFGTS = 0.08;
  const fgts = salarioBruto * aliquotaFGTS;

  let impostoDeRenda = 0;

  if (salarioBruto <= 1903.98) {
    impostoDeRenda = 0;
  } else if (salarioBruto <= 2826.65) {
    impostoDeRenda = (salarioBruto - 1903.98) * 0.075;
  } else if (salarioBruto <= 3751.05) {
    impostoDeRenda = (salarioBruto - 2826.65) * 0.15;
  } else if (salarioBruto <= 4664.68) {
    impostoDeRenda = (salarioBruto - 3751.05) * 0.225;
  } else {
    impostoDeRenda = (salarioBruto - 4664.68) * 0.275;
  }

  // Aqui você deve definir o valor de numDependentes
  const numDependentes = parseInt(document.getElementById("ndp_sal").value);

  const descontoDependentes = numDependentes * 189.59;

  // Deduzir o desconto de dependentes do imposto de renda
  impostoDeRenda -= descontoDependentes;

  // Certifique-se de que o imposto de renda não seja negativo
  impostoDeRenda = Math.max(impostoDeRenda, 0);

  // Calcula o valor final do IRRF após descontos
  const impostoIRRF = impostoDeRenda;

  const totalSalario = salarioBruto - impostoIRRF - inss - fgts;

  const resultadoSalarioElem = document.getElementById("resultadoSalario");
  resultadoSalarioElem.textContent = `O seu salário líquido é: R$ ${totalSalario.toFixed(2)}`;
}

document.addEventListener("DOMContentLoaded", function () {
  const calcularButton = document.querySelector(".ui-btn");
  calcularButton.addEventListener("click", calcularSalario);
});
