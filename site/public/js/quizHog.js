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
      vt_acertos.push(Number(qestao[i].value));
    }
  }

  cont2.style.display = "none";
  cont3.style.display = "flex";
}
function next3(params) {
  var qestao = document.getElementsByName("questao2");
  for (var i = 0; i < qestao.length; i++) {
    if (qestao[i].checked) {
      vt_acertos.push(Number(qestao[i].value));
    }
  }

  cont3.style.display = "none";
  cont4.style.display = "flex";
}
function next4(params) {
  var qestao = document.getElementsByName("questao3");
  for (var i = 0; i < qestao.length; i++) {
    if (qestao[i].checked) {
      vt_acertos.push(Number(qestao[i].value));
    }
  }

  cont4.style.display = "none";
  cont5.style.display = "flex";
}
function next5(params) {
  var qestao = document.getElementsByName("questao4");
  for (var i = 0; i < qestao.length; i++) {
    if (qestao[i].checked) {
      vt_acertos.push(Number(qestao[i].value));
    }
  }

  cont5.style.display = "none";
  cont6.style.display = "flex";
}
function next6(params) {
  var qestao = document.getElementsByName("questao5");
  for (var i = 0; i < qestao.length; i++) {
    if (qestao[i].checked) {
      vt_acertos.push(Number(qestao[i].value));
    }
  }
  for (let index = 0; index < vt_acertos.length; index++) {
    somaAcerto += vt_acertos[index];
  }
  console.log(somaAcerto);
  console.log(vt_acertos);

  pontuacao_div.innerHTML = `${somaAcerto}/100`;

  cont6.style.display = "none";
  cont7.style.display = "flex";

  console.log(id);
  console.log(sessionStorage.FKCASA_USUARIO);
}
