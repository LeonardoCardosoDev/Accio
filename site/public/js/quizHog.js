var vt_acertos = [];
var somaAcerto = 0;

function next() {
  cont1.style.display = "none";
  cont2.style.display = "flex";
}

function next2(params) {
  var qestao = document.getElementsByName("questao");
  for (var i = 0; i < qestao.length; i++) {
    if (qestao[i].checked) {
    }
  }

  cont2.style.display = "none";
  cont3.style.display = "flex";
}
function next3(params) {
  var qestao = document.getElementsByName("questao2");
  for (var i = 0; i < qestao.length; i++) {
    if (qestao[i].checked) {
    }
  }

  cont3.style.display = "none";
  cont4.style.display = "flex";
}
function next4(params) {
  var qestao = document.getElementsByName("questao3");
  for (var i = 0; i < qestao.length; i++) {
    if (qestao[i].checked) {
    }
  }

  cont4.style.display = "none";
  cont5.style.display = "flex";
}
function next5(params) {
  var qestao = document.getElementsByName("questao4");
  for (var i = 0; i < qestao.length; i++) {
    if (qestao[i].checked) {
    }
  }

  cont5.style.display = "none";
  cont6.style.display = "flex";
}
function next6(params) {
  var qestao = document.getElementsByName("questao5");
  for (var i = 0; i < qestao.length; i++) {
    if (qestao[i].checked) {
    }
  }
}
