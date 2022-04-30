const livros = require("../database.js")
//console.log(livros)

const naoLidos = false
const livrosNaoLidos = livros.filter((livro) => livro.leu == naoLidos)
console.log(livrosNaoLidos)



