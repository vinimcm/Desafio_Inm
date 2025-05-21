/// <reference types="Cypress" />
// const { Given, When, Then} = require("cypress-cucumber-preprocessor/steps")
import HomePage from "../pages/home_page";
const homePage = new HomePage

Given(/^que estou na página inicial da loja$/, () => {
	homePage.acessarBusca()
});


When(/^eu busco por "([^"]*)" no campo de busca$/, (produto) => {
	console.log(produto);
    homePage.buscarItem(produto)

});

Then(/^o produto "([^"]*)" deve aparecer nos resultados de busca$/, (produto) => {
	console.log(produto);
	cy.contains('Search result: ')
	cy.contains('ITEMS')
});
