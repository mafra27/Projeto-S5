const livros = require("../database.js")
//console.log(livros)

const categoria = "mangá"
const livrosCategoria = livros.filter((livro) => livro.categoria == categoria)
console.log(livrosCategoria)

