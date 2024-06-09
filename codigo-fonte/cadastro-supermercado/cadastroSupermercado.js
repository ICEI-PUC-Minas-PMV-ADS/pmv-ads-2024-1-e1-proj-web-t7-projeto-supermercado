document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtendo os valores dos campos do formulário
    const nomeSupermercado = document.getElementById('nomeSupermercado').value;
    const endereco = document.getElementById('endereco').value
    const localizacao = document.getElementById('localizacao').value
    const cnpj = document.getElementById('cnpj').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    // Verificando se o CPF contém exatamente 14 números
    const cnpjValido = /^\d{14}$/.test(cnpj);
    if (!cnpjValido) {
        alert('O CNPJ deve conter exatamente 14 números.');
        return;
    }

    // Verificando se a senha tem pelo menos 8 caracteres
    if (senha.length < 8) {
        alert('A senha deve ter pelo menos 8 caracteres.');
        return;
    }

    // Verificando se as senhas coincidem
    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem. Por favor, tente novamente.');
        return;
    }

    const perfilSupermercado = {
        nomeSupermercado: nomeSupermercado,
        endereco: endereco,
        localizacao: localizacao,
        cnpj: cnpj,
        email: email,
        senha: senha
    };
    
    // Carregar localStorage
    let cadSupermercado = JSON.parse(localStorage.getItem('cadSupermercado')) || [];

    // Verifica se cadConsumidor é um array, caso contrário, inicializa-o como um array vazio
    if (!Array.isArray(cadSupermercado)) {
        cadSupermercado = [];
    }

    // Adicionar novos dados
    cadSupermercado.push(perfilSupermercado);

    // Salvar no localStorage
    localStorage.setItem('cadSupermercado', JSON.stringify(cadSupermercado));

    // Redirecionar para a página de login
    window.location.href = "../loginSupermercado/login.html";
});
