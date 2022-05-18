/* let productsList = document.getElementsByClassName("produtos")

//listando produtos da base
function listProducts(listaProdutos){
    //limpando a lista, para listar novamente os produtos
    productsList.innerHTML = ""
    //percorrendo o array de produtos
    for(let i = 0; i < listaProdutos.length; i++){
        //acessando cada produto
        let product = listaProdutos[i]
        
        //criando card produto (return LI)
        let productCard = createCardProduct(product)
        productsList.appendChild(productCard)
    }
}
listProducts(data)

//função criar card produto
function createCardProduct(product){
    //recuperando informações do produto
    let imageProduct       = product.img
    let tagProduct         = product.tag
    let nameProduct        = product.nameItem
    let descriptionProduct = product.descriptionProduto
    let priceProduct       = product.value
    
    //criando elementos do card produto e adicionando classes a eles
    let tagLi          = document.createElement("li")
    tagLi.classList.add("item-vitrine")

    let tagFigure      = document.createElement("fig")
    tagFigure.classList.add("figure-vitrine")

    let tagImage       = document.createElement("img")
    tagImage.classList.add("img-vitrine")

    let tagSection     = document.createElement("section")
    tagSection.classList.add("texts-vitrine")

    let tagT           = document.createElement("p")
    tagT.classList.add("tag")

    let tagProductName = document.createElement("p")
    tagProductName.classList.add("product-name")

    let tagDescription = document.createElement("p")
    tagDescription.classList.add("description")

    let tagPrice       = document.createElement("p")
    tagPrice.classList.add("price")

    let tagBtn         = document.createElement("button")
    tagBtn.classList.add("btn-add-carrinho")

    //adicionar as informações nas tags criadas
    tagImage.src             = imageProduct
    tagImage.alt             = nameProduct
    tag.innerHTML            = tagProduct
    tagProductName.innerHTML = `<strong> ${nameProduct}</strong>`
    tagDescription.innerHTML = descriptionProduct
    tagPrice.innerHTML       = `<strong>R$ ${priceProduct}</strong>`

    //montar o template card    
    tagFigure.appendChild(tagImage)
    tagSection.append(tagT, tagProductName, tagDescription, tagPrice, tagBtn)
    tagLi.append(tagFigure, tagSection)

    //retornar card criado
    return tagLi
}

//interceptando evento
let evento = tagBtn.addEventListener("click", sendToCar)

//função que vai ser chamada no evento
function sendToCar(event, cardProduto){
    //criando tags do carrinho e adicionando classes
    let tagLiCar      = document.createElement("li")
    tagLiCar.classList.add("item-carrinho")
    
    let tagFigureCar  = document.createElement("figure")
    tagFigureCar.classList.add("figure-carrinho")
    
    let tagImageCar   = document.createElement("img")
    tagImageCar.classList.add("img-carrinho")
    
    let tagSectionCar = document.createElement("section")
    tagSectionCar.classList.add("section-carrinho")

    let tag
    
    let tagBtnCar     = document.createElement("button")
    tagBtnCar.classList.add("btn-remove")
    
    tagUl.classList.add("lista-produtos-carrinho")

    //inserindo as informações recebidas nas tags criadas
    tagImageCar = tagImage
    
    //montando o template Novo Produto
    tagFigureCar.appendChild(tagImageCar)
    tagSectionCar.append(tagProductName, tagPrice, tagBtn, tagBtnCar)
    tagLiCar.append(tagFigureCar, tagSectionCar)

    tagUl.appendChild(tagLiCar)

    //retornando produto adicionado ao carrinho
    return tagLiCar
}

//função remover item - A MONTAR
function removeItemCar(){

}

//somando produtos do carrinho  - A MONTAR
let quantidade = 0
let total = 0
function sumCar(tagUl){
    for(let i = 0; i < tagUl.length; i++){
        quantidade++
        total += Number("linha2")
    }
}


 */