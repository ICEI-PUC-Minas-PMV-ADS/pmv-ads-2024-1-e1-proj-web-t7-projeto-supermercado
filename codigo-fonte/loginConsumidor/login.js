function redirecionar() {
    window.location.href = "../cadastro-consumidor/cadastroConsumidor.html";
}

function validarLogin() {
    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;

    const cadConsumidor = JSON.parse(localStorage.getItem('cadConsumidor')) || [];

    let loginCorreto = false;

    // Verifica cada perfil salvo no localStorage
    for (const perfil of cadConsumidor) {
        if (perfil.email === login && perfil.senha === senha) {
            loginCorreto = true;
            break;
        }
    }

    if (loginCorreto) {
        window.location.href = "../tela inicial/tela-ofc.html";
    } else {
        alert("Login ou senha incorretos. Tente novamente.");
    }
}


/*
function redirecionar() {
    window.location.href = "cadastro.html"
}


    function validarLogin() {
        var login = document.getElementById("login").value;
        var senha = document.getElementById("senha").value;
    
        var loginCorreto = localStorage.getItem("login");
        var senhaCorreta = localStorage.getItem("senha");
        loginCorreto= ""
        senhaCorreta=""
        if (login === loginCorreto && senha === senhaCorreta) {
            window.location.href = "../tela%20inicial/tela-ofc.html"
        } else {
            alert("Login ou senha incorretos. Tente novamente.");
        }
    }*/