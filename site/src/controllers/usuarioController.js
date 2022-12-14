var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
  console.log("ENTRAMOS NA usuarioController");
  res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
  usuarioModel
    .listar()
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao realizar a consulta! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}
function buscar(req, res) {
  var id = req.body.idServer;
  usuarioModel
    .buscar(id)
    .then(function (resultado) {
      if (resultado.length > 0) {
        console.log(`\nResultados encontrados: ${resultado.length}`);
        console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String
        res.json(resultado[0]);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao realizar a consulta! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}
function buscar2(req, res) {
  var id = req.body.idServer;
  usuarioModel
    .buscar(id)
    .then(function (resultado) {
      if (resultado.length > 0) {
        console.log(`\nResultados encontrados: ${resultado.length}`);
        console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String
        res.json(resultado[0]);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao realizar a consulta! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}
function buscar3(req, res) {
  var id = req.body.idServer;
  usuarioModel
    .buscar(id)
    .then(function (resultado) {
      if (resultado.length > 0) {
        console.log(`\nResultados encontrados: ${resultado.length}`);
        console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String
        res.json(resultado[0]);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao realizar a consulta! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}
function buscar4(req, res) {
  var id = req.body.idServer;
  usuarioModel
    .buscar(id)
    .then(function (resultado) {
      if (resultado.length > 0) {
        console.log(`\nResultados encontrados: ${resultado.length}`);
        console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String
        res.json(resultado[0]);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao realizar a consulta! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}
function pesquisaFrase(req, res) {
  var id = req.body.idServer;

  usuarioModel
    .pesquisaFrase(id)
    .then(function (resultado) {
      res.json(resultado[0]);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log("\nHouve um erro! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}
function entrar(req, res) {
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;

  if (email == undefined) {
    res.status(400).send("Seu email est?? undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha est?? indefinida!");
  } else {
    usuarioModel
      .entrar(email, senha)
      .then(function (resultado) {
        console.log(`\nResultados encontrados: ${resultado.length}`);
        console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

        if (resultado.length == 1) {
          console.log(resultado);
          res.json(resultado[0]);
        } else if (resultado.length == 0) {
          res.status(403).send("Email e/ou senha inv??lido(s)");
        } else {
          res.status(403).send("Mais de um usu??rio com o mesmo login e senha!");
        }
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o login! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function cadastrar(req, res) {
  // Crie uma vari??vel que v?? recuperar os valores do arquivo cadastro.html
  var nome = req.body.nomeServer;
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;
  var sobrenome = req.body.sobreNomeServer;

  // Fa??a as valida????es dos valores
  if (nome == undefined) {
    res.status(400).send("Seu nome est?? undefined!");
  } else if (email == undefined) {
    res.status(400).send("Seu email est?? undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha est?? undefined!");
  } else {
    // Passe os valores como par??metro e v?? para o arquivo usuarioModel.js
    usuarioModel
      .cadastrar(nome, sobrenome, email, senha)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}
function inserirfrase(req, res) {
  var frase = req.body.fraseServer;
  var id = req.body.idServer;

  usuarioModel
    .inserirfrase(frase, id)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log("\nHouve um erro! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function alterar(req, res) {
  // Crie uma vari??vel que v?? recuperar os valores do arquivo cadastro.html
  var casa = req.body.casaServer;
  var id = req.body.idServer;

  // Passe os valores como par??metro e v?? para o arquivo usuarioModel.js
  usuarioModel
    .alterar(casa, id)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "\nHouve um erro ao realizar ao modificar a fk! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function pontuar(req, res) {
  // Crie uma vari??vel que v?? recuperar os valores do arquivo cadastro.html
  var pontos = req.body.pontoServer;
  var id = req.body.idServer;

  // Passe os valores como par??metro e v?? para o arquivo usuarioModel.js
  usuarioModel
    .pontuar(pontos, id)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "\nHouve um erro ao realizar ao modificar a fk! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}
function retornar(req, res) {
  // Crie uma vari??vel que v?? recuperar os valores do arquivo cadastro.html

  // Passe os valores como par??metro e v?? para o arquivo usuarioModel.js
  usuarioModel
    .retornar(id)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "\nHouve um erro ao realizar select! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function atualizarQtd(req, res) {
  // Crie uma vari??vel que v?? recuperar os valores do arquivo cadastro.html
  var id = req.body.casaServer;
  var qtd = req.body.quantidadeServer;

  // Passe os valores como par??metro e v?? para o arquivo usuarioModel.js
  usuarioModel
    .atualizarQtd(id, qtd)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log("\nHouve um erro  ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}
module.exports = {
  entrar,
  cadastrar,
  listar,
  testar,
  alterar,
  pontuar,
  retornar,
  buscar,
  buscar2,
  buscar3,
  buscar4,
  atualizarQtd,
  inserirfrase,
  pesquisaFrase,
};
