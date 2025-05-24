const receitas = [
    {
        id: 1,
        imagem: "bolo caseiro.jpeg.JPG",
        titulo: "Bolo caseiro",
        descricao: "Um clássico que nunca sai de moda! Este bolo caseiro é fofinho, saboroso e perfeito para acompanhar um café fresco ou um chá da tarde.",
        ingredientes: `
            <ul>
                <li>3 ovos inteiros</li>
                <li>3 xícaras de chá de farinha de trigo com fermento</li>
                <li>1 xícara de chá de leite</li>
                <li>2 xícaras e meia de chá de açúcar refinado</li>
                <li>250 g de margarina</li>
                <li>gotas de baunilha</li>
            </ul>
        `,
        modoPreparo: `
            <h4>Massa</h4>
            <p>
            Na batedeira bata a margarina por uns 2 minutinhos.
            Acrescente aos poucos o açúcar e bata mais um pouco. Acrescente os ovos inteiros, clara com gemas, bata bem.Coloque as gotas de baunilha mas é opcional.
            Vai acrescentando a farinha de trigo e o leite aos poucos, batendo sempre.Coloque esta massa em uma forma untada com margarina e farinha de trigo.
            Leve ao forno pré-aquecido a 180 graus por aproximadamente 40 minutos ou até que o palito saia limpo.
            </p>
        `
    },
    {
        id: 2,
        imagem: "banoffee.jpg",
        titulo: "Bolo Banoffe",
        descricao: "Uma explosão de sabor em cada fatia! O bolo Banoffee combina o doce cremoso do doce de leite, o frescor das bananas maduras e o toque irresistível do chantilly.",
        ingredientes: `
            <ul>
                <li>3 ovos inteiros</li>
                <li>1 xícara chá de Açúcar</li>
                <li>2 Tampinhas Aroma de Baunilha</li>
                <li>1 ½ xícaras chá de Farinha de Trigo</li>
                <li>Canela em Pó a gosto</li>
                <li>100 ml Leite morno</li>
                <li>50 ml Óleo
                <li>1 colher chá de Fermento em Pó Quimico</li>
                <li>2 latas de Leite Condensado cozido</li>
                <li>3 unidades Bananas nanica picadas</li>
                <li>450 ml Leite para umidecer o bolo</li>
                <li>200 g Chantilly</li>
                <li>Chocolate ralado a gosto</li>
                <li>Mini bolachas de maisena</li>
            </ul>
        `,
        modoPreparo: `
            <h4>Massa</h4>
            <p>
            Bata na batedeira os ovos e o açúcar por cerca de 3 minutos até obter uma mistura fofa e com cor mais clara. Adicione o aroma de baunilha e misture novamente. Incorpore a farinha peneirada, uma pitada de canela em pó (A gosto), o fermento em pó, o óleo e o leite aos poucos com um batedor de arame.
            Leve a massa para uma forma untada e enfarinhada com papel manteiga no fundo para o forno pré-aquecido a 180 °C por aproximadamente 45 minutos. 
            </p>
            <h4>Recheio</h4>
            <p>
           Para cozinhar o leite condensado na panela de pressão:
           Coloque a lata na panela de pressão, cubra com água e cozinhe em fogo médio até que a panela apite. Aguarde de 20 a 30 minutos e desligue. Aguarde a pressão sair totalmente para abrir a panela. Não abra antes. 
            </p>
             <h4>Montagem</h4>
             <p>
            Corte o bolo frio em três camadas. Separe uma das camadas em um prato de servir, umedeça a massa com 150ml de leite e cubra com o leite condensado cozido. Espalhe bem. Acrescente as rodelas de banana e polvilhe canela em pó. Repita o processo mais uma vez e finalize com o último disco de massa. 
            Umedeça a última camada de massa com 150ml de leite e guarde o bolo coberto na geladeira. 
            </p>
            <h4>Finalização</h4>
            <p>
            Bata o Creme Tipo Chantilly na batedeira em velocidade média até adquirir uma consistência. Transfira para de um saco de confeiteiro e crie gotinhas em cima da massa. Adicione mini biscoitos maizenas para decoração e chocolate ralado a gosto.
            </p>
        `
		},
    {
        id: 3,
        imagem: "bolo-mousse-de-leite-em-p.jpg",
        titulo: "Bolo de Leite em Pó",
        descricao: "Perfeito para comemorações, o Bolo com Recheio de Leite em Pó é delicioso! O toque especial fica por conta dos nossos confeitos! ",
        ingredientes: `
        <ul>
            <li>5 unidades de Ovos separadas clara e gema (300 g)</li>
            <li>1 ½ xícaras chá de Açúcar (240 g)</li>
            <li>¾ xícara chá de Leite fervente (150 ml)</li>
            <li>1 colher chá de Aroma de Baunilh</li>
            <li>2 ½ xícaras chá de Farinha de Trigo</li>
            <li>1 colher sopa de Fermento em Pó Quimico</li>
            <li>1 pacote de Confeito Estrelinhas</li>
            <li>2 pacotes de Confeito Color Bolinhas</li>
            <li>40 g Leite Condensado</li>
            <li>80 ml Leite</li>
            <li>1 lata de Creme de Leite (300 ml)</li>
            <li>350 g Leite Condensado</li>
            <li>1 ½ xícaras chá de Leite em Pó</li>
            <li>4 folhas de Gelatina em Folha Incolor</li>
            <li>2 unidades de Chantilly (200 g)</li>
        </ul>
    `,
    modoPreparo: `
        <h4>Massa</h4>
        <p>
        1- Pré aqueça o forno na temperatura média (180ºC).
        Em uma batedeira, bata as claras em neve. Adicione aos poucos o açúcar e incorpore as gemas.
        2- Desligue a batedeira e junte a farinha, intercalando com o leite (já misturado com o Aroma Baunilha.)
        3- Acrescente o Fermento em Pó Químico. Coloque em uma forma redonda (20 x 10cm), untada com manteiga e polvilhada com farinha de trigo. Leve ao forno por 30 minutos ou até que, ao espetar um palito, ele saia seco. Retire do forno e desenforme ainda morno.
        Depois de frio, corte o bolo em 3 camadas. Volte 1 camada para a forma já limpa, umedeça com a calda e cubra com metade do recheio. Cubra com a outra camada de bolo, umedeça e preencha com o recheio restante. Finalize com a última camada de bolo, umedeça, e pressione levemente para nivelar. Leve à geladeira por no mínimo 4 horas.
        4- Desenforme e cubra com o Chantilly , preparado de acordo com as instruções da embalagem. Decore com os confeitos Estrelinha e Color Bolinhas.
        </p>
        <h4>Recheio</h4>
        <p>
        Em um liquidificador, bata o creme de leite com o leite condensado, o leite em pó e a Gelatina em Folha Incolor  previamente dissolvida conforme as instruções da embalagem. Reserve por 10 minutos antes de usar. 
        </p>
        <h4>Calda</h4>
        <p>
        Misture o leite com o leite condensado e reserve.
        </p>
        <h4>Cobertura</h4>
        <p>
        Bata o Chantilly seguindo as instruções da embalagem.
        </p>
    `
    },
    {
        id: 4,
        imagem: "bolo-creme-de-pacoca-52395.jpg",
        titulo: "Bolo Paçoca",
        descricao: "O sabor da festa junina o ano todo! Feito com paçoca esfarelada na massa e, se quiser caprichar, também na cobertura, esse bolo é macio, levemente úmido e com aquele gostinho inconfundível de amendoim torrado",
        ingredientes: `
            <ul>
                <li>½ xícara chá de Amendoim</li>
                <li>1 caixa de Pudim Chocolat</li>
                <li>11 colher chá de Fermento em Pó Quimico</li>
                <li>5 colheres sopa de Margarina</li>
                <li>½ xícara chá de Açúcar</li>
                <li>2 unidades de Ovos</li>
                <li>1 xícara chá de Farinha de Trigo</li>
                <li>4 unidades de Paçocas</li>
            </ul>
        `,
        modoPreparo: `
            <h4>Massa</h4>
            <p>
            1. Triture o Amendoim e reserve. 
            2. Bata na batedeira a margarina com o açúcar, em seguida junte os ovos, o Aroma Baunilha Dr. Oetker, o Pudim Chocolate Dr. Oetker, a farinha de trigo, o Amendoim triturado e bata até ficar homogêneo. 
            3. Acrescente o Fermento em Pó Químico Dr. Oetker e misture. 
            4. Coloque em fôrma retangular pequena untada e enfarinhada. 
            5. Leve para assar em forno preaquecido a 180ºC por 35minutos ou até dourar. 
            6. Polvilhe a paçoca sobre o bolo pronto.
            </p>
           
        `
		},
];

const blocoCards = document.querySelector('.cards-blocos');

function exibirReceitas() {
    const blocoCards = document.querySelector('.cards-blocos');

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
}

function obterParametroURL(chave) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(chave);
}

function carregarDetalhesReceita() {
    const idReceita = obterParametroURL('id');
    if (!idReceita) return;

    const receitaSelecionada = receitas.find(item => item.id == idReceita);
    if (!receitaSelecionada) return;

    const containerDetalhes = document.getElementById('detalhes-container');
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
}

if (window.location.pathname.includes('index.html') || window.location.pathname === "/") {
    exibirReceitas();
} else if (window.location.pathname.includes('detalhes.html')) {
    carregarDetalhesReceita();
}