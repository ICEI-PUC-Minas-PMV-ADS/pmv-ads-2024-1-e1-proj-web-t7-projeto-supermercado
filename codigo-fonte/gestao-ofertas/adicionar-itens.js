document.getElementById('itemForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const foto = document.getElementById('foto').value; // Você pode acessar a imagem usando FileReader para armazenar como string base64
    const nome = document.getElementById('nome').value;
    const marca = document.getElementById('marca').value;
    const preco = document.getElementById('preco').value;
    const categoria = document.getElementById('categoria').value;

    const item = {
        foto: foto,
        nome: nome,
        marca: marca,
        preco: preco,
        categoria: categoria
    };

    // Obtendo a lista de itens do localStorage, se não existir, inicialize como um array vazio
    let itens = JSON.parse(localStorage.getItem('itens')) || [];
    itens.push(item);
    localStorage.setItem('itens', JSON.stringify(itens));

    // Redirecionar para a página "meus-itens.html" após o envio do formulário
});
