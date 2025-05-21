/// <reference types="Cypress" />
import HomePage from "../pages/home_page";
import ProductPage from "../pages/product_page";
const homePage = new HomePage
const productPage = new ProductPage


Given(/^que estou na página do produto "([^"]*)"$/, (produto) => {
	console.log(produto);
	homePage.acessarBusca()
    console.log(produto);
    homePage.buscarItem(produto)
    productPage.clicarNoPrimeiroProduto()
});

When(/^eu seleciono a cor "([^"]*)" e a quantidade "([^"]*)"$/, (cor, quantidade) => {
    productPage.selecionarCor(cor)
	console.log(cor);
	productPage.selecionarQuantidade(quantidade)
	console.log(quantidade);

});


When(/^adiciono o produto ao carrinho$/, () => {
	productPage.adicionarAoCarrinho()
});

Then(/^o produto "([^"]*)" com cor "([^"]*)" e quantidade "([^"]*)" deve aparecer no carrinho$/, (produto, cor, quantidade ) => {
	homePage.clicarCarrinho()
	cy.contains(produto)
	cy.contains(cor)
	cy.contains("QTY: " + quantidade)
	

});
