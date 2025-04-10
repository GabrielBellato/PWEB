// 1) Função para receber três números e retornar o maior deles
function maiorNumero(num1, num2, num3) {
    return Math.max(num1, num2, num3);
  }
  
  // 2) Função para receber três números e retorná-los em ordem crescente
  function ordemCrescente(num1, num2, num3) {
    let numeros = [num1, num2, num3];
    numeros.sort((a, b) => a - b); // Ordena os números em ordem crescente
    return numeros;
  }
  
  // 3) Função para receber uma string e retornar se ela é um palíndromo (considerando maiúsculas)
  function verificarPalindromo(str) {
    // Converte a string para maiúsculas e remove espaços
    str = str.toUpperCase().replace(/\s+/g, '');
    let strInvertida = str.split('').reverse().join('');
    return str === strInvertida ? "A string é um palíndromo." : "A string não é um palíndromo.";
  }
  
  // 4) Função para verificar se três valores formam um triângulo e qual o tipo
  function tipoTriangulo(a, b, c) {
    // Verifica se os lados podem formar um triângulo
    if (a + b > c && b + c > a && a + c > b) {
      // Verifica o tipo de triângulo
      if (a === b && b === c) {
        return "É um triângulo equilátero.";
      } else if (a === b || b === c || a === c) {
        return "É um triângulo isósceles.";
      } else {
        return "É um triângulo escaleno.";
      }
    } else {
      return "Os valores não formam um triângulo.";
    }
  }
  
  // Função para exibir o menu e capturar a escolha do usuário
  function exibirMenu() {
    let opcao = prompt(`
      Escolha uma das opções abaixo:
      1 - Maior entre três números
      2 - Ordenar três números em ordem crescente
      3 - Verificar se uma string é um palíndromo
      4 - Verificar se três valores formam um triângulo e seu tipo
    `);
  
    // Solicitar os números ou a string, dependendo da opção escolhida
    if (opcao === '1') {
      let num1 = parseFloat(prompt("Digite o primeiro número:"));
      let num2 = parseFloat(prompt("Digite o segundo número:"));
      let num3 = parseFloat(prompt("Digite o terceiro número:"));
      alert("O maior número é: " + maiorNumero(num1, num2, num3));
    } else if (opcao === '2') {
      let num1 = parseFloat(prompt("Digite o primeiro número:"));
      let num2 = parseFloat(prompt("Digite o segundo número:"));
      let num3 = parseFloat(prompt("Digite o terceiro número:"));
      alert("Os números em ordem crescente são: " + ordemCrescente(num1, num2, num3).join(', '));
    } else if (opcao === '3') {
      let str = prompt("Digite uma string:");
      alert(verificarPalindromo(str));
    } else if (opcao === '4') {
      let a = parseFloat(prompt("Digite o primeiro lado do triângulo:"));
      let b = parseFloat(prompt("Digite o segundo lado do triângulo:"));
      let c = parseFloat(prompt("Digite o terceiro lado do triângulo:"));
      alert(tipoTriangulo(a, b, c));
    } else {
      alert("Opção inválida. Por favor, escolha uma opção válida.");
    }
  }
  
  // Chamar a função para exibir o menu
  exibirMenu();
  