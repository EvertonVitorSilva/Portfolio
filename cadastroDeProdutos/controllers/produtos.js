const Produtos = require("../repositorio/produtos");

module.exports = (app) => {
  app.get("/produtos", (req, res) => {
    Produtos.listaProdutos()
      .then((resultados) => res.status(200).json(resultados))
      .catch((erros) => res.status(400).json(erros));
  });

  app.post("/produtos", (req, res) => {
    const produto = req.body;

    Produtos.adicionaProduto(produto)
      .then((produtoCadastrado) => res.status(200).json(produtoCadastrado))
      .catch((erros) => res.status(400).json(erros));
  });

  app.get("/produtos/:cod", (req, res) => {
    const cod = parseInt(req.params.cod);

    Produtos.buscaCod(cod, res)
      .then((resultados) => res.status(200).json(resultados))
      .catch((erros) => res.status(400).json(erros));
  });

  app.patch("/produtos/:cod", (req, res) => {
    const cod = parseInt(req.params.cod);
    const valores = req.body;

    Produtos.alteraProduto(cod, valores, res)
      .then((resultados) => res.status(200).json(resultados))
      .catch((erros) => res.status(400).json(erros));
  });

  app.delete("/produtos/:cod", (req, res) => {
    const cod = parseInt(req.params.cod);

    Produtos.deletaProdutos(cod, res)
      .then((resultados) => res.status(200).json(resultados))
      .catch((erros) => res.status(400).json(erros));
  });
};
