// Variável global para armazenar a localização selecionada
let localizacaoSelecionada = '';

// Evento para selecionar a localização e aplicar filtro
document.getElementById('regiaoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    localizacaoSelecionada = document.getElementById('localizacao').value.trim().toLowerCase();
    filtrarItens();
});

// Evento para o formulário de busca por texto e aplicar filtro
document.getElementById('filtroForm').addEventListener('submit', function(event) {
    event.preventDefault();
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
                <img src="${item.foto}" alt="Foto do Produto">
            </div>
            <p>Supermercado: ${item.nomeSupermercado}</p>
            <p>Nome: ${item.nome}</p>
            <p>Marca: ${item.marca}</p>
            <p>Preço: R$ ${item.preco}</p>
            <p>Categoria: ${item.categoria}</p>
            <p>Localização: ${item.localizacao}</p>
        `;
        // Adiciona cada item à div de resultados
        resultFiltro.appendChild(itemDiv);
    });
}
