function voltarPerfil() {
  if (sessionStorage.FKCASA_USUARIO == 1) {
    window.location = "perfil.html";
  } else if (sessionStorage.FKCASA_USUARIO == 2) {
    window.location = "./casas/grifinoria.html";
  } else if (sessionStorage.FKCASA_USUARIO == 3) {
    window.location = "./casas/sonserina.html";
  } else if (sessionStorage.FKCASA_USUARIO == 4) {
    window.location = "./casas/corvinal.html";
  } else {
    window.location = "./casas/lufa-lufa.html";
  }
}
