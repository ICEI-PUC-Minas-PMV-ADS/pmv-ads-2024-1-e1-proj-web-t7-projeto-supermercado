function redirecionar() {
    window.location.href = "cadastro.html"
}


    function validarLogin() {
        var login = document.getElementById("login").value;
        var senha = document.getElementById("senha").value;
    
        var loginCorreto = localStorage.getItem("login");
        var senhaCorreta = localStorage.getItem("senha");
        loginCorreto = "tobias@123"
        senhaCorreta = "123"
        if (login === loginCorreto && senha === senhaCorreta) {
            window.location.href = "../tela%20inicial/tela-ofc.html"
        } else {
            alert("Login ou senha incorretos. Tente novamente.");
        }
    }