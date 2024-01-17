const produtos = [
  {name: 'Lorem ipsum dolor sit amet', image: 'Ativos/Produtos/RedeCadeira.jpg', preco: 'R$ 300,00', link: 'produto.html'},
  {name: 'Lorem ipsum dolor sit amet', image: 'Ativos/Produtos/CadeiraRede.jpg', preco: 'R$ 300,00', link: 'produto.html'},
  {name: 'Lorem ipsum dolor sit amet', image: 'Ativos/Produtos/RedeCadeira.jpg', preco: 'R$ 300,00', link: 'produto.html'},
  {name: 'Lorem ipsum dolor sit amet', image: 'Ativos/Produtos/CadeiraRede.jpg', preco: 'R$ 300,00', link: 'produto.html'},
  {name: 'Lorem ipsum dolor sit amet', image: 'Ativos/Produtos/RedeCadeira.jpg', preco: 'R$ 300,00', link: 'produto.html'},
  {name: 'Lorem ipsum dolor sit amet', image: 'Ativos/Produtos/CadeiraRede.jpg', preco: 'R$ 300,00', link: 'produto.html'},
  {name: 'Lorem ipsum dolor sit amet', image: 'Ativos/Produtos/RedeCadeira.jpg', preco: 'R$ 300,00', link: 'produto.html'},
  {name: 'Lorem ipsum dolor sit amet', image: 'Ativos/Produtos/CadeiraRede.jpg', preco: 'R$ 300,00', link: 'produto.html'},
  {name: 'Lorem ipsum dolor sit amet', image: 'Ativos/Produtos/RedeCadeira.jpg', preco: 'R$ 300,00', link: 'produto.html'},
  {name: 'Lorem ipsum dolor sit amet', image: 'Ativos/Produtos/CadeiraRede.jpg', preco: 'R$ 300,00', link: 'produto.html'},
  {name: 'Lorem ipsum dolor sit amet', image: 'Ativos/Produtos/RedeCadeira.jpg', preco: 'R$ 300,00', link: 'produto.html'},
  {name: 'Lorem ipsum dolor sit amet', image: 'Ativos/Produtos/CadeiraRede.jpg', preco: 'R$ 300,00', link: 'produto.html'},
]


function criarProduto(img,nomeProduto,precoProduto, ref) {
  const link = document.createElement("a");
  const product = document.createElement("article");
  const containerImagem = document.createElement("div");
  // const imagem = document.createElement("img");
  const nome = document.createElement("h3");
  const preco = document.createElement("p");
  const info = document.createElement("div");

  // imagem.style.backgroundImage="url("+img+")";
  // imagem.src = img;
  nome.textContent = nomeProduto;
  preco.textContent = precoProduto;
  containerImagem.classList.add('foto_produto');
  info.classList.add('infos_produto');

  // containerImagem.append(imagem);
  containerImagem.style.backgroundImage="url("+img+")";
  info.append(nome, preco);
  product.classList.add('produto');

  product.append(containerImagem, info);

  link.href = ref;
  link.style.textDecoration = 'none';
  link.classList.add('link_produto');  
  link.append(product);
  return link;
}

function mostrarProdutos(nomeDiv) {
  const produtosLista = document.querySelector(nomeDiv);

  console.log(produtosLista);

  if (!produtosLista) return
  
  for (const item of produtos) {
    const produtoLista = criarProduto(item.image, item.name, item.preco, item.link);
    produtosLista.appendChild(produtoLista);
  }
}

mostrarProdutos('.lista_produtos');
mostrarProdutos('.produtos_novidades');

// function preencherProduto() {
//   const fotoProduto = document.querySelector('.container-foto-produto');

//   const imagem = document.createElement("img");
//   imagem.src = "url("+product.image+")";

//   fotoProduto.append(imagem);
  
//   const nomeProduto = document.querySelector('.nome-preco');

//   const nome = document.createElement("h3");
//   nome.textContent = produto.nome;

//   const valor = document.createElement("h4");
//   valor.textContent = produto.preco;

//   const descricaoProduto = document.querySelector('.descricao-produto');

//   descricaoProduto.textContent = produto.descricao;

// }

// preencherProduto();