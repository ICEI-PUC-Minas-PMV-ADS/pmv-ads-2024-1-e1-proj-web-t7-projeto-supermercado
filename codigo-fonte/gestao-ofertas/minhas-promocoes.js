// Obtendo os itens do localStorage
const itens = JSON.parse(localStorage.getItem('itens')) || [];

//destacar na barra de navegaçao o link atual da pag
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.linkMenu');
    const currentUrl = window.location.href.split('/').pop(); // Gets the current page file name

    links.forEach(link => {
        if (link.getAttribute('href') === currentUrl) {
            link.classList.add('linkAtualMenu');
        }
    });
});

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
        return `<p> limite de itens por pessoa: ${item.campoLimiteItem}<p>`;
    } else {
        return '';
    }
}

function dataPromo(item) {
    if (item.inicioPromo && item.fimPromo) {
        return `<p> item em promoção:</p>
        <p> De ${item.inicioPromo} a ${item.fimPromo}</p>`;
    } else {
        return '';
    }
}

// Função para excluir um item
function excluirItem(id) {
    const index = itens.findIndex(item => item.id === id);
    if (index !== -1) {
        itens.splice(index, 1); // Remove o item do array
        localStorage.setItem('itens', JSON.stringify(itens)); // Atualiza o localStorage
        atualizarItensNaPagina(); // Atualiza a exibição na página
    }
}

// Função para atualizar a exibição dos itens na página
function atualizarItensNaPagina() {
    itensList.innerHTML = ''; // Limpa a lista de itens na página
    itens.forEach(item => {
        if (item.itemPromocaoSim) { //os itens só serão exibidos na página se o item não for marcado como promoção
            const itemDiv = document.createElement('div');
            itemDiv.innerHTML = `
                <div class="item-imagem">
                    <img src="${item.foto}" alt="Foto do Produto"> 
                </div>
                <p>${item.nome} - ${item.marca}</p>
                <p>Valor R$: ${item.preco}</p>
                <p>Categoria: ${item.categoria}</p>
                ${itemMaiorIdade(item)}
                ${limiteItem(item)}
                ${dataPromo(item)}
                <button onclick="excluirItem('${item.id}')">Excluir</button>
            `;
            itensList.appendChild(itemDiv);
        }
    });
}

// Exibindo os itens na página inicialmente
const itensList = document.getElementById('itensList');
atualizarItensNaPagina();