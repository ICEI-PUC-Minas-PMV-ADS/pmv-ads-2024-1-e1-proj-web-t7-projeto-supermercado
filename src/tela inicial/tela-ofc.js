// Variável global para armazenar a localização selecionada
let localizacaoSelecionada = '';
let resultadosFiltrados = []

// Evento para selecionar a localização e aplicar filtro
document.getElementById('regiaoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    //document.querySelector('.conteiner').style.display = 'none';
    localizacaoSelecionada = document.getElementById('localizacao').value.trim().toLowerCase();
    filtrarItens();
});

// Evento para o formulário de busca por texto e aplicar filtro
document.getElementById('filtroForm').addEventListener('submit', function(event) {
    event.preventDefault();
   // document.querySelector('.conteiner').style.display = 'none';
    filtrarItens();
});

// Função de filtragem
function filtrarItens() {
    // Obtém o valor digitado no campo de filtro e converte para minúsculas
    const filtro = document.getElementById('filtro').value.trim().toLowerCase();
    const menorPreco = document.getElementById('menorPreco').checked;
    console.log('Filtro:', filtro); // Log para debug
    
    // Carrega os itens armazenados no localStorage, ou inicializa com um array vazio se não houver itens
    const itens = JSON.parse(localStorage.getItem('itens')) || [];
    console.log('Itens:', itens); // Log para debug
    
    // Filtra os itens com base no valor digitado (categoria, nome do supermercado ou nome do item)
    const resultadosFiltrados = itens.filter(item => {
        const filtroTexto = 
            (item.categoria && item.categoria.toLowerCase().includes(filtro)) ||
            (item.nomeSupermercado && item.nomeSupermercado.toLowerCase().includes(filtro)) ||
            (item.nome && item.nome.toLowerCase().includes(filtro));
        
        const filtroLocalizacao = !localizacaoSelecionada || 
            (item.localizacao && item.localizacao.toLowerCase() === localizacaoSelecionada);

        return filtroTexto && filtroLocalizacao;
    });
    console.log('Resultados Filtrados:', resultadosFiltrados); // Log para debug
    this.resultadosFiltrados = resultadosFiltrados

    // Ordena os itens filtrados por preço se a checkbox "Mais Barato" estiver marcada
    if (menorPreco) {
        resultadosFiltrados.sort((a, b) => parseFloat(a.preco) - parseFloat(b.preco));
    }

    // Chama a função para exibir os itens filtrados na página
    exibirItens(resultadosFiltrados);
}

// Função para exibir os itens filtrados na página
function exibirItens(itens) {
    // Obtém a div onde os resultados serão exibidos
    const resultFiltro = document.getElementById('resultFiltro');
    // Limpa o conteúdo da div
    resultFiltro.innerHTML = ''; 

    // Verifica se não há itens filtrados
    if (itens.length === 0) {
        // Exibe uma mensagem informando que nenhum item foi encontrado
        resultFiltro.innerHTML = '<p>Nenhum item encontrado.</p>';
        return;
    }

    // Percorre os itens filtrados e cria elementos div para exibi-los
    itens.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <div class="item-imagem">
                <p>${item.nomeSupermercado}</p>
                <img src="${item.foto}" alt="Foto do Produto">
            </div>
            <p>${item.nome} - ${item.marca}</p>
            <p>R$${item.preco}</p>
            <button class="ver-produto-botao" onclick="verProduto('${item.id}')">Ver produto</button>
        `;
        // Adiciona cada item à div de resultados
        resultFiltro.appendChild(itemDiv);
    });
}

function verProduto(id) {
    console.log(id)
    const item = this.resultadosFiltrados.find((item) => item.id === id)
    console.log(item)
    localStorage.setItem('produto', JSON.stringify(item))
    window.location.pathname = 'codigo-fonte/tela-produto/produto.html'

}

filtrarItens();

/*'codigo-fonte/tela-produto/produto.html'
*/





// Obtendo os itens do localStorage
const itens = JSON.parse(localStorage.getItem('itens')) || [];

//mostra o produto no bloco 1
document.addEventListener('DOMContentLoaded', () => {
    const bloco1 = document.querySelector('#bloco1');

    //selecionando itens aleatórios do array
    const randomIndex1 = Math.floor(Math.random() * itens.length);
    const itemRandom1 = itens[randomIndex1]

    // Gerar dinamicamente os elementos clicáveis
    if (itens.length > 0) {
        const data = itemRandom1;
        console.log('Exibindo item:', data);

        const elementDiv = document.createElement('div');
        elementDiv.classList.add('element');

        //motra a imagem do produto 
        if(itemRandom1.foto){
            const img = document.createElement('img')
            img.src=data.foto
            img.alt=itemRandom1.nome
            elementDiv.appendChild(img)
        }

        //nome do produto-
        const nome = document.createElement('p')
        nome.textContent = data.nome
        elementDiv.appendChild(nome)

        //preco do produto
        const preco1 = document.createElement('p')
        preco1.innerHTML = `R$${data.preco}`
        preco1.classList.add('preco')
        elementDiv.appendChild(preco1)

        bloco1.appendChild(elementDiv);

        elementDiv.addEventListener('click', () => {
            const url = `../tela-produto/produto.html?foto=${encodeURIComponent(data.foto)}&nome=${encodeURIComponent(data.nome)}&preco=${encodeURIComponent(data.preco)}`;
            window.open(url, '_blank');
        });
}});

//mostra o produto no bloco 2
document.addEventListener('DOMContentLoaded', () => {
    const bloco2 = document.querySelector('#bloco2');

    //selecionando itens aleatórios do array
    const randomIndex2 = Math.floor(Math.random() * itens.length);
    const itemRandom2 = itens[randomIndex2]

    // Gerar dinamicamente os elementos clicáveis
    if (itens.length > 0) {
        const data = itemRandom2;
        console.log('Exibindo item:', data);

        const elementDiv = document.createElement('div');
        elementDiv.classList.add('element');

        //motra a imagem do produto 
        if(itemRandom2.foto){
            const img = document.createElement('img')
            img.src=data.foto
            img.alt=itemRandom2.nome
            elementDiv.appendChild(img)
        }

        //nome do produto-
        const nome = document.createElement('p')
        nome.textContent = data.nome
        elementDiv.appendChild(nome)

        //preco do produto
        const preco2 = document.createElement('p')
        preco2.innerHTML = `R$${data.preco}`
        preco2.classList.add('preco')
        elementDiv.appendChild(preco2)

        bloco2.appendChild(elementDiv);

        elementDiv.addEventListener('click', () => {
            const url = `../tela-produto/produto.html?foto=${encodeURIComponent(data.foto)}&nome=${encodeURIComponent(data.nome)}&preco=${encodeURIComponent(data.preco)}`;
            window.open(url, '_blank');
        });
}});

//mostra o produto no bloco 2
document.addEventListener('DOMContentLoaded', () => {
    const bloco2 = document.querySelector('#bloco2');

    //selecionando itens aleatórios do array
    const randomIndex3 = Math.floor(Math.random() * itens.length);
    const itemRandom3 = itens[randomIndex3]

    // Gerar dinamicamente os elementos clicáveis
    if (itens.length > 0) {
        const data = itemRandom3;
        console.log('Exibindo item:', data);

        const elementDiv = document.createElement('div');
        elementDiv.classList.add('element');

        //motra a imagem do produto 
        if(itemRandom3.foto){
            const img = document.createElement('img')
            img.src=data.foto
            img.alt=itemRandom3.nome
            elementDiv.appendChild(img)
        }

        //nome do produto-
        const nome = document.createElement('p')
        nome.textContent = data.nome
        elementDiv.appendChild(nome)

        //preco do produto
        const preco3 = document.createElement('p')
        preco3.innerHTML = `R$${data.preco}`
        preco3.classList.add('preco')
        elementDiv.appendChild(preco3)

        bloco2.appendChild(elementDiv);

        elementDiv.addEventListener('click', () => {
            const url = `../tela-produto/produto.html?foto=${encodeURIComponent(data.foto)}&nome=${encodeURIComponent(data.nome)}&preco=${encodeURIComponent(data.preco)}`;
            window.open(url, '_blank');
        });
}});

//mostra o produto no bloco 3
document.addEventListener('DOMContentLoaded', () => {
    const bloco3 = document.querySelector('#bloco3');

    //selecionando itens aleatórios do array
    const randomIndex4 = Math.floor(Math.random() * itens.length);
    const itemRandom4 = itens[randomIndex4]

    // Gerar dinamicamente os elementos clicáveis
    if (itens.length > 0) {
        const data = itemRandom4; 
        console.log('Exibindo item:', data);

        const elementDiv = document.createElement('div');
        elementDiv.classList.add('element');

        //motra a imagem do produto 
        if(itemRandom4.foto){
            const img = document.createElement('img')
            img.src=data.foto
            img.alt=itemRandom4.nome
            elementDiv.appendChild(img)
        }

        //nome do produto-
        const nome = document.createElement('p')
        nome.textContent = data.nome
        elementDiv.appendChild(nome)

        //preco do produto
        const preco4 = document.createElement('p')
        preco4.innerHTML = `R$${data.preco}`
        preco4.classList.add('preco')
        elementDiv.appendChild(preco4)

        bloco3.appendChild(elementDiv);

        elementDiv.addEventListener('click', () => {
            const url = `../tela-produto/produto.html?foto=${encodeURIComponent(data.foto)}&nome=${encodeURIComponent(data.nome)}&preco=${encodeURIComponent(data.preco)}`;
            window.open(url, '_blank');
        });
}});

//mostra o produto no bloco 4
document.addEventListener('DOMContentLoaded', () => {
    const bloco4 = document.querySelector('#bloco4');

    //selecionando itens aleatórios do array
    const randomIndex5 = Math.floor(Math.random() * itens.length);
    const itemRandom5 = itens[randomIndex5]

    // Gerar dinamicamente os elementos clicáveis
    if (itens.length > 0) {
        const data = itemRandom5; 
        console.log('Exibindo item:', data);

        const elementDiv = document.createElement('div');
        elementDiv.classList.add('element');

        //motra a imagem do produto 
        if(itemRandom5.foto){
            const img = document.createElement('img')
            img.src=data.foto
            img.alt=itemRandom5.nome
            elementDiv.appendChild(img)
        }

        //nome do produto-
        const nome = document.createElement('p')
        nome.textContent = data.nome
        elementDiv.appendChild(nome)

        //preco do produto
        const preco5 = document.createElement('p')
        preco5.innerHTML = `R$${data.preco}`
        preco5.classList.add('preco')
        elementDiv.appendChild(preco5)

        bloco4.appendChild(elementDiv);

        elementDiv.addEventListener('click', () => {
            const url = `../tela-produto/produto.html?foto=${encodeURIComponent(data.foto)}&nome=${encodeURIComponent(data.nome)}&preco=${encodeURIComponent(data.preco)}`;
            window.open(url, '_blank');
        });
}});

//mostra o produto no bloco 5
document.addEventListener('DOMContentLoaded', () => {
    const bloco5 = document.querySelector('#bloco5');

    //selecionando itens aleatórios do array
    const randomIndex6 = Math.floor(Math.random() * itens.length);
    const itemRandom6 = itens[randomIndex6]

    // Gerar dinamicamente os elementos clicáveis
    if (itens.length > 0) {
        const data = itemRandom6;
        console.log('Exibindo item:', data);

        const elementDiv = document.createElement('div');
        elementDiv.classList.add('element');

        //motra a imagem do produto 
        if(itemRandom6.foto){
            const img = document.createElement('img')
            img.src=data.foto
            img.alt=itemRandom6.nome
            elementDiv.appendChild(img)
        }

        //nome do produto-
        const nome = document.createElement('p')
        nome.textContent = data.nome
        elementDiv.appendChild(nome)

        //preco do produto
        const preco6 = document.createElement('p')
        preco6.innerHTML = `R$${data.preco}`
        preco6.classList.add('preco')
        elementDiv.appendChild(preco6)

        bloco5.appendChild(elementDiv);

        elementDiv.addEventListener('click', () => {
            const url = `../tela-produto/produto.html?foto=${encodeURIComponent(data.foto)}&nome=${encodeURIComponent(data.nome)}&preco=${encodeURIComponent(data.preco)}`;
            window.open(url, '_blank');
        });
}});

//mostra o produto no bloco 6
document.addEventListener('DOMContentLoaded', () => {
    const bloco6 = document.querySelector('#bloco6');

    //selecionando itens aleatórios do array
    const randomIndex7 = Math.floor(Math.random() * itens.length);
    const itemRandom7 = itens[randomIndex7]

    // Gerar dinamicamente os elementos clicáveis
    if (itens.length > 0) {
        const data = itemRandom7; 
        console.log('Exibindo item:', data);

        const elementDiv = document.createElement('div');
        elementDiv.classList.add('element');

        //motra a imagem do produto 
        if(itemRandom7.foto){
            const img = document.createElement('img')
            img.src=data.foto
            img.alt=itemRandom7.nome
            elementDiv.appendChild(img)
        }

        //nome do produto-
        const nome = document.createElement('p')
        nome.textContent = data.nome
        elementDiv.appendChild(nome)

        //preco do produto
        const preco7 = document.createElement('p')
        preco7.innerHTML = `R$${data.preco}`
        preco7.classList.add('preco')
        elementDiv.appendChild(preco7)

        bloco6.appendChild(elementDiv);

        elementDiv.addEventListener('click', () => {
            const url = `../tela-produto/produto.html?foto=${encodeURIComponent(data.foto)}&nome=${encodeURIComponent(data.nome)}&preco=${encodeURIComponent(data.preco)}`;
            window.open(url, '_blank');
        });
}});

//mostra o produto no bloco 7
document.addEventListener('DOMContentLoaded', () => {
    const bloco7 = document.querySelector('#bloco7');

    //selecionando itens aleatórios do array
    const randomIndex8 = Math.floor(Math.random() * itens.length);
    const itemRandom8 = itens[randomIndex8]

    // Gerar dinamicamente os elementos clicáveis
    if (itens.length > 0) {
        const data = itemRandom8;
        console.log('Exibindo item:', data);

        const elementDiv = document.createElement('div');
        elementDiv.classList.add('element');

        //motra a imagem do produto 
        if(itemRandom8.foto){
            const img = document.createElement('img')
            img.src=data.foto
            img.alt=itemRandom8.nome
            elementDiv.appendChild(img)
        }

        //nome do produto-
        const nome = document.createElement('p')
        nome.textContent = data.nome
        elementDiv.appendChild(nome)

        //preco do produto
        const preco8 = document.createElement('p')
        preco8.innerHTML = `R$${data.preco}`
        preco8.classList.add('preco')
        elementDiv.appendChild(preco8)

        bloco7.appendChild(elementDiv);

        elementDiv.addEventListener('click', () => {
            const url = `../tela-produto/produto.html?foto=${encodeURIComponent(data.foto)}&nome=${encodeURIComponent(data.nome)}&preco=${encodeURIComponent(data.preco)}`;
            window.open(url, '_blank');
        });
}});

//mostra o produto no bloco 8
document.addEventListener('DOMContentLoaded', () => {
    const bloco8 = document.querySelector('#bloco8');

    //selecionando itens aleatórios do array
    const randomIndex9 = Math.floor(Math.random() * itens.length);
    const itemRandom9 = itens[randomIndex9]

    // Gerar dinamicamente os elementos clicáveis
    if (itens.length > 0) {
        const data = itemRandom9;
        console.log('Exibindo item:', data);

        const elementDiv = document.createElement('div');
        elementDiv.classList.add('element');

        //motra a imagem do produto 
        if(itemRandom9.foto){
            const img = document.createElement('img')
            img.src=data.foto
            img.alt=itemRandom9.nome
            elementDiv.appendChild(img)
        }

        //nome do produto-
        const nome = document.createElement('p')
        nome.textContent = data.nome
        elementDiv.appendChild(nome)

        //preco do produto
        const preco9 = document.createElement('p')
        preco9.innerHTML = `R$${data.preco}`
        preco9.classList.add('preco')
        elementDiv.appendChild(preco9)

        bloco8.appendChild(elementDiv);

        elementDiv.addEventListener('click', () => {
            const url = `../tela-produto/produto.html?foto=${encodeURIComponent(data.foto)}&nome=${encodeURIComponent(data.nome)}&preco=${encodeURIComponent(data.preco)}`;
            window.open(url, '_blank');
        });
}});