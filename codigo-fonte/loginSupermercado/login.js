function redirecionar() {
    window.location.href = "../cadastro-supermercado/cadastroSupermercado.html";
}

function validarLogin() {
    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;

    const cadSupermercado = JSON.parse(localStorage.getItem('cadSupermercado')) || [];

    let loginCorreto = false;

    // Verifica cada perfil salvo no localStorage
    for (const perfil of cadSupermercado) {
        if (perfil.email === login && perfil.senha === senha) {
            loginCorreto = true;
            break;
        }
    }

    if (loginCorreto) {
        window.location.href = "../gestao-ofertas/adicionar-itens.html";
    } else {
        alert("Login ou senha incorretos. Tente novamente.");
    }
}

