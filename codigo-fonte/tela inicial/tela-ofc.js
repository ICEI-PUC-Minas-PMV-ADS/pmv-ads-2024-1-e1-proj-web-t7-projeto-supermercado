// Obtendo os itens do localStorage
const itens = JSON.parse(localStorage.getItem('itens')) || [];

const itensList = document.getElementById('bloco1');
itens.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.innerHTML += 
        `<img src="${item.foto}" alt="Foto do Produto">
        <p>${item.nome} - ${item.marca}</p>        
        <p>Valor R$: ${item.preco}</p>
        <p>Categoria: ${item.categoria}</p>`;
    itensList.appendChild(itemDiv);
});
