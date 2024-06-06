document.addEventListener('DOMContentLoaded', () => {
    const elementsContainer = document.getElementById('elementsContainer');

    // Array de dados dos elementos
    const elementData = [
        { id: 1, title: 'Elemento 1', details: 'Detalhes do elemento 1.' },
        { id: 2, title: 'Elemento 2', details: 'Detalhes do elemento 2.' },
        { id: 3, title: 'Elemento 3', details: 'Detalhes do elemento 3.' },
        // Adicione mais elementos conforme necessário
    ];

    // Gerar dinamicamente os elementos clicáveis
    elementData.forEach(data => {
        const elementDiv = document.createElement('div');
        elementDiv.classList.add('element');
        elementDiv.textContent = data.title;
        elementDiv.dataset.id = data.id;
        elementsContainer.appendChild(elementDiv);

        elementDiv.addEventListener('click', () => {
            const url = `details.html?title=${encodeURIComponent(data.title)}&details=${encodeURIComponent(data.details)}`;
            window.open(url, '_blank');
        });
    });
});