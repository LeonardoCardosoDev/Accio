function carta() {
  imgCarta.style.display = "none";
  imgCarta2.style.display = "block";
}
function cartaOpen() {
  let modal = document.querySelector(".modal");

  imgCarta2.style.display = "none";
  modal.style.display = "flex";
}
