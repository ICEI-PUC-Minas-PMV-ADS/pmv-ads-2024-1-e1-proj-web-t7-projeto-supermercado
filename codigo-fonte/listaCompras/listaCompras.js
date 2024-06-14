const itens = JSON.parse(localStorage.getItem('itens')) || [];

// função para verificar item para maior 18 anos
function itemMaiorIdade(item) {
    return item.maiorIdadeSim ? '<p>Para maiores de 18 anos</p>' : '';
}

function limiteItem(item) {
    return item.campoLimiteItem != null ? `<p><strong>Itens por pessoa:</strong> ${item.campoLimiteItem}</p>` : '';
}

function dataPromo(item) {
    return item.inicioPromo && item.fimPromo ? `<strong><p> Promoção:</strong> De ${item.inicioPromo} a ${item.fimPromo}</p>` : '';
}

// Função para excluir um item
function excluirItem(id) {
    const listaComp = JSON.parse(localStorage.getItem('listaComp')) || [];
    const index = listaComp.findIndex(item => item.id === id);
    if (index !== -1) {
        listaComp.splice(index, 1); // Remove o item do array
        localStorage.setItem('listaComp', JSON.stringify(listaComp)); // Atualiza o localStorage
        renderListaCompras(); // Atualiza o DOM
    }
}

// Função para renderizar a lista de compras
function renderListaCompras() {
    const listaComp = JSON.parse(localStorage.getItem('listaComp')) || [];
    const listaCompras = document.getElementById('listaCompras');

    listaCompras.innerHTML = ''; // Limpa a lista antes de renderizar

    if (listaComp.length === 0) {
        listaCompras.innerHTML = '<p>Nenhum item na lista de compras.</p>';
        document.getElementById('valorTotal').innerText = ''; // Limpa o valor total se a lista estiver vazia
        return;
    }

    listaComp.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.innerHTML = `
            <div class="item-imagem">
                <p><strong>${item.nomeSupermercado}</strong></p>
                <p><img src="${item.foto}" alt="Foto do Produto"></p>
                <p><button onclick="excluirItem('${item.id}')">Remover</button></p>
            </div>
            <div class="itemDetalhes1">
                <p>${item.nome} - ${item.marca}</p>
                <p>R$ ${item.preco}</p>
            </div>
            <div class="itemDetalhes2">
                <p><strong>Categoria:</strong> ${item.categoria}</p>
                ${itemMaiorIdade(item)}
                ${limiteItem(item)}
                ${dataPromo(item)}
            </div>
            <div class="itemDetalhes3">
                <p><strong>Endereço:</strong><br>${item.endereco}</p>
                <p><strong>Localização:</strong> Zona ${item.localizacao}</p>
            </div>
        `;
        listaCompras.appendChild(itemDiv);
    });

    calcularValorTotal(); // Chama a função para calcular o valor total
}

// Função para calcular o valor total dos itens na lista de compras
function calcularValorTotal() {
    const listaComp = JSON.parse(localStorage.getItem('listaComp')) || [];
    const valorTotal = listaComp.reduce((total, item) => total + parseFloat(item.preco), 0);
    document.getElementById('totalCompra').innerHTML = `<p>Valor Total: R$ ${valorTotal.toFixed(2)}</p>`;
}

document.addEventListener('DOMContentLoaded', () => {
    renderListaCompras(); // Chama a função para renderizar a lista de compras
});