// Obtendo os itens do localStorage
const itens = JSON.parse(localStorage.getItem('itens')) || [];

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
    if (item.inicioPromo && item.fimPromo != null) {
        return `<p>Início da promoção: ${item.inicioPromo}</p>
        <p>Fim da promoção: ${item.fimPromo}</p>`;
    } else {
        return '';
    }
}

// Exibindo os itens na página
const itensList = document.getElementById('itensList');
itens.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.innerHTML = `
        <img src="${item.foto}" alt="Foto do Produto">
        <p>${item.nome} - ${item.marca}</p>
        <p>Valor R$: ${item.preco}</p>
        <p>Categoria: ${item.categoria}</p>
        ${itemMaiorIdade(item)}
        ${limiteItem(item)}
        ${dataPromo(item)}
        <button onclick="excluirItem(${item.id})">Excluir</button>
    `;
    itensList.appendChild(itemDiv);
});

// Função para excluir um item
function excluirItem(itemId) {
    // Encontra o índice do item com o ID fornecido
    const index = itens.findIndex(item => item.id === itemId);
    // Remove o item do array
    if (index !== -1) {
        itens.splice(index, 1);
        // Atualiza o localStorage
        localStorage.setItem('itens', JSON.stringify(itens));
        // Remove o elemento HTML correspondente da lista
        const itemDiv = document.getElementById(`item-${itemId}`);
        if (itemDiv) {
            itemDiv.remove();
        }
         // Atualiza a página
         location.reload();
    }
}

