const express = require("express");
const router = express.Router();

router.get("/articles", (req,res) => {
    res.send("ROTA DE Artigos")
});

router.get("/admin/articles/new", (req, res) => {
    res.send("ROTA PARA CRIAR NOVO ARTIGO")
})

module.exports = router;