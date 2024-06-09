var list = JSON.parse(localStorage.getItem('lista de compras')) || [];

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



//mostra os produtos semelhantes
const bloco = window.document.querySelector('#aside')

const randomIndex1 = Math.floor(Math.random() * itens.length);
const itemRandom1 = itens[randomIndex1]

if(itens.length > 0){
    const item1 = itemRandom1;
    const itemdiv1 = document.createElement('div');
    itemdiv1.innerHTML = 
        `<img src="${item1.foto}" alt="foto do produto">
        <p><a href="../tela-produto/produto.html" target="_blank" ">${item1.nome}-${item1.marca}</a></p>
        <p>valor R$:${item1.preco}</p>`;
    bloco.appendChild(itemdiv1);
}else{
    bloco.innerHTML = '<p>lista vazia</p>'
}

const randomIndex2 = Math.floor(Math.random() * itens.length);
const itemRandom2 = itens[randomIndex2]

if(itens.length > 0){
    const item2 = itemRandom2;
    const itemdiv2 = document.createElement('div');
    itemdiv2.innerHTML = 
        `<img src="${item2.foto}" alt="foto do produto">
        <p><a href="../tela-produto/produto.html" target="_blank" ">${item2.nome}-${item2.marca}</a></p>
        <p>valor R$:${item2.preco}</p>`;
    bloco.appendChild(itemdiv2);
}else{
    bloco.innerHTML = '<p>lista vazia</p>'
}
