const products = [
  { name: "BABYDOOL CAROL AZUL FROZEN E ROSA", size: "M", stock: 1, price: 79.90, pix: 69.90, colors: ["#0000ff","#ff69b4"], img: "assets/images/produtos/BABYDOOLCAROLAZULFROZENEROSA.jpg" },
  { name: "BABYDOOL CAROL VERMELHO", size: "M", stock: 1, price: 79.90, pix: 69.90, colors: ["#ff0000"], img: "assets/images/produtos/BABYDOOLCAROLVERMELHO.jpg" },
  { name: "BABYDOOL LIA AZUL", size: "G", stock: 1, price: 79.90, pix: 69.90, colors: ["#0000ff"], img: "assets/images/produtos/BABYDOOLLIAAZUL.jpg" },
  { name: "BABYDOOL LIA PRETO", size: "M", stock: 1, price: 79.90, pix: 69.90, colors: ["#000000"], img: "assets/images/produtos/BABYDOOLLIAPRETO.jpg" },
  { name: "BABYDOOL LIA ROXO", size: "P", stock: 1, price: 79.90, pix: 69.90, colors: ["#800080"], img: "assets/images/produtos/BABYDOOLLIAROXO.jpg" },
  { name: "BABYDOOL LIA VERMELHO", size: "G", stock: 1, price: 79.90, pix: 69.90, colors: ["#ff0000"], img: "assets/images/produtos/BABYDOOLLIAVERMELHO.jpg" },
  { name: "CALCINHA FIO", size: "G", stock: 1, price: 18.50, pix: 18.50, colors: ["aleatória"], img: "assets/images/produtos/CALCINHAFIO.jpg" },
  { name: "CALCINHA FIO", size: "M", stock: 2, price: 18.50, pix: 18.50, colors: ["aleatória"], img: "assets/images/produtos/CALCINHAFIO.jpg" },
  { name: "CALCINHA FIO", size: "P", stock: 2, price: 18.50, pix: 18.50, colors: ["aleatória"], img: "assets/images/produtos/CALCINHAFIO.jpg" },
  { name: "CHAMISE PRETA", size: "M", stock: 1, price: 104.90, pix: 94.90, colors: ["#000000"], img: "assets/images/produtos/CHAMISEPRETA.jpg" },
  { name: "CONJUNTO BARBARA ROSA", size: "P", stock: 1, price: 94.90, pix: 84.90, colors: ["#ff69b4"], img: "assets/images/produtos/CONJUNTOBARBARAROSA.jpg" },
  { name: "CONJUNTO BARBARA", size: "G", stock: 1, price: 94.90, pix: 84.90, colors: ["#ff0000"], img: "assets/images/produtos/CONJUNTOBARBARA.jpg" },
  { name: "CONJUNTO BARCELONA", size: "P", stock: 1, price: 85.90, pix: 75.90, colors: ["#ff0000"], img: "assets/images/produtos/CONJUNTOBARCELONA.jpg" },
  { name: "CONJUNTO CORSET LIA BORDADO", size: "G", stock: 1, price: 94.90, pix: 84.90, colors: ["#800080"], img: "assets/images/produtos/CONJUNTOCORSETLIABORDADO.jpg" },
  { name: "CONJUNTO HELENA", size: "M", stock: 1, price: 94.90, pix: 84.90, colors: ["#ff69b4"], img: "assets/images/produtos/CONJUNTOHELENA.jpg" },
  { name: "CONJUNTO LAS VEGAS", size: "P", stock: 1, price: 74.90, pix: 64.90, colors: ["#ff0000"], img: "assets/images/produtos/CONJUNTOLASVEGAS.jpg" },
  { name: "CONJUNTO OLIMPIA", size: "M", stock: 1, price: 74.90, pix: 64.90, colors: ["#ff0000"], img: "assets/images/produtos/CONJUNTOOLIMPIA.jpg" },
  { name: "CONJUNTO RENATA", size: "M", stock: 1, price: 94.90, pix: 84.90, colors: ["#ff69b4"], img: "assets/images/produtos/CONJUNTORENATA.jpg" },
  { name: "CONJUNTO THAY", size: "P", stock: 1, price: 74.90, pix: 64.90, colors: ["#ff0000"], img: "assets/images/produtos/CONJUNTOTHAY.jpg" },
  { name: "CUIDADOS ÍNTIMOS", size: "-", stock: 2, price: 20.00, pix: 20.00, colors: ["diversas"], img: "assets/images/produtos/CUIDADOSINTIMOS.jpg" },
  { name: "PERFUME DE CALCINHA", size: "-", stock: 2, price: 12.00, pix: 12.00, colors: ["diversas"], img: "assets/images/produtos/PERFUMEDECALCINHA.jpg" },
  { name: "PIJAMA SUED MANGA CORAÇÃO", size: "M", stock: 1, price: 74.90, pix: 64.90, colors: ["#ff0000"], img: "assets/images/produtos/PIJAMASUEDMANGACORACAO.jpg" },
  { name: "SUTIÃ DIA A DIA ROSA BEBÊ", size: "P", stock: 1, price: 30.00, pix: 30.00, colors: ["#ffc0cb"], img: "assets/images/produtos/SUTIADIADIA.jpg" },
  { name: "SUTIÃ DIA A DIA ROSA BEBÊ", size: "M", stock: 1, price: 30.00, pix: 30.00, colors: ["#ffc0cb"], img: "assets/images/produtos/SUTIADIADIA.jpg" },
  { name: "SUTIÃ DIA A DIA ROSA BEBÊ", size: "G", stock: 1, price: 30.00, pix: 30.00, colors: ["#ffc0cb"], img: "assets/images/produtos/SUTIADIADIA.jpg" },
  { name: "SUTIÃ DIA A DIA NUDE", size: "GG", stock: 1, price: 30.00, pix: 30.00, colors: ["#f5deb3"], img: "assets/images/produtos/SUTIADIADIA.jpg" },
  { name: "SUTIÃ DIA A DIA BEGE", size: "P", stock: 1, price: 30.00, pix: 30.00, colors: ["#f5f5dc"], img: "assets/images/produtos/SUTIADIADIA.jpg" },
  { name: "SUTIÃ DIA A DIA BEGE", size: "M", stock: 1, price: 30.00, pix: 30.00, colors: ["#f5f5dc"], img: "assets/images/produtos/SUTIADIADIA.jpg" },
  { name: "SUTIÃ DIA A DIA BEGE", size: "G", stock: 1, price: 30.00, pix: 30.00, colors: ["#f5f5dc"], img: "assets/images/produtos/SUTIADIADIA.jpg" },
  { name: "SUTIÃ DIA A DIA BEGE", size: "GG", stock: 1, price: 30.00, pix: 30.00, colors: ["#f5f5dc"], img: "assets/images/produtos/SUTIADIADIA.jpg" },
  { name: "SUTIÃ DIA A DIA AZUL ESCURO", size: "M", stock: 1, price: 30.00, pix: 30.00, colors: ["#00008b"], img: "assets/images/produtos/SUTIADIADIA.jpg" },
  { name: "SUTIÃ DIA A DIA AZUL ESCURO", size: "G", stock: 1, price: 30.00, pix: 30.00, colors: ["#00008b"], img: "assets/images/produtos/SUTIADIADIA.jpg" },
  { name: "SUTIÃ DIA A DIA AZUL ESCURO", size: "GG", stock: 1, price: 30.00, pix: 30.00, colors: ["#00008b"], img: "assets/images/produtos/SUTIADIADIA.jpg" },
  { name: "TSHIRT ADIDAS", size: "Único", stock: 1, price: 49.90, pix: 39.90, colors: ["#FFFF00"], img: "assets/images/produtos/TSHIRTADIDAS.jpg" },
  { name: "TSHIRT BÁSICA", size: "Único", stock: 3, price: 39.90, pix: 39.90, colors: ["#A52A2A","#F5F5DC","#FFC0CB"], img: "assets/images/produtos/TSHIRTBASICA.jpg" },
  { name: "TSHIRT CAVALO", size: "Único", stock: 2, price: 39.90, pix: 39.90, colors: ["#FFFFFF","#A52A2A"], img: "assets/images/produtos/TSHIRTCAVALO.jpg" },
  { name: "TSHIRT CORAÇÃO BORDADO", size: "Único", stock: 2, price: 49.90, pix: 39.90, colors: ["#000000","#ADD8E6"], img: "assets/images/produtos/TSHIRTCORACAO_BORDADO.jpg" },
  { name: "TSHIRT COUNTRY GIRL", size: "Único", stock: 1, price: 39.90, pix: 39.90, colors: ["#A52A2A"], img: "assets/images/produtos/TSHIRTCOUNTRYGIRL.jpg" },
  { name: "TSHIRT FLORESÇA DEUS", size: "Único", stock: 2, price: 39.90, pix: 39.90, colors: ["#FFC0CB","#000000"], img: "assets/images/produtos/TSHIRTFLORESCADEUS.jpg" },
  { name: "TSHIRT JESUS", size: "Único", stock: 2, price: 39.90, pix: 39.90, colors: ["#ADD8E6"], img: "assets/images/produtos/TSHIRTJESUS.jpg" },
  { name: "TSHIRT PLUS LOS ANGELES", size: "Único", stock: 2, price: 39.90, pix: 39.90, colors: ["#FFFFFF"], img: "assets/images/produtos/TSHIRTPLUSLOSANGELES.jpg" },
  { name: "VESTIDO LONGO FERNANDA", size: "Único", stock: 1, price: 99.90, pix: 89.90, colors: ["#FF69B4"], img: "assets/images/produtos/VESTIDOLONGOFERNANDA.jpg" },
  { name: "VESTIDO MIDI FLORAL PRETO COM ROSA", size: "Único", stock: 1, price: 89.90, pix: 79.90, colors: ["#000000","#FF69B4"], img: "assets/images/produtos/VESTIDOMIDIFLORALPRETOCOMROSA.jpg" },
  { name: "VESTIDO MIDI XADREZ AZUL", size: "Único", stock: 1, price: 89.90, pix: 79.90, colors: ["#0000FF"], img: "assets/images/produtos/VESTIDOMIDIXADREZAZUL.jpg" },
];

// Código para gerar os cards automaticamente
const container = document.querySelector(".products-container");

products.forEach(product => {
  const card = document.createElement("div");
  card.classList.add("product-card");

  // Imagem
  const img = document.createElement("img");
  img.src = product.img;
  img.alt = product.name;
  card.appendChild(img);

  // Nome
  const name = document.createElement("h3");
  name.textContent = product.name;
  card.appendChild(name);

  // Preço
  const price = document.createElement("p");
  price.classList.add("price");
  price.innerHTML = `R$ ${product.price.toFixed(2)} <span class="pix">(PIX: R$ ${product.pix.toFixed(2)})</span>`;
  card.appendChild(price);

  // Cores
  const colorsDiv = document.createElement("div");
  colorsDiv.classList.add("colors");
  product.colors.forEach(color => {
    const dot = document.createElement("div");
    dot.classList.add("color-dot");
    dot.style.backgroundColor = color;
    colorsDiv.appendChild(dot);
  });
  card.appendChild(colorsDiv);

  // Tamanhos
  const sizesDiv = document.createElement("div");
  sizesDiv.classList.add("sizes");
  if(product.size !== "-"){
    const span = document.createElement("span");
    span.textContent = product.size;
    sizesDiv.appendChild(span);
  }
  card.appendChild(sizesDiv);

  // Quantidade
  const qty = document.createElement("input");
  qty.type = "number";
  qty.min = 1;
  qty.max = product.stock;
  qty.value = 1;
  card.appendChild(qty);

  // Botão adicionar ao carrinho
  const btn = document.createElement("button");
  btn.textContent = "Adicionar ao carrinho";
  card.appendChild(btn);

  container.appendChild(card);
});
