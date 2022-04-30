const livros = require("../database.js")
//console.log(livros)

const recomendados = true
const livrosRecomendados= livros.filter((livro) => livro.recomenda == recomendados)
console.log(livrosRecomendados)