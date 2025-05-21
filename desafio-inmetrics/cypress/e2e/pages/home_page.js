import HomeElements from "../elements/home_elements"
const homeElements = new HomeElements

const url = Cypress.config('baseUrl')

class HomePage {

    acessarBusca() {
        cy.visit(url)
        cy.wait(5000)
        cy.get(homeElements.btnMenuSearch()).click()
    }

    buscarItem(produto) {
        cy.get(homeElements.btnMenuSearch()).type(produto+'{enter}')
    }

    clicarCarrinho() {
        cy.get(homeElements.btnCart()).click()
    }

} export default HomePage