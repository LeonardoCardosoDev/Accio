var grifinoria = [];
var sonserina = [];
var corvinal = [];
var lufalufa = [];
var vt_casas = [];

var somaGrifinoria = 0;
var somaSonserina = 0;
var somaCorvinal = 0;
var somaLufalufa = 0;

var casaVencedora = 0;
var indeceVencedora = 0;

function next() {
  cont1.style.display = "none";
  cont2.style.display = "flex";
}

function next2(params) {
  var qestao = document.getElementsByName("questao");
  for (var i = 0; i < qestao.length; i++) {
    if (qestao[i].checked) {
      if (qestao[i] == document.getElementById("qt1_Gr")) {
        grifinoria.push(Number(qestao[i].value));
        console.log(grifinoria);
      }
      if (qestao[i] == document.getElementById("qt1_Co")) {
        corvinal.push(Number(qestao[i].value));
        console.log(corvinal);
      }
      if (qestao[i] == document.getElementById("qt1_So")) {
        sonserina.push(Number(qestao[i].value));
        console.log(sonserina);
      }
      if (qestao[i] == document.getElementById("qt1_Lu")) {
        lufalufa.push(Number(qestao[i].value));
        console.log(lufalufa);
      }
      if (qestao[i] == document.getElementById("qt1_todas")) {
        lufalufa.push(Number(qestao[i].value));
        sonserina.push(Number(qestao[i].value));
        corvinal.push(Number(qestao[i].value));
        grifinoria.push(Number(qestao[i].value));
      }
    }
  }

  cont2.style.display = "none";
  cont3.style.display = "flex";
}
function next3(params) {
  var qestao = document.getElementsByName("questao2");
  for (var i = 0; i < qestao.length; i++) {
    if (qestao[i].checked) {
      if (qestao[i] == document.getElementById("qt2_Gr")) {
        grifinoria.push(Number(qestao[i].value));
        console.log(grifinoria);
      }
      if (qestao[i] == document.getElementById("qt2_Co")) {
        corvinal.push(Number(qestao[i].value));
        console.log(corvinal);
      }
      if (qestao[i] == document.getElementById("qt2_So")) {
        sonserina.push(Number(qestao[i].value));
        console.log(sonserina);
      }
      if (qestao[i] == document.getElementById("qt2_Lu")) {
        lufalufa.push(Number(qestao[i].value));
        console.log(lufalufa);
      }
      if (qestao[i] == document.getElementById("qt2_todas")) {
        lufalufa.push(Number(qestao[i].value));
        sonserina.push(Number(qestao[i].value));
        corvinal.push(Number(qestao[i].value));
        grifinoria.push(Number(qestao[i].value));
      }
    }
  }

  cont3.style.display = "none";
  cont4.style.display = "flex";
}
function next4(params) {
  var qestao = document.getElementsByName("questao3");
  for (var i = 0; i < qestao.length; i++) {
    if (qestao[i].checked) {
      if (qestao[i] == document.getElementById("qt3_Gr")) {
        grifinoria.push(Number(qestao[i].value));
        console.log(grifinoria);
      }
      if (qestao[i] == document.getElementById("qt3_Co")) {
        corvinal.push(Number(qestao[i].value));
        console.log(corvinal);
      }
      if (qestao[i] == document.getElementById("qt3_So")) {
        sonserina.push(Number(qestao[i].value));
        console.log(sonserina);
      }
      if (qestao[i] == document.getElementById("qt3_Lu")) {
        lufalufa.push(Number(qestao[i].value));
        console.log(lufalufa);
      }
    }
  }

  cont4.style.display = "none";
  cont5.style.display = "flex";
}
function next5(params) {
  var qestao = document.getElementsByName("questao4");
  for (var i = 0; i < qestao.length; i++) {
    if (qestao[i].checked) {
      if (qestao[i] == document.getElementById("qt4_Gr")) {
        grifinoria.push(Number(qestao[i].value));
        console.log(grifinoria);
      }
      if (qestao[i] == document.getElementById("qt4_Co")) {
        corvinal.push(Number(qestao[i].value));
        console.log(corvinal);
      }
      if (qestao[i] == document.getElementById("qt4_So")) {
        sonserina.push(Number(qestao[i].value));
        console.log(sonserina);
      }
      if (qestao[i] == document.getElementById("qt4_Lu")) {
        lufalufa.push(Number(qestao[i].value));
        console.log(lufalufa);
      }
      if (qestao[i] == document.getElementById("qt4_todas")) {
        lufalufa.push(Number(qestao[i].value));
        sonserina.push(Number(qestao[i].value));
        corvinal.push(Number(qestao[i].value));
        grifinoria.push(Number(qestao[i].value));
      }
    }
  }

  cont5.style.display = "none";
  cont6.style.display = "flex";
}
function next6(params) {
  var qestao = document.getElementsByName("questao5");
  for (var i = 0; i < qestao.length; i++) {
    if (qestao[i].checked) {
      if (qestao[i] == document.getElementById("qt5_Gr")) {
        grifinoria.push(Number(qestao[i].value));
        console.log(grifinoria);
      }
      if (qestao[i] == document.getElementById("qt5_Co")) {
        corvinal.push(Number(qestao[i].value));
        console.log(corvinal);
      }
      if (qestao[i] == document.getElementById("qt5_So")) {
        sonserina.push(Number(qestao[i].value));
        console.log(sonserina);
      }
      if (qestao[i] == document.getElementById("qt5_Lu")) {
        lufalufa.push(Number(qestao[i].value));
        console.log(lufalufa);
      }
    }
  }

  cont6.style.display = "none";

  for (let index = 0; index < grifinoria.length; index++) {
    somaGrifinoria += grifinoria[index];
  }
  for (let index = 0; index < sonserina.length; index++) {
    somaSonserina += sonserina[index];
  }
  for (let index = 0; index < corvinal.length; index++) {
    somaCorvinal += corvinal[index];
  }
  for (let index = 0; index < lufalufa.length; index++) {
    somaLufalufa += lufalufa[index];
  }

  for (let index = 0; index < 4; index++) {
    if (index == 0) {
      vt_casas.push(somaGrifinoria);
    }
    if (index == 1) {
      vt_casas.push(somaSonserina);
    }
    if (index == 2) {
      vt_casas.push(somaCorvinal);
    }
    if (index == 3) {
      vt_casas.push(somaLufalufa);
    }
  }
  casaVencedora = Math.max.apply(null, vt_casas);
  console.log(casaVencedora);

  indeceVencedora = vt_casas.indexOf(casaVencedora);
  console.log(indeceVencedora);

  if (indeceVencedora == 0) {
    Grifinoria.style.display = "flex";
  }
  if (indeceVencedora == 1) {
    Sonserina.style.display = "flex";
  }
  if (indeceVencedora == 2) {
    Corvinal.style.display = "flex";
  }
  if (indeceVencedora == 3) {
    Lufalufa.style.display = "flex";
  }
}
