// sessão

function validarSessao() {
  // aguardar();

  var email = sessionStorage.EMAIL_USUARIO;
  var nome = sessionStorage.NOME_USUARIO;
  var sobrenome = sessionStorage.SOBRENOME_USUARIO;
  var fk_casa = sessionStorage.FKCASA_USUARIO;
  var id = sessionStorage.ID_USUARIO;
  var pontos = sessionStorage.PONTO_USUARIO;
  var fk_frase = sessionStorage.FKFRASE_USUARIO;

  var b_usuario = document.getElementById("b_usuario");

  if (email != null && nome != null) {
    // window.alert(`Seja bem-vindo, ${nome}!`);
    b_usuario.innerHTML = nome;
    c_usuario.innerHTML = sobrenome;

    // finalizarAguardar();
  } else {
    window.location = "../login.html";
  }
}

function limparSessaoCasas() {
  // aguardar();
  sessionStorage.clear();
  // finalizarAguardar();
  window.location = "../login.html";
}
function limparSessao() {
  // aguardar();
  sessionStorage.clear();
  // finalizarAguardar();
  window.location = "login.html";
}
// carregamento (loading)
function aguardar() {
  var divAguardar = document.getElementById("div_aguardar");
  divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
  var divAguardar = document.getElementById("div_aguardar");
  divAguardar.style.display = "none";

  var divErrosLogin = document.getElementById("div_erros_login");
  if (texto) {
    divErrosLogin.innerHTML = texto;
  }
}

// modal
function mostrarModal() {
  var divModal = document.getElementById("div_modal");
  divModal.style.display = "flex";
}

function fecharModal() {
  var divModal = document.getElementById("div_modal");
  divModal.style.display = "none";
}

// Alterar fk
