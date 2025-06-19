function validarFormulario() {
    const form = document.nomeform;
    const nome = form.elements["nome"].value.trim();
    const email = form.elements["email"].value.trim();
    const comentario = form.elements["comentario"].value.trim();
    const radios = form.elements["primeiravez"];
    let radioSelecionado = false;

    for (const radio of radios) {
        if (radio.checked) {
            radioSelecionado = true;
            break;
        }
    }

    if (!radioSelecionado) {
        alert("Por favor, selecione se é a sua primeira vez nesta página.");
        return false;
    }

    if (nome.length < 10) {
        alert("O nome deve conter no mínimo 10 caracteres.");
        return false;
    }

    if (comentario.length < 20) {
        alert("O comentário deve conter no mínimo 20 caracteres.");
        return false;
    }

    alert("Formulário enviado com sucesso!");
    return true;
}

function verificarVisita() {
    const radios = document.getElementsByName("primeiravez");
    const mensagemDiv = document.getElementById("mensagem");

    for (const radio of radios) {
        if (radio.checked) {
            if (radio.value === "sim") {
                mensagemDiv.textContent = "Volte sempre à está página!";
            } else {
                mensagemDiv.textContent = "Que bom que você voltou a visitar esta página!";
            }
            break;
        }
    }
}
