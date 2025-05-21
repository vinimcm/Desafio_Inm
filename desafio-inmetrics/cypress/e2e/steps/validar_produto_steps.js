/// <reference types="Cypress" />
import HomePage from "../pages/home_page";
import ProductPage from "../pages/product_page";
const homePage = new HomePage
const productPage = new ProductPage

Given(/^que estou na página de pagamento com o produto "([^"]*)" no carrinho$/, (produto) => {
	console.log(produto);
	homePage.acessarBusca()
    console.log(produto);
    homePage.buscarItem(produto)
    productPage.clicarNoPrimeiroProduto()
    productPage.adicionarAoCarrinho()
    productPage.clicarCheckOut()
});

When(/^o produto é exibido na lista de itens$/, () => {
	return true;
});


Then(/^o nome do produto deve ser "([^"]*)"$/, (produto) => {
    console.log(produto);
	cy.contains(produto)
});

Then(/^o valor do produto deve ser "([^"]*)"$/, (valor) => {
    console.log(valor);
	cy.contains(valor)
});

