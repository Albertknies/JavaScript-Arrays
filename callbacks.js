const nomes = ["Evaldo", "Mari", "Camis"];

// Primeira forma para utilizar function normal
nomes.forEach(function (name) {
  console.log(name);
});

// segunda forma tira o function e adiona o Arrow functions => entreo o ) e a {} ----- Mais utilizada no mercado
nomes.forEach((name) => {
  console.log(name);
});

// Terceiro metedo  de forma externa
function imprimeNome (nome) {
    console.log(nome);
};

nomes.forEach(imprimeNome);