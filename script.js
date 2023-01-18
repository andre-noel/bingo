const modo = "palavras";
// const palavras = [
//   "Algodão",
//   "Babador",
//   "Banheira",
//   "Bebê conforto",
//   "Berço",
//   "Body",
//   "Bolsa da mamãe",
//   "Brinquedo de Banho",
//   "Cabide",
//   "Carrinho",
//   "Casaquinho",
//   "Chocalho",
//   "Chupeta",
//   "Chuquinha",
//   "Cobertor",
//   "Colcha",
//   "Cueiro",
//   "Escova",
//   "Fralda",
//   "Fralda de boca",
//   "Gorro",
//   "Lenço umedecido",
//   "Lençol",
//   "Luvinha",
//   "Macacão",
//   "Mamadeira",
//   "Manta",
//   "Meia",
//   "Móbile",
//   "Mordedor",
//   "Papinha",
//   "Pelúcia",
//   "Pente",
//   "Pomada",
//   "Pratinho",
//   "Prendedor de chupeta",
//   "Sabonete",
//   "Saída maternidade",
//   "Sapatinho de lã",
//   "Shampoo",
//   "Talco",
//   "Toalha"
//   ];

const palavras = [...Array(75).keys()].map(element => element + 1)

function sorteia()
{
    const x = Math.floor(Math.random()*palavras.length);
    const pl = palavras[x];
    palavras.splice(x, 1);
    return pl;
}

window.onload = () => {
  const botao = document.getElementById('sortear');
  const resultado = document.getElementById('resultado');
  const sorteados = document.getElementById('sorteados');
  botao.addEventListener('click', () => {
    botao.disabled = true;
    resultado.innerHTML = '';
    resultado.classList.add('rodando');
    const tm = setTimeout(() => {
       const s = sorteia();
       resultado.classList.remove('rodando');
       resultado.innerHTML = s;
       const paragraph = document.createElement('p');
       paragraph.innerHTML = s;
       sorteados.appendChild(paragraph);
       botao.disabled = false;
    }, 2000);
  });
};
