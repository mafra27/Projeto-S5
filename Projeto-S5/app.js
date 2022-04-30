/*const buscarPorCategoria = require("./controllers/buscarLivros")
const ordernarLivrosPagina = require("./controllers/listarLivrosOrdenados")
const buscarRecomendados = require("./controllers/listarRecomendados")
const buscarNaoLidos = require("./controllers/listarLivrosNaoLidos")*/
const livros = require("./database")

console.log("========= MENU =========")
console.log("1- CATEGORIA: Buscar livro por categoria")
console.log("2- ORDERNAR: Ordernar livros por quantidade de paginas")
console.log("3- RECOMENDADOS: Buscar livros recomendados")
console.log("4-LISTA DE DESEJOS: Buscar lista de desejo")
console.log("\n5- SAIR")

const recebendoValorDoUsuario = require("readline-sync")
const qa1Usuario = recebendoValorDoUsuario.questionInt("Escolha uma opcao segundo o menu acima ")


switch (qa1Usuario) {
    case 1:
        const categoria = recebendoValorDoUsuario.question("Qual a categoria desejada? ")
        const livrosCategoria = livros.filter((livro) => livro.categoria == categoria)
        console.log(livrosCategoria)
        break;

    case 2:
        const organizacaoDeLivros = livros.sort((a, b) => a.paginas - b.paginas)
        console.log(organizacaoDeLivros)
        break;

    case 3:
        const livrosRecomendados = livros.filter((livro) => livro.recomenda == true)
        console.log(livrosRecomendados)
        break;

    case 4:
        const livrosNaoLidos = livros.filter((livro) => livro.leu == false)
        console.log(livrosNaoLidos)
        break;

    case 5: 
        break;

    default: " Opcao invalida, a operacao esta sendo cancelada! "
        break;
}