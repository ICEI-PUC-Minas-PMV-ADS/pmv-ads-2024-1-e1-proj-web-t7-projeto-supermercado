const itens = JSON.parse(localStorage.getItem('itens')) || []

//mostra os detalhes do produto
document.addEventListener('DOMContentLoaded', () => {
    const itemsurl = new URLSearchParams(window.location.search);
    const foto = itemsurl.get('foto');
    const nome = itemsurl.get('nome');
    const preco = itemsurl.get('preco');

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

