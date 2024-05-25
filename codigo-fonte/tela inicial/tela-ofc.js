// Obtendo os itens do localStorage
const itens = JSON.parse(localStorage.getItem('itens')) || [];

// Exibindo os itens na página
const itensList = document.getElementById('itensList');
itens.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.innerHTML = `
        <img src="${item.foto}" alt="Foto do Produto">
        <p>${item.nome} - ${item.marca}</p>        
        <p>Valor R$: ${item.preco}</p>
        <p>Categoria: ${item.categoria}</p>
        <button onclick="excluirItem(${item.id})">Excluir</button>
    `;
    itensList.appendChild(itemDiv);
});
