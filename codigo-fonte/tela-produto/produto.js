var list = JSON.parse(localStorage.getItem('lista de compras')) || [];

const itens = JSON.parse(localStorage.getItem('itens')) || []

//mostra os detalhes do produto
document.addEventListener('DOMContentLoaded', () => {
    const itemsurl = new URLSearchParams(window.location.search);
    const foto = itemsurl.get('foto');
    const nome = itemsurl.get('nome');
    const preco = itemsurl.get('preco')

    const main =document.getElementById('main');

    //mostra a foto do produto
    const img = document.createElement('img')
    img.src = foto
    img.alt = nome
    main.appendChild(img)
     
    //mostra o nome do produto
    const mostranome = document.createElement('p')
    mostranome.textContent = nome
    mostranome.classList.add('nomeproduto')
    main.appendChild(mostranome)

    //mostra o preço do produto
    const mostrapreco = document.createElement('p')
    mostrapreco.innerHTML = `R$${preco}`
    mostrapreco.classList.add('preco')
    main.appendChild(mostrapreco)

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
