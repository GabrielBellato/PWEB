function calcularIMC() {

    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    let imc = peso / (altura * altura);

    let classificacao, grauObesidade;

    if (imc < 18.5) {
        classificacao = "Magreza";
        grauObesidade = "0";
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = "Normal";
        grauObesidade = "0";
    } else if (imc >= 25 && imc <= 29.9) {
        classificacao = "Sobrepeso";
        grauObesidade = "I";
    } else if (imc >= 30 && imc <= 39.9) {
        classificacao = "Obesidade";
        grauObesidade = "II";
    } else {
        classificacao = "Obesidade grave";
        grauObesidade = "III";
    }

    document.getElementById('resultado').innerHTML = `
        <p><strong>IMC:</strong> ${imc.toFixed(2)}</p>
        <p><strong>Classificação:</strong> ${classificacao}</p>
        <p><strong>Grau de Obesidade:</strong> ${grauObesidade}</p>
    `;
}