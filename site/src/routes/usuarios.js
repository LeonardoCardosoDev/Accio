var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
  usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
  usuarioController.listar(req, res);
});
router.post("/buscar", function (req, res) {
  usuarioController.buscar(req, res);
});
router.post("/buscar2", function (req, res) {
  usuarioController.buscar2(req, res);
});
router.post("/buscar3", function (req, res) {
  usuarioController.buscar3(req, res);
});
router.post("/buscar4", function (req, res) {
  usuarioController.buscar4(req, res);
});
//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
  usuarioController.cadastrar(req, res);
});

router.post("/inserirfrase", function (req, res) {
  usuarioController.inserirfrase(req, res);
});

router.post("/pesquisaFrase", function (req, res) {
  usuarioController.pesquisaFrase(req, res);
});
router.post("/autenticar", function (req, res) {
  usuarioController.entrar(req, res);
});
router.post("/retornar", function (req, res) {
  usuarioController.retornar(req, res);
});

router.put("/alterar", function (req, res) {
  usuarioController.alterar(req, res);
});

router.put("/atualizarQtd", function (req, res) {
  usuarioController.atualizarQtd(req, res);
});

router.put("/pontuar", function (req, res) {
  usuarioController.pontuar(req, res);
});

module.exports = router;
