function abrirCurso() {
    var cursoSelecionado = document.getElementById("cursos").value;

    if (cursoSelecionado !== "") {
        var confirmacao = confirm("Você tem certeza que deseja abrir o curso: " + cursoSelecionado + "?");

        if (confirmacao) {
            var informacoesCurso = {
                "Análise e Desenvolvimento de Sistemas": "Curso voltado para o desenvolvimento de sistemas e análise de dados.",
                "Eletrônica Automotiva": "Curso que aborda a eletrônica aplicada a veículos automotores.",
                "Fabricação Mecânica": "Curso focado no processo de fabricação de peças e equipamentos mecânicos.",
                "Gestão da Qualidade": "Curso que aborda ferramentas e técnicas de gestão da qualidade nas organizações.",
                "Logística": "Curso focado na gestão da cadeia de suprimentos e operações logísticas.",
                "Manufatura Avançada": "Curso que explora tecnologias avançadas no processo de fabricação e produção.",
                "Manutenção de Aeronaves": "Curso focado na manutenção de aeronaves e sistemas aeronáuticos.",
                "Polímeros": "Curso sobre o estudo e processamento de materiais poliméricos.",
                "Processos Metalúrgicos": "Curso que trata dos processos de produção e transformação de metais.",
                "Projetos Mecânicos": "Curso que aborda o projeto e desenvolvimento de sistemas mecânicos.",
                "Sistemas Biomédicos": "Curso voltado para o desenvolvimento e aplicação de sistemas para a área da saúde."
            };

            var janelaCurso = window.open("", "_blank", "width=600,height=300");
            janelaCurso.document.write("<html><head><title>" + cursoSelecionado + "</title></head><body>");
            janelaCurso.document.write("<h1>" + cursoSelecionado + "</h1>");
            janelaCurso.document.write("<p>" + informacoesCurso[cursoSelecionado] + "</p>");
            janelaCurso.document.write("<button onclick='window.close()'>Fechar</button>");
            janelaCurso.document.write("</body></html>");
        }
    }
}
