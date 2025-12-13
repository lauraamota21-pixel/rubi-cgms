// ====== DADOS INICIAIS DOS PRODUTOS ======
const produtos = [
    {
        nome: "BABYDOOL CAROL AZUL FROZEN E ROSA",
        preco: 79.90,
        pix: 69.90,
        tamanho: "M",
        estoque: 1,
        imagem: "assets/images/produtos/BABYDOOLCAROLAZULFROZENEROSA.jpg"
    },
    {
        nome: "BABYDOOL CAROL VERMELHO",
        preco: 79.90,
        pix: 69.90,
        tamanho: "M",
        estoque: 1,
        imagem: "assets/images/produtos/BABYDOOLCAROLVERMELHO.jpg"
    },
    // Adicione aqui todos os produtos seguindo o mesmo modelo
];

// ====== CARRINHO ======
let carrinho = [];

// ====== FUNÇÃO PARA RENDERIZAR CARDS ======
const containerProdutos = document.querySelector('#produtos');

function renderizarProdutos() {
    containerProdutos.innerHTML = '';
    produtos.forEach((produto, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h4>${produto.nome}</h4>
            <p>Preço: R$${produto.preco.toFixed(2)}</p>
            <p>PIX: R$${produto.pix.toFixed(2)}</p>
            <p>Tamanho: ${produto.tamanho}</p>
            <p>Estoque: ${produto.estoque}</p>
            <button class="adicionar-carrinho" data-index="${index}">Adicionar ao carrinho</button>
        `;
        containerProdutos.appendChild(card);
    });
}

// ====== ADICIONAR PRODUTO AO CARRINHO ======
function adicionarAoCarrinho(index) {
    const produto = produtos[index];

    // Verifica estoque
    const qtdNoCarrinho = carrinho.filter(p => p.nome === produto.nome).length;
    if (qtdNoCarrinho >= produto.estoque) {
        alert("Estoque insuficiente!");
        return;
    }

    carrinho.push(produto);
    atualizarCarrinho();
}

// ====== ATUALIZAR CARRINHO ======
function atualizarCarrinho() {
    let carrinhoHTML = 'Seu carrinho:\n';
    let total = 0;
    carrinho.forEach(prod => {
        carrinhoHTML += `${prod.nome} - R$${prod.preco.toFixed(2)}\n`;
        total += prod.p