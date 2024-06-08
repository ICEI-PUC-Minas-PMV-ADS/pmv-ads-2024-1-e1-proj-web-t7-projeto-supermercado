//const cadSupermercado = JSON.parse(localStorage.getItem('cadSupermercado')) || [];

//destacar na barra de navegaçao o link atual da pag
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.linkMenu');
    const currentUrl = window.location.href.split('/').pop(); // Gets the current page file name

    links.forEach(link => {
        if (link.getAttribute('href') === currentUrl) {
            link.classList.add('linkAtualMenu');
        }
    });
});

const limiteItensSim = document.getElementById('limiteItensSim');//checkbox
const inserirQtd = document.querySelector('.qtd-permitida'); //div que contem a campo limite ietns
const validadePromo = document.querySelector('.validadePromo'); // div que contem campo selecionar data

// se o checkbox "limite de itens" for marcado, ira exibir um campo para inserir o limite de itens
limiteItensSim.addEventListener('change', function() {
    if (this.checked) {
        inserirQtd.style.display = 'block';
    } else {
        inserirQtd.style.display = 'none';
    }
});

// se o checkbox "item em promoçao" for marcado, ira exibir campo escolher data
itemPromocao.addEventListener('change', function(){
    if (this.checked) {
        validadePromo.style.display = 'block';
    } else {
        validadePromo.style.display = 'none';
    }
});

// formatar a data no formato brasileiro
function formatarDataBr(dataISO) {
    const [ano, mes, dia] = dataISO.split('-');
    return `${dia}/${mes}/${ano}`;
}

//gerar id
function geradorId() {
    return Date.now() + '-' + Math.floor(Math.random() * 1000);
}

document.getElementById('itemForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Recupera o login armazenado no localStorage
    const login = localStorage.getItem('login');

    const foto = document.getElementById('foto').value;
    const nome = document.getElementById('nome').value;
    const marca = document.getElementById('marca').value;
    const preco = document.getElementById('preco').value;
    const categoria = document.getElementById('categoria').value;
    const maiorIdadeSim = document.getElementById('maiorIdadeSim').checked;
    const limiteItensSim = document.getElementById('limiteItensSim').checked;
    const campoLimiteItem = document.getElementById('campo-limite-item').value;
    const itemPromocao = document.getElementById('itemPromocao').checked;
    const inicioPromo = document.getElementById('inicioPromo').value;
    const fimPromo = document.getElementById('fimPromo').value;

    // chama a funçao que Gera um ID único
    const itemId = geradorId();


    const item = {
        idSupermercado: login, //o id do Supermercado é o cnpj digitado no login
        id: itemId, 
        foto: foto,
        nome: nome,
        marca: marca,
        preco: preco,
        categoria: categoria,
        maiorIdadeSim: maiorIdadeSim,
        limiteItensSim: limiteItensSim,
        campoLimiteItem: limiteItensSim ? campoLimiteItem : null,
        itemPromocaoSim: itemPromocao,
        inicioPromo: itemPromocao ? formatarDataBr(inicioPromo) : null,
        fimPromo: itemPromocao ? formatarDataBr(fimPromo) : null
    };

    // Obtendo a lista de itens do localStorage, se não existir, inicialize como um array vazio
    let itens = JSON.parse(localStorage.getItem('itens')) || [];
    itens.push(item);
    localStorage.setItem('itens', JSON.stringify(itens));

    // Limpar o formulário
    document.getElementById('itemForm').reset();

    // Certifique-se de que o campo de limite de itens seja escondido após o reset
    inserirQtd.style.display = 'none';
    validadePromo.style.display = 'none';
});

// Função para retornar o nome do supermercado
/*function infoSupermercados() {
    return cadSupermercado.map(perfilSupermercado => perfilSupermercado.nomeSupermercado);
}

const nomeSupermercado = infoSupermercados()[0];
nomeSupermercado: nomeSupermercado,
*/
