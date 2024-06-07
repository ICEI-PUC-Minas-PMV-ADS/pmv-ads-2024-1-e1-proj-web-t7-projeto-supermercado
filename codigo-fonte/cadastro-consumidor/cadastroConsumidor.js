document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtendo os valores dos campos do formulário
    const primeiroNome = document.getElementById('primeiroNome').value;
    const segundoNome = document.getElementById('segundoNome').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('Telefone').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    // Verificando se o CPF contém exatamente 11 números
    const cpfValido = /^\d{11}$/.test(cpf);
    if (!cpfValido) {
        alert('O CPF deve conter exatamente 11 números.');
        return;
    }

    // Verificando se o telefone contém apenas números
    const telefoneNumerico = /^\d+$/.test(telefone);
    if (!telefoneNumerico) {
        alert('O telefone deve conter apenas números.');
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

    // Criando o objeto com os dados do formulário
    const perfilConsumidor = {
        primeiroNome: primeiroNome,
        segundoNome: segundoNome,
        cpf: cpf,
        email: email,
        telefone: telefone,
        senha: senha
    };

    // Carregar localStorage
    let cadConsumidor = JSON.parse(localStorage.getItem('cadConsumidor')) || [];

    // Verifica se cadConsumidor é um array, caso contrário, inicializa-o como um array vazio
    if (!Array.isArray(cadConsumidor)) {
        cadConsumidor = [];
    }

    // Adicionar novos dados
    cadConsumidor.push(perfilConsumidor);

    // Salvar no localStorage
    localStorage.setItem('cadConsumidor', JSON.stringify(cadConsumidor));

    // Redirecionar para a página de login
    window.location.href = "../loginConsumidor/login.html";
});
