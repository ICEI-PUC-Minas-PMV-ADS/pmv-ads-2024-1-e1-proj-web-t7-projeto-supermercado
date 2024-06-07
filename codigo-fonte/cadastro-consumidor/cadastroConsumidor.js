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

    //carregar localstorage
    let cadConsumidor = JSON.parse(localStorage.getItem('cadConsumidor')) || [];
    //adc novos dados
    cadConsumidor.push(perfilConsumidor);

    //salvar no localstorage
    localStorage.setItem('cadConsumidor', JSON.stringify('cadConsumidor'));

    //limpar formulário após envio
    document.getElementById('cadastroForm').reset();

});
