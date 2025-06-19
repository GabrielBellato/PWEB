// Inicializando variáveis globais
let respostas = [];
let qtdPessimo = 0;
let qtdRegular = 0;
let qtdBom = 0;
let qtdOtimo = 0;
let qtdMulheres = 0;
let qtdHomens = 0;
let qtdOutros = 0;

// Função para gerar dados fictícios aleatórios
function gerarRespostaFicticia() {
    const idades = [18, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65];  // Faixa de idades
    const sexos = ["feminino", "masculino", "outros"];  // Possíveis sexos
    const opinioes = [1, 2, 3, 4];  // Opiniões: 1 (Péssimo), 2 (Regular), 3 (Bom), 4 (Ótimo)

    const idade = idades[Math.floor(Math.random() * idades.length)];
    const sexo = sexos[Math.floor(Math.random() * sexos.length)];
    const opiniao = opinioes[Math.floor(Math.random() * opinioes.length)];

    return { idade, sexo, opiniao };
}

// Função principal que coleta as respostas fictícias
function iniciarPesquisa() {
    const numRespostas = 45;  // Total de 45 participantes
    
    // Gerar 45 respostas fictícias
    for (let i = 0; i < numRespostas; i++) {
        const { idade, sexo, opiniao } = gerarRespostaFicticia();

        // Adicionando a resposta ao array
        respostas.push({ idade, sexo, opiniao });

        // Contabilizando as respostas usando switch case
        switch (opiniao) {
            case 1:
                qtdPessimo++;
                break;
            case 2:
                qtdRegular++;
                break;
            case 3:
                qtdBom++;
                break;
            case 4:
                qtdOtimo++;
                break;
            default:
                break;
        }

        switch (sexo) {
            case "feminino":
                qtdMulheres++;
                break;
            case "masculino":
                qtdHomens++;
                break;
            case "outros":
                qtdOutros++;
                break;
            default:
                break;
        }
    }

    // Exibindo os resultados após coletar todas as respostas
    calcularResultados();
}

function calcularResultados() {
    // Calculando a média da idade
    const somaIdade = respostas.reduce((acc, resposta) => acc + resposta.idade, 0);
    const mediaIdade = somaIdade / respostas.length;

    // Encontrando a idade mais velha e mais nova
    const idades = respostas.map(resposta => resposta.idade);
    const idadeMaisVelha = Math.max(...idades);
    const idadeMaisNova = Math.min(...idades);

    // Calculando a porcentagem de pessoas que responderam ótimo ou bom
    const porcentagemOtimo = (qtdOtimo / respostas.length) * 100;
    const porcentagemBom = (qtdBom / respostas.length) * 100;
    const porcentagemBomOtimo = (qtdBom + qtdOtimo) / respostas.length * 100;

    // Exibindo os resultados
    alert(`Resultados da Pesquisa:
    - Média da Idade: ${mediaIdade.toFixed(2)} anos
    - Idade da pessoa mais velha: ${idadeMaisVelha} anos
    - Idade da pessoa mais nova: ${idadeMaisNova} anos
    - Quantidade de pessoas que responderam Péssimo: ${qtdPessimo}
    - Quantidade de pessoas que responderam Regular: ${qtdRegular}
    - Quantidade de pessoas que responderam Bom: ${qtdBom}
    - Quantidade de pessoas que responderam Ótimo: ${qtdOtimo}
    - Porcentagem de pessoas que responderam Ótimo: ${porcentagemOtimo.toFixed(2)}%
    - Porcentagem de pessoas que responderam Bom: ${porcentagemBom.toFixed(2)}%
    - Porcentagem de pessoas que responderam Ótimo ou Bom: ${porcentagemBomOtimo.toFixed(2)}%
    - Quantidade de mulheres: ${qtdMulheres}
    - Quantidade de homens: ${qtdHomens}
    - Quantidade de outros: ${qtdOutros}`);
}

// Iniciar a pesquisa
iniciarPesquisa();
