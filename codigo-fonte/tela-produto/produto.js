const itens = JSON.parse(localStorage.getItem('itens')) || []

// função para verificar item para maior 18 anos
function itemMaiorIdade(item) {
    if (item.maiorIdadeSim) {
        return '<p>Para maiores de 18 anos</p>';
    } else {
        return '';
    }
}

function limiteItem(item) {
    if (item.campoLimiteItem != null) {
        return `<p> <strong>limite de itens por pessoa:</strong> ${item.campoLimiteItem}<p>`;
    } else {
        return '';
    }
}

function dataPromo(item) {
    if (item.inicioPromo && item.fimPromo) {
        return `<strong><p> item em promoção:</strong>
        De ${item.inicioPromo} a ${item.fimPromo}</p>`;
    } else {
        return '';
    }
}


//mostra os detalhes do produto
document.addEventListener('DOMContentLoaded', () => {
    const produto = JSON.parse(localStorage.getItem('produto'))
    console.log(produto)

    const main = document.getElementById('main');


    const itemDiv = document.createElement('div');
    itemDiv.innerHTML = `
        <div class="item-imagem">
            <img src="${produto.foto}" alt="Foto do Produto">
        </div>
        <div class="item-container">
            <p>${produto.nome} - ${produto.marca}</p>
            <p>R$ ${produto.preco}</p>
            <p><strong>Categoria: ${produto.categoria}</p>
            <br>
            ${itemMaiorIdade(produto)}
            ${limiteItem(produto)}
            ${dataPromo(produto)}
            <p><strong>Estabelecimento:</strong> ${produto.nomeSupermercado}</p>
            <p><strong>Endereço:</strong><br>${produto.endereco}</p>
            <p><strong>Localização:</strong> Zona ${produto.localizacao}</p>
        </div>
    `;
    main.appendChild(itemDiv)
});


//add item a lista de compras
function addItem(){
    const itemsurl = new URLSearchParams(window.location.search);
    const foto = itemsurl.get('foto');
    const nome = itemsurl.get('nome');
    const preco = itemsurl.get('preco');

    
        const botao = document.querySelector('#botao')
        botao.innerHTML = 'Item Adicionado a sua Lista'
        botao.style.backgroundColor = 'lightgreen'
    
        const lista = {
    
            foto:foto,
            nome:nome,
            preco:preco
            
        };
    
        let listacompras = JSON.parse(localStorage.getItem('listacompras')) || [];
        listacompras.push(lista);
        localStorage.setItem('listacompras', JSON.stringify(listacompras));
    
    }

//itens semalhantes

//1º bloco
document.addEventListener('DOMContentLoaded', () => {
    const aside = document.querySelector('#aside');

    //selecionando itens aleatórios do array
    const randomIndex1 = Math.floor(Math.random() * itens.length);
    const itemRandom1 = itens[randomIndex1]

    // Gerar dinamicamente os elementos clicáveis
    if (itens.length > 0) {
        const data = itemRandom1;
        console.log('Exibindo item:', data);

        const elementDiv = document.createElement('div');
        elementDiv.classList.add('semelhantes');

        //motra a imagem do produto 
        if(itemRandom1.foto){
            const img = document.createElement('img')
            img.src=data.foto
            img.alt=itemRandom1.nome
            elementDiv.appendChild(img)
        }

        //nome do produto-
        const nsemelhante = document.createElement('p')
        nsemelhante.innerHTML = `<p id="nsemelhante">${data.nome}</p> <p id="psemelhante">R$${data.preco}</p>`
        elementDiv.appendChild(nsemelhante)

        aside.appendChild(elementDiv);

        elementDiv.addEventListener('click', () => {
            const url = `../tela-produto/produto.html?foto=${encodeURIComponent(data.foto)}&nome=${encodeURIComponent(data.nome)}&preco=${encodeURIComponent(data.preco)}`;
            window.open(url, '_blank');
        });}}
);

//2º bloco
document.addEventListener('DOMContentLoaded', () => {
    const aside = document.querySelector('#aside');

    //selecionando itens aleatórios do array
    const randomIndex1 = Math.floor(Math.random() * itens.length);
    const itemRandom1 = itens[randomIndex1]

    // Gerar dinamicamente os elementos clicáveis
    if (itens.length > 0) {
        const data = itemRandom1;
        console.log('Exibindo item:', data);

        const elementDiv = document.createElement('div');
        elementDiv.classList.add('semelhantes');

        //motra a imagem do produto 
        if(itemRandom1.foto){
            const img = document.createElement('img')
            img.src=data.foto
            img.alt=itemRandom1.nome
            elementDiv.appendChild(img)
        }

        //nome do produto-
        const nsemelhante = document.createElement('p')
        nsemelhante.innerHTML = `<p id="nsemelhante">${data.nome}</p> <p id="psemelhante">R$${data.preco}</p>`
        elementDiv.appendChild(nsemelhante)

        aside.appendChild(elementDiv);

        elementDiv.addEventListener('click', () => {
            const url = `../tela-produto/produto.html?foto=${encodeURIComponent(data.foto)}&nome=${encodeURIComponent(data.nome)}&preco=${encodeURIComponent(data.preco)}`;
            window.open(url, '_blank');
        });}}
);

