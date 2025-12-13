// ==== Lista completa de produtos ====
const produtos = [
  { nome: "BABYDOOL CAROL AZUL FROZEN E ROSA", preco: 79.90, pix: 69.90, tamanho: "M", estoque: 1, img: "assets/images/produtos/BABYDOOLCAROLAZULFROZENEROSA.jpg" },
  { nome: "BABYDOOL CAROL VERMELHO", preco: 79.90, pix: 69.90, tamanho: "M", estoque: 1, img: "assets/images/produtos/BABYDOOLCAROLVERMELHO.jpg" },
  { nome: "BABYDOOL LIA AZUL", preco: 79.90, pix: 69.90, tamanho: "G", estoque: 1, img: "assets/images/produtos/BABYDOOLLIAAZUL.jpg" },
  { nome: "BABYDOOL LIA PRETO", preco: 79.90, pix: 69.90, tamanho: "M", estoque: 1, img: "assets/images/produtos/BABYDOOLLIAPRETO.jpg" },
  { nome: "BABYDOOL LIA ROXO", preco: 79.90, pix: 69.90, tamanho: "P", estoque: 1, img: "assets/images/produtos/BABYDOOLLIAROXO.jpg" },
  { nome: "BABYDOOL LIA VERMELHO", preco: 79.90, pix: 69.90, tamanho: "G", estoque: 1, img: "assets/images/produtos/BABYDOOLLIAVERMELHO.jpg" },

  { nome: "CALCINHA FIO", preco: 18.50, pix: 18.50, tamanho: "G", estoque: 1, img: "assets/images/produtos/CALCINHAFIO.jpg" },
  { nome: "CALCINHA FIO", preco: 18.50, pix: 18.50, tamanho: "M", estoque: 2, img: "assets/images/produtos/CALCINHAFIO.jpg" },
  { nome: "CALCINHA FIO", preco: 18.50, pix: 18.50, tamanho: "P", estoque: 2, img: "assets/images/produtos/CALCINHAFIO.jpg" },

  { nome: "CHAMISE PRETA", preco: 104.90, pix: 94.90, tamanho: "M", estoque: 1, img: "assets/images/produtos/CHAMISEPRETA.jpg" },

  { nome: "CONJUNTO BARBARA ROSA", preco: 94.90, pix: 84.90, tamanho: "P", estoque: 1, img: "assets/images/produtos/CONJUNTOBARBARAROSA.jpg" },
  { nome: "CONJUNTO BARBARA", preco: 94.90, pix: 84.90, tamanho: "G", estoque: 1, img: "assets/images/produtos/CONJUNTOBARBARA.jpg" },
  { nome: "CONJUNTO BARCELONA", preco: 85.90, pix: 75.90, tamanho: "P", estoque: 1, img: "assets/images/produtos/CONJUNTOBARCELONA.jpg" },
  { nome: "CONJUNTO CORSET LIA BORDADO", preco: 94.90, pix: 84.90, tamanho: "G", estoque: 1, img: "assets/images/produtos/CONJUNTOCORSETLIABORDADO.jpg" },
  { nome: "CONJUNTO HELENA", preco: 94.90, pix: 84.90, tamanho: "M", estoque: 1, img: "assets/images/produtos/CONJUNTOHELENA.jpg" },
  { nome: "CONJUNTO LAS VEGAS", preco: 74.90, pix: 64.90, tamanho: "P", estoque: 1, img: "assets/images/produtos/CONJUNTOLASVEGAS.jpg" },
  { nome: "CONJUNTO OLIMPIA", preco: 74.90, pix: 64.90, tamanho: "M", estoque: 1, img: "assets/images/produtos/CONJUNTOOLIMPIA.jpg" },
  { nome: "CONJUNTO RENATA", preco: 94.90, pix: 84.90, tamanho: "M", estoque: 1, img: "assets/images/produtos/CONJUNTORENATA.jpg" },
  { nome: "CONJUNTO THAY", preco: 74.90, pix: 64.90, tamanho: "P", estoque: 1, img: "assets/images/produtos/CONJUNTOTHAY.jpg" },

  { nome: "CUIDADOS ÍNTIMOS", preco: 20.00, pix: 20.00, tamanho: "-", estoque: 2, img: "assets/images/produtos/CUIDADOSINTIMOS.jpg" },
  { nome: "PERFUME DE CALCINHA", preco: 12.00, pix: 12.00, tamanho: "-", estoque: 2, img: "assets/images/produtos/PERFUMEDECALCINHA.jpg" },

  { nome: "PIJAMA SUED MANGA CORAÇÃO", preco: 74.90, pix: 64.90, tamanho: "M", estoque: 1, img: "assets/images/produtos/PIJAMASUEDMANGACORACAO.jpg" },

  { nome: "SUTIÃ DIA A DIA ROSA BEBÊ P", preco: 30.00, pix: 30.00, tamanho: "P", estoque: 1, img: "assets/images/produtos/SUTIADIADIA.jpg" },
  { nome: "SUTIÃ DIA A DIA ROSA BEBÊ M", preco: 30.00, pix: 30.00, tamanho: "M", estoque: 1, img: "assets/images/produtos/SUTIADIADIA.jpg" },
  { nome: "SUTIÃ DIA A DIA ROSA BEBÊ G", preco: 30.00, pix: 30.00, tamanho: "G", estoque: 1, img: "assets/images/produtos/SUTIADIADIA.jpg" },
  { nome: "SUTIÃ DIA A DIA NUDE GG", preco: 30.00, pix: 30.00, tamanho: "GG", estoque: 1, img: "assets/images/produtos/SUTIADIADIA.jpg" },
  { nome: "SUTIÃ DIA A DIA BEGE P", preco: 30.00, pix: 30.00, tamanho: "P", estoque: 1, img: "assets/images/produtos/SUTIADIADIA.jpg" },
  { nome: "SUTIÃ DIA A DIA BEGE M", preco: 30.00, pix: 30.00, tamanho: "M", estoque: 1, img: "assets/images/produtos/SUTIADIADIA.jpg" },
  { nome: "SUTIÃ DIA A DIA BEGE G", preco: 30.00, pix: 30.00, tamanho: "G", estoque: 1, img: "assets/images/produtos/SUTIADIADIA.jpg" },
  { nome: "SUTIÃ DIA A DIA BEGE GG", preco: 30.00, pix: 30.00, tamanho: "GG", estoque: 1, img: "assets/images/produtos/SUTIADIADIA.jpg" },
  { nome: "SUTIÃ DIA A DIA AZUL ESCURO M", preco: 30.00, pix: 30.00, tamanho: "M", estoque: 1, img: "assets/images/produtos/SUTIADIADIA.jpg" },
  { nome: "SUTIÃ DIA A DIA AZUL ESCURO G", preco: 30.00, pix: 30.00, tamanho: "G", estoque: 1, img: "assets/images/produtos/SUTIADIADIA.jpg" },
  { nome: "SUTIÃ DIA A DIA AZUL ESCURO GG", preco: 30.00, pix: 30.00, tamanho: "GG", estoque: 1, img: "assets/images/produtos/SUTIADIADIA.jpg" },

  // T-Shirts
  { nome: "TSHIRT ADIDAS AMARELA", preco: 49.90, pix: 39.90, tamanho: "Único", estoque: 1, img: "assets/images/produtos/TSHIRTADIDAS.jpg" },
  { nome: "TSHIRT BÁSICA MARROM", preco: 39.90, pix: 39.90, tamanho: "Único", estoque: 1, img: "assets/images/produtos/TSHIRTBASICA.jpg" },
  { nome: "TSHIRT BÁSICA BEGE", preco: 39.90, pix: 39.90, tamanho: "Único", estoque: 1, img: "assets/images/produtos/TSHIRTBASICA.jpg" },
  { nome: "TSHIRT BÁSICA ROSA", preco: 39.90, pix: 39.90, tamanho: "Único", estoque: 1, img: "assets/images/produtos/TSHIRTBASICA.jpg" },
  { nome: "TSHIRT CAVALO BRANCA", preco: 39.90, pix: 39.90, tamanho: "Único", estoque: 1, img: "assets/images/produtos/TSHIRTCAVALO.jpg" },
  { nome: "TSHIRT CAVALO MARROM", preco: 39.90, pix: 39.90, tamanho: "Único", estoque: 1, img: "assets/images/produtos/TSHIRTCAVALO.jpg" },
  { nome: "TSHIRT CORAÇÃO BORDADO PRETA", preco: 49.90, pix: 39.90, tamanho: "Único", estoque: 1, img: "assets/images/produtos/TSHIRTCORACAO_BORDADO.jpg" },
  { nome: "TSHIRT CORAÇÃO BORDADO AZUL CLARO", preco: 49.90, pix: 39.90, tamanho: "Único", estoque: 1, img: "assets/images/produtos/TSHIRTCORACAO_BORDADO.jpg" },
  { nome: "TSHIRT COUNTRY GIRL MARROM", preco: 39.90, pix: 39.90, tamanho: "Único", estoque: 1, img: "assets/images/produtos/TSHIRTCOUNTRYGIRL.jpg" },
  { nome: "TSHIRT FLORESÇA DEUS ROSA", preco: 39.90, pix: 39.90, tamanho: "Único", estoque: 1, img: "assets/images/produtos/TSHIRTFLORESCADEUS.jpg" },
  { nome: "TSHIRT FLORESÇA DEUS PRETA", preco: 39.90, pix: 39.90, tamanho: "Único", estoque: 1, img: "assets/images/produtos/TSHIRTFLORESCADEUS.jpg" },
  { nome: "TSHIRT JESUS AZUL BEBÊ", preco: 39.90, pix: 39.90, tamanho: "Único", estoque: 2, img: "assets/images/produtos/TSHIRTJESUS.jpg" },
  { nome: "TSHIRT PLUS LOS ANGELES", preco: 39.90, pix: 39.90, tamanho: "Único", estoque: 2, img: "assets/images/produtos/TSHIRTPLUSLOSANGELES.jpg" },

  // Vestidos
  { nome: "VESTIDO LONGO FERNANDA", preco: 99.90, pix: 89.90, tamanho: "Único", estoque: 1, img: "assets/images/produtos/VESTIDOMIDIFLORALPRETOCOMROSA.jpg" },
  { nome: "VESTIDO MIDI FLORAL PRETO COM ROSA", preco: 89.90, pix: 79.90, tamanho: "Único", estoque: 1, img: "assets/images/produtos/VESTIDOMIDIFLORALPRETOCOMROSA.jpg" },
  { nome: "VESTIDO MIDI XADREZ AZUL", preco: 89.90, pix: 79.90, tamanho: "Único", estoque: 1, img: "assets/images/produtos/VESTIDOMIDIXADREZAZUL.jpg" }
];

// ==== Carrinho ====
let carrinho = [];

// ==== Funções de carrinho (igual exemplo anterior) ====
function adicionarAoCarrinho(nome) {
  const produto = produtos.find(p => p.nome === nome);
  if (!produto) return;

  const itemNoCarrinho = carrinho.find(i => i.nome === nome);
  if (itemNoCarrinho) {
    if (itemNoCarrinho.quantidade < produto.estoque) {
      itemNoCarrinho.quantidade++;
    } else {
      alert("Estoque insuficiente!");
    }
  } else {
    carrinho.push({ ...produto, quantidade: 1 });
  }
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const carrinhoDiv = document.getElementById("carrinho");
  if (!carrinhoDiv) return;

  carrinhoDiv.innerHTML = "";
  let total = 0;

  carrinho.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("carrinho-item");
    itemDiv.innerHTML = `
      <p>${item.nome} - ${item.tamanho}</p>
      <p>Preço: R$${item.pix.toFixed(2)} x ${item.quantidade}</p>
      <button onclick="removerDoCarrinho('${item.nome}')">Remover</button>
    `;
    carrinhoDiv.appendChild(itemDiv);
    total += item.pix * item.quantidade;
  });

  const totalDiv = document.createElement("p");
  totalDiv.innerHTML = `<strong>Total PIX: R$${total.toFixed(2)}</strong>`;
  carrinhoDiv.appendChild(totalDiv);

  const pagarBtn = document.createElement("button");
  pagarBtn.innerText = "Finalizar compra";
  pagarBtn.onclick = () => {
    alert("Redirecionando para Mercado Pago...");
  };
  carrinhoDiv.appendChild(pagarBtn);
}

function removerDoCarrinho(nome) {
  carrinho = carrinho.filter(i => i.nome !== nome);
  atualizarCarrinho();
}

document.addEventListener("DOMContentLoaded", () => {
  const botoes = document.querySelectorAll(".produto-card button");
  botoes.forEach(botao => {
    botao.addEventListener("click", () => {
      const nomeProduto = botao.parentElement.querySelector("h3").innerText;
      adicionarAoCarrinho(nomeProduto);
    });
  });
});
