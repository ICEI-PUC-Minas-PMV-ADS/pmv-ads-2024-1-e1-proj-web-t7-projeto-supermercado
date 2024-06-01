// Obtendo os itens do localStorage
var itens = JSON.parse(localStorage.getItem('itens')) || [];


//mostra o produto no bloco 1
const itenslist1 = document.getElementById('bloco1');

if(itens.length > 0){
    const item1 = itens[0];
    const itemdiv1 = document.createElement('div');
    itemdiv1.innerHTML = 
        `<img src="${item1.foto}" alt="foto do produto">
        <p><a href="../tela-produto/produto.html">${item1.nome}-${item1.marca}</a></p>
        <p>valor R$:${item1.preco}</p>`;
    itenslist1.appendChild(itemdiv1);
}else{
    itenslist1.innerHTML = '<p>lista vazia</p>'
}

//mostra o produto na primeira posiçao no bloco 2
const itenslist2 = document.getElementById('bloco2');

if(itens.length > 0){
    let item2 = itens[1];
    let itemdiv2 = document.createElement('div');
    itemdiv2.innerHTML = 
        `<img src="${item2.foto}" alt="foto do produto">
        <p><a href="../tela-produto/produto.html">${item2.nome}-${item2.marca}</a></p>
        <p>valor R$:${item2.preco}</p>`;
    itenslist2.appendChild(itemdiv2);
}else{
    itenslist2.innerHTML = '<p>lista vazia</p>'
}

//mostra o produto na segunda posiçao no bloco 2
const itenslist3 = document.getElementById('bloco2');

if(itens.length > 0){
    let item3 = itens[2];
    let itemdiv3 = document.createElement('div');
    itemdiv3.innerHTML = 
        `<img src="${item3.foto}" alt="foto do produto">
        <p><a href="../tela-produto/produto.html">${item3.nome}-${item3.marca}</a></p>
        <p>valor R$:${item3.preco}</p>`;
    itenslist3.appendChild(itemdiv3);
}else{
    itenslist3.innerHTML = '<p>lista vazia</p>'
}

//mostra o produto no bloco 3
const itenslist4 = document.getElementById('bloco3');

if(itens.length > 0){
    let item4 = itens[3];
    let itemdiv4 = document.createElement('div');
    itemdiv4.innerHTML = 
        `<img src="${item4.foto}" alt="foto do produto">
        <p><a href="../tela-produto/produto.html">${item4.nome}-${item4.marca}</a></p>
        <p>valor R$:${item4.preco}</p>`;
    itenslist4.appendChild(itemdiv4);
}else{
    itenslist4.innerHTML = '<p>lista vazia</p>'
}

//mostra o produto no bloco 4
const itenslist5 = document.getElementById('bloco4');

if(itens.length > 0){
    let item5 = itens[4];
    let itemdiv5 = document.createElement('div');
    itemdiv5.innerHTML = 
        `<img src="${item5.foto}" alt="foto do produto">
        <p><a href="../tela-produto/produto.html">${item5.nome}-${item5.marca}</a></p>
        <p>valor R$:${item5.preco}</p>`;
    itenslist5.appendChild(itemdiv5);
}else{
    itenslist5.innerHTML = '<p>lista vazia</p>'
}

//mostra o produto no bloco 5
const itenslist6 = document.getElementById('bloco5');

if(itens.length > 0){
    let item6 = itens[5];
    let itemdiv6 = document.createElement('div');
    itemdiv6.innerHTML = 
        `<img src="${item6.foto}" alt="foto do produto">
        <p><a href="../tela-produto/produto.html">${item6.nome}-${item6.marca}</a></p>
        <p>valor R$:${item6.preco}</p>`;
    itenslist6.appendChild(itemdiv6);
}else{
    itenslist6.innerHTML = '<p>lista vazia</p>'
}

//mostra o produto no bloco 6
const itenslist7 = document.getElementById('bloco6');

if(itens.length > 0){
    let item7 = itens[6];
    let itemdiv7 = document.createElement('div');
    itemdiv7.innerHTML = 
        `<img src="${item7.foto}" alt="foto do produto">
        <p><a href="../tela-produto/produto.html">${item7.nome}-${item7.marca}</a></p>
        <p>valor R$:${item7.preco}</p>`;
    itenslist7.appendChild(itemdiv7);
}else{
    itenslist7.innerHTML = '<p>lista vazia</p>'
}

//mostra o produto no bloco 7
const itenslist8 = document.getElementById('bloco7');

if(itens.length > 0){
    let item8 = itens[7];
    let itemdiv8 = document.createElement('div');
    itemdiv8.innerHTML = 
        `<img src="${item8.foto}" alt="foto do produto">
        <p><a href="../tela-produto/produto.html">${item8.nome}-${item8.marca}</a></p>
        <p>valor R$:${item8.preco}</p>`;
    itenslist8.appendChild(itemdiv8);
}else{
    itenslist8.innerHTML = '<p>lista vazia</p>'
}

//mostra o produto no bloco 8
const itenslist9 = document.getElementById('bloco8');

if(itens.length > 0){
    let item9 = itens[8];
    let itemdiv9 = document.createElement('div');
    itemdiv9.innerHTML = 
        `<img src="${item9.foto}" alt="foto do produto">
        <p><a href="../tela-produto/produto.html">${item9.nome}-${item9.marca}</a></p>
        <p>valor R$:${item9.preco}</p>`;
    itenslist9.appendChild(itemdiv9);
}else{
    itenslist9.innerHTML = '<p>lista vazia</p>'
}