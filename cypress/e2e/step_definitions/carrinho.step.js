const { Given, When, Then} = require("@badeball/cypress-cucumber-preprocessor");
import CarrinhoPage from '../pages/carrinho.page' 

Given("que estou na home", () => {
 CarrinhoPage.visit
})

When("adicionar um produto no carrinho", () => {
CarrinhoPage.addCarrinho
})

Then("vejo produto adicionado com sucesso", () => {
  CarrinhoPage.MenuCarrinho
})


When("remover o produto", () => {
   CarrinhoPage.MenuCarrinho
   CarrinhoPage.removeProduto
})

Then("vejo produto removido com sucesso", () => {
  CarrinhoPage.CarrinhoVazio
})

When("acessar o carrinho sem produto adicionado", () => {
  CarrinhoPage.MenuCarrinho
})

Then("vejo carrinho sem produto", () => {
  CarrinhoPage.CarrinhoVazio
})

When("adicionar um ou mais produto no carrinho", () => {
  
})

 