const palavras = [
  "Algodão",
  "Babador",
  "Banheira",
  "Bebê conforto",
  "Berço",
  "Body",
  "Bolsa da mamãe",
  "Brinquedo de Banho",
  "Cabide",
  "Carrinho",
  "Casaquinho",
  "Chocalho",
  "Chupeta",
  "Chuquinha",
  "Cobertor",
  "Colcha",
  "Cueiro",
  "Escova",
  "Fralda",
  "Fralda de boca",
  "Gorro",
  "Lenço umedecido",
  "Lençol",
  "Luvinha",
  "Macacão",
  "Mamadeira",
  "Manta",
  "Meia",
  "Móbile",
  "Mordedor",
  "Papinha",
  "Pelúcia",
  "Pente",
  "Pomada",
  "Pratinho",
  "Prendedor de chupeta",
  "Sabonete",
  "Saída maternidade",
  "Sapatinho de lã",
  "Shampoo",
  "Talco",
  "Toalha"
  ];

function geraCartela(n) {
  const header = document.createElement('header');
  const imgTopo = document.createElement('img');
  imgTopo.src = '../img/topo-isabelle.png';
  imgTopo.alt = 'Bingo da Isabelle';
  header.appendChild(imgTopo);
  document.body.appendChild(header);

  const pagina = document.createElement('main');
  const cartela = document.createElement('section');
  cartela.id = `cartela${n}`;
  cartela.className = 'cartela';
  pagina.appendChild(cartela);
  document.body.appendChild(pagina);

  const numeros = [
    [...Array(15).keys()].map(num => num + 1),
    [...Array(15).keys()].map(num => num + 16),
    [...Array(15).keys()].map(num => num + 31),
    [...Array(15).keys()].map(num => num + 46),
    [...Array(15).keys()].map(num => num + 61),
  ];

  const tabela = document.createElement('table');
  for (let index = 0; index < 5; index += 1) {
    const linha = document.createElement('tr');
    for (let indexColuna = 0; indexColuna < 5; indexColuna += 1) {
      const celula = document.createElement('td');

      if (index == 2 && indexColuna == 2) {
        const meio = document.createElement('img');
        meio.src = '../img/meio.png';
        meio.alt = 'x';
        celula.appendChild(meio);
        linha.appendChild(celula);
        continue;
      }

      // Para bingo de palavras
      // celula.innerHTML = sorteia();

      // Para bingo de números
      const position = Math.floor(Math.random() * numeros[indexColuna].length);
      celula.innerHTML = numeros[indexColuna][position];
      numeros[indexColuna].splice(position, 1);

      linha.appendChild(celula);
    }
    tabela.appendChild(linha);
  }

  document.body.appendChild(tabela);
}

function sorteia()
{
    var x = Math.floor(Math.random()*palavras.length);
    var pl = palavras[x];
    palavras.splice(x, 1);
    return pl;
}

window.onload = () => {
  for (let index = 0; index < 50; index += 1) {
    geraCartela(index);
  }
};
