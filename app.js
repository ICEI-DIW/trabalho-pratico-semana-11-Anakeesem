const blocoCards = document.querySelector('.cards-blocos');

async function exibirReceitas() {
  const blocoCards = document.querySelector('.cards-blocos');

  try {
    const response = await fetch('http://localhost:3000/receitas');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const receitas = await response.json();

    receitas.forEach(receita => {
      const bloco = document.createElement('article');
      bloco.classList.add('col-12', 'col-sm-6', 'col-lg-3', 'mb-4');

      bloco.innerHTML = `
        <a href="detalhes.html?id=${receita.id}" class="text-decoration-none text-dark">
          <div class="card-bolo text-center">
            <img src="${receita.imagem}" alt="${receita.titulo}" class="img-fluid" />
            <h3>${receita.titulo}</h3>
            <p class="intro">${receita.descricao}</p>
          </div>
        </a>
      `;
      blocoCards.appendChild(bloco);
    });
  } catch (error) {
    console.error('Erro ao buscar as receitas:', error);
 
    blocoCards.innerHTML = '<p>Não foi possível carregar as receitas. Tente novamente mais tarde.</p>';
  }
}

function obterParametroURL(chave) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(chave);
}

async function carregarDetalhesReceita() {
  const idReceita = obterParametroURL('id');
  if (!idReceita) return;

  const containerDetalhes = document.getElementById('detalhes-container');

  try {
    const response = await fetch(`http://localhost:3000/receitas/${idReceita}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const receitaSelecionada = await response.json();

    if (!receitaSelecionada) {
      containerDetalhes.innerHTML = '<p>Receita não encontrada.</p>';
      return;
    }

    containerDetalhes.innerHTML = `
      <div class="row">
        <div class="col-md-6">
          <h2>${receitaSelecionada.titulo}</h2>
          <img src="${receitaSelecionada.imagem}" alt="${receitaSelecionada.titulo}" class="img-fluid my-3" />
          <h4>Ingredientes da Receita</h4>
          ${receitaSelecionada.ingredientes}
        </div>
        <div class="col-md-6">
          <h4>Como preparar:</h4>
          ${receitaSelecionada.modoPreparo}
        </div>
      </div>
    `;
  } catch (error) {
    console.error('Erro ao carregar detalhes da receita:', error);
    containerDetalhes.innerHTML = '<p>Não foi possível carregar os detalhes da receita. Tente novamente mais tarde.</p>';
  }
}

if (window.location.pathname.includes('index.html') || window.location.pathname === "/") {
  exibirReceitas();
} else if (window.location.pathname.includes('detalhes.html')) {
  carregarDetalhesReceita();
}