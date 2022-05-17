/* let productsList = document.getElementsByClassName("produtos")
console.log("oi")
console.log(productsList)

//listando produtos da base
function listarProdutos(listaProdutos){
    //limpando a lista, para listar novamente os produtos
    productsList.innerHTML = ""
    //percorrendo o array de produtos
    for(let i = 0; i < listaProdutos.length; i++)
        //acessando cada produto
        let produto = listaProdutos[i]
        //criando card produto (return LI)
        let cardProduto = criarCardProduto(produto)


}
listarProdutos(data)

//função criar card produto
function criarCardProduto(produto){
    //recuperando informações do produto
    let imageProduto = data.img
    let tagProduto = data.tag
    let nomeProduto = data.nameItem
    let descriptionProduto = data.descriptionProduto
    let priceProduto = data.value
    
    //loading elementos do card produto
    let tagLi = document.getElementsByClassName("item-carrinho")
    let tagFigure = document.getElementsByTagName("figure")
    let tagImage = document.getElementsByTagName("img")
    let tagSection = document.getElementsByClassName("texts")
    let tagTag = document.getElementsByClassName("tag")
    let tagProductName = document.getElementsByClassName("product-name")
    let tagTag = document.getElementsByTagName("p")
} */