var list = [];
var botao = document.querySelector('#botao');

function addItem(){
    if(localStorage.listadecompras){
        list = JSON.parse(localStorage.getItem('listadecompras'));
        let botao = document.querySelector('#botao');
        botao.style.backgroundColor = '#4bdf2e';
        botao.innerHTML = 'Item adicionado a lista de compras';
    }

    let novoitem = document.getElementById('v').value;
    list.push(novoitem);
    document.getElementById('v').value = "";
    localStorage.listadecompras = JSON.stringify(list);
    botao.value = "true";
}
