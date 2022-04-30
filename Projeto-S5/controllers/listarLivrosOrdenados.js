const livros = require("../database.js")
//console.log(livros)


const organizacaoDeLivros = livros.sort((a,b)=> a.paginas-b.paginas)
console.log(organizacaoDeLivros)