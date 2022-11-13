/*export default [
  (questao1 = {
    questao: "O que prefere ser?",
    alternativas: [
      { option: "Apreciado(a)", valor: 20 },
      { option: "Confiável", valor: 20 },
      { option: "Temido(a)", valor: 20 },
      { option: "Invejado(a)", valor: 20 },
      { option: "Elogiado(a)", valor: 20 },
    ],
  }),
  (questao2 = {
    questao: "Qual das matérias a seguir voçê gostaria de estudas?",
    alternativas: [
      { option: "Feitiços", valor: 10 },
      { option: "Poções", valor: 10 },
      { option: "História da magia", valor: 10 },
      { option: "Astronomia", valor: 10 },
      { option: "Herbologia", valor: 10 },
    ],
  }),
  (questao3 = {
    questao:
      "Tarde da noite caminhando sozinho, voçê escuta um grito pedindo socorro, o que voçê faz?",
    alternativas: [
      { option: "Se esconde, para pensar em quais feitiços usar", valor: 10 },
      {
        option: "Vai de confronto ao pedido de socorro para ajudar",
        valor: 10,
      },
      {
        option:
          "Continua seu caminho, preparado para qualquer inimigo a frente",
        valor: 10,
      },
      {
        option: "Decide ajudar, tomando cuidado para não ser percebido",
        valor: 10,
      },
    ],
  }),
  (questao4 = {
    questao: "Escolha um animal para passar as aulas com voçê",
    alternativas: [
      { option: "Gato", valor: 10 },
      { option: "Coruja", valor: 10 },
      { option: "Rato", valor: 10 },
      { option: "Sapo", valor: 10 },
      { option: "Coelho", valor: 10 },
    ],
  }),
  (questao5 = {
    questao: "Qual dos valores abaixo voçê prefere?",
    alternativas: [
      { option: "Coragem", valor: 30 },
      { option: "Cordialidade", valor: 30 },
      { option: "Sabedoria", valor: 30 },
      { option: "Ambição", valor: 30 },
    ],
  }),
];*/

function next() {
  cont1.style.display = "none";
  cont2.style.display = "flex";
}

function next2(params) {
  cont2.style.display = "none";
  cont3.style.display = "flex";
}
function next3(params) {
  cont3.style.display = "none";
  cont4.style.display = "flex";
}
function next4(params) {
  cont4.style.display = "none";
  cont5.style.display = "flex";
}
function next5(params) {
  cont5.style.display = "none";
  cont6.style.display = "flex";
}
function next6(params) {
  sectionMap.style.display = "none";
  sectionHog.style.display = "block";
}
