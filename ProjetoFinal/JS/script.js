
// CONFIGURAÇÕES DA API
const apiKey = '22daae70e16b83b0aeffd661fa396c58';
const apiUrl = 'https://api.themoviedb.org/3';
const imgUrl = 'https://image.tmdb.org/t/p/w500';

// FUNÇÕES DE PERSISTÊNCIA COM LOCALSTORAGE
function salvarFilmesNoStorage() {
  localStorage.setItem('meusFilmes', JSON.stringify(filmes));
}

function carregarFilmesDoStorage() {
  const filmesDoStorage = localStorage.getItem('meusFilmes');
  if (filmesDoStorage) {
    return JSON.parse(filmesDoStorage);
  }
  return [];
}

// INICIALIZAÇÃO DA LISTA DE FILMES
let filmes = carregarFilmesDoStorage();

// FUNÇÕES DE CONTROLE DA LISTA
function mostrarTela(tela) {
  const telas = [
    "tela-lista",
    "tela-cadastro",
    "tela-edicao",
    "tela-visualizacao",
    "tela-busca-api",
  ];
  telas.forEach((t) => {
    const el = document.getElementById(t);
    if (el) el.style.display = t === tela ? "block" : "none";
  });

  if (tela === "tela-lista") {
    listarFilmes();
  }
}

function listarFilmes() {
  const lista = document.getElementById("lista-filmes");
  lista.innerHTML = "";

  if (filmes.length === 0) {
    lista.innerHTML = '<li>Sua lista está vazia. Adicione um filme!</li>';
    return;
  }

  filmes.forEach((filme) => {
    const li = document.createElement("li");
    const posterPath = filme.poster ? filme.poster : 'https://via.placeholder.com/50x75.png?text=Filme';

    // CLASSE PARA CONTROLAR A DIV E NÃO QUEBRAR OS BOTÕES
    li.innerHTML = `
      <img src="${posterPath}" alt="Pôster" style="width: 50px; margin-right: 15px; border-radius: 3px;">
      <span style="flex-grow: 1;">${filme.titulo} (${filme.ano})</span>
      <div class="botoes-acao">
        <button class="btn-ver" onclick="verFilme(${filme.id})">Ver</button>
        <button class="btn-editar" onclick="editarFilme(${filme.id})">Editar</button>
        <button class="btn-excluir" onclick="excluirFilme(${filme.id})">Excluir</button>
      </div>
    `;
    lista.appendChild(li);
  });
}

function pesquisarFilmes() {
    const filtro = document.getElementById("pesquisa").value.toLowerCase();
    const filmesFiltrados = filmes.filter((f) => f.titulo.toLowerCase().includes(filtro));
    
    const lista = document.getElementById("lista-filmes");
    lista.innerHTML = "";

    if (filmesFiltrados.length === 0) {
        lista.innerHTML = '<li>Nenhum filme encontrado na sua lista.</li>';
        return;
    }
  
    filmesFiltrados.forEach((filme) => {
        const li = document.createElement("li");
        const posterPath = filme.poster ? filme.poster : 'https://via.placeholder.com/50x75.png?text=Filme';
        
        // CLASSE PARA CONTROLAR A DIV E NÃO QUEBRAR OS BOTÕES
        li.innerHTML = `
            <img src="${posterPath}" alt="Pôster" style="width: 50px; margin-right: 15px; border-radius: 3px;">
            <span style="flex-grow: 1;">${filme.titulo} (${filme.ano})</span>
            <div class="botoes-acao">
                <button class="btn-ver" onclick="verFilme(${filme.id})">Ver</button>
                <button class="btn-editar" onclick="editarFilme(${filme.id})">Editar</button>
                <button class="btn-excluir" onclick="excluirFilme(${filme.id})">Excluir</button>
            </div>
        `;
        lista.appendChild(li);
    });
}

function verFilme(id) {
  const filme = filmes.find((f) => f.id === id);
  if (!filme) return alert("Filme não encontrado.");

  document.getElementById("ver-poster").src = filme.poster ? filme.poster : 'https://via.placeholder.com/150x225.png?text=Sem+Imagem';
  document.getElementById("ver-titulo").textContent = filme.titulo;
  document.getElementById("ver-diretor").textContent = filme.diretor;
  document.getElementById("ver-ano").textContent = filme.ano;
  document.getElementById("ver-genero").textContent = filme.genero || "-";
  document.getElementById("ver-duracao").textContent = filme.duracao ? `${filme.duracao} min` : "-";
  document.getElementById("ver-elenco").textContent = filme.elenco || "-";
  document.getElementById("ver-classificacao").textContent = filme.classificacao || "-";
  document.getElementById("ver-sinopse").textContent = filme.sinopse || "-";
  document.getElementById("ver-notaUsuario").textContent = filme.notaUsuario || "-";
  document.getElementById("ver-dataAdicao").textContent = new Date(filme.dataAdicao).toLocaleDateString('pt-BR', {timeZone: 'UTC'});

  mostrarTela("tela-visualizacao");
}

function editarFilme(id) {
  const filme = filmes.find((f) => f.id === id);
  if (!filme) return alert("Filme não encontrado.");

  document.getElementById("edit-id").value = filme.id;
  document.getElementById("edit-titulo").value = filme.titulo;
  document.getElementById("edit-diretor").value = filme.diretor;
  document.getElementById("edit-ano").value = filme.ano;
  document.getElementById("edit-genero").value = filme.genero || "";
  document.getElementById("edit-duracao").value = filme.duracao || "";
  document.getElementById("edit-elenco").value = filme.elenco || "";
  document.getElementById("edit-classificacao").value = filme.classificacao || "";
  document.getElementById("edit-sinopse").value = filme.sinopse || "";
  document.getElementById("edit-notaUsuario").value = filme.notaUsuario || "";

  mostrarTela("tela-edicao");
}

function salvarEdicao() {
  const id = parseInt(document.getElementById("edit-id").value);
  const index = filmes.findIndex((f) => f.id === id);
  if (index === -1) {
    alert("Filme não encontrado.");
    return;
  }
  
  const filmeAtualizado = {
    ...filmes[index],
    titulo: document.getElementById("edit-titulo").value.trim(),
    diretor: document.getElementById("edit-diretor").value.trim(),
    ano: parseInt(document.getElementById("edit-ano").value),
    genero: document.getElementById("edit-genero").value.trim(),
    duracao: parseInt(document.getElementById("edit-duracao").value) || "",
    elenco: document.getElementById("edit-elenco").value.trim(),
    classificacao: document.getElementById("edit-classificacao").value.trim(),
    sinopse: document.getElementById("edit-sinopse").value.trim(),
    notaUsuario: document.getElementById("edit-notaUsuario").value || "",
  };

  filmes[index] = filmeAtualizado;
  salvarFilmesNoStorage();
  mostrarTela("tela-lista");
}

function excluirFilme(id) {
  if (!confirm("Tem certeza que deseja excluir este filme da sua lista?")) return;
  filmes = filmes.filter((f) => f.id !== id);
  salvarFilmesNoStorage();
  listarFilmes();
}

// FUNÇÕES DA API TMDB
async function buscarFilmesNaApi() {
  const query = document.getElementById('busca-api-input').value;
  if (!query) {
    alert('Por favor, digite o nome de um filme.');
    return;
  }

  const resultadosContainer = document.getElementById('resultados-api');
  resultadosContainer.innerHTML = '<p>Buscando...</p>';

  try {
    const response = await fetch(`${apiUrl}/search/movie?api_key=${apiKey}&query=${query}&language=pt-BR`);
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      exibirResultadosApi(data.results);
    } else {
      resultadosContainer.innerHTML = '<li>Nenhum filme encontrado com este título.</li>';
    }
  } catch (error) {
    resultadosContainer.innerHTML = '<li>Erro ao buscar filmes. Tente novamente mais tarde.</li>';
    console.error('Erro na API:', error);
  }
}

function exibirResultadosApi(filmesDaApi) {
  const resultadosContainer = document.getElementById('resultados-api');
  resultadosContainer.innerHTML = '';

  filmesDaApi.forEach(filme => {
    const ano = filme.release_date ? filme.release_date.split('-')[0] : 'N/A';
    const posterPath = filme.poster_path ? `${imgUrl}${filme.poster_path}` : 'https://via.placeholder.com/80x120.png?text=Sem+Pôster';

    const filmeDiv = document.createElement('div');
    filmeDiv.classList.add('resultado-item');
    filmeDiv.innerHTML = `
      <img src="${posterPath}" alt="Pôster do filme ${filme.title}">
      <div class="resultado-info">
        <h4>${filme.title} (${ano})</h4>
        <button class="btn-primary" onclick="adicionarFilmeDaApi(${filme.id})">Adicionar à Lista</button>
      </div>
    `;
    resultadosContainer.appendChild(filmeDiv);
  });
}

async function adicionarFilmeDaApi(tmdbId) {
  if (filmes.some(filme => filme.tmdbId === tmdbId)) {
    alert('Este filme já está na sua lista!');
    return;
  }
    
  try {
    const response = await fetch(`${apiUrl}/movie/${tmdbId}?api_key=${apiKey}&language=pt-BR&append_to_response=credits`);
    const detalhes = await response.json();

    const diretor = detalhes.credits.crew.find(membro => membro.job === 'Director');

    const novoFilme = {
      id: filmes.length > 0 ? Math.max(...filmes.map(f => f.id)) + 1 : 1,
      tmdbId: detalhes.id,
      titulo: detalhes.title,
      diretor: diretor ? diretor.name : 'Não informado',
      ano: detalhes.release_date ? parseInt(detalhes.release_date.split('-')[0]) : 0,
      genero: detalhes.genres.map(g => g.name).join(', '),
      duracao: detalhes.runtime || 0,
      elenco: '',
      classificacao: '',
      sinopse: detalhes.overview,
      notaUsuario: '',
      dataAdicao: new Date().toISOString().split("T")[0],
      poster: detalhes.poster_path ? `${imgUrl}${detalhes.poster_path}` : null,
    };

    filmes.push(novoFilme);
    salvarFilmesNoStorage();

    alert(`'${novoFilme.titulo}' foi adicionado à sua lista!`);
    mostrarTela('tela-lista');

  } catch (error) {
    alert('Houve um erro ao adicionar o filme.');
    console.error('Erro ao adicionar da API:', error);
  }
}

mostrarTela("tela-lista");