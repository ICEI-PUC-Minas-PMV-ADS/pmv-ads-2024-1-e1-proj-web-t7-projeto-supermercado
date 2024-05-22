let botao = document.querySelector('#botao');
let carrinho = [];


botao.onmouseup = function(){
botao.style.backgroundColor = '#4bdf2e';
botao.style.border = 'solid green';
botao.innerHTML = 'Item adicionado a sua lista';
carrinho[0] = 'arroz';
localStorage.setItem('lista de compras',carrinho);
}

function armazem (){
    return JSON.parse(localStorage.getItem(carrinho[0]));
}
      
