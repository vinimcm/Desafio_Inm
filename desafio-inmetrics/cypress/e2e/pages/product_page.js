import ProductElements from "../elements/product_elements"
import SearchElements from "../elements/search_elements"
const productElements = new ProductElements
const searchElements = new SearchElements

class ProductPage {

    clicarNoPrimeiroProduto() {
        cy.get(searchElements.btnFirstItem()).first().click()
    }

    selecionarCor(cor) {
        switch (cor){
            case 'YELLOW':
                cy.get(productElements.btnCorAmarela()).click()
                console.log("Cor Amarela");
                break;
            case 'BLUE':
                cy.get(productElements.btnCorAzul()).click()
                console.log("Cor Azul");
                break;
            case 'WHITE':
                cy.get(productElements.btnCorBranca()).click()
                console.log("Cor Branca");
                break;
            default:
                "Cores";
                break;
        }
    }

    selecionarQuantidade(quantidade) {
        cy.get(productElements.inputQuantidade()).type(quantidade)
    }

    adicionarAoCarrinho() {
        cy.get(productElements.btnAddToCart()).click()
    }

    clicarCheckOut() {
        cy.get(productElements.btnCheckOut()).click()
    }

} export default ProductPage