let filtro = document.querySelector("#filtro");

filtro.onmouseup = function(){
    ItensFiltro.style.visibility = "visible";
};

filtro.onmouseout = function(){
    ItensFiltro.style.visibility = "hidden";
};
