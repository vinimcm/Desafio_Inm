/// <reference types="cypress"/>

import * as GET_POSTS from "../requests/GETPosts.requests.js"

describe('API de busca de produtos', () =>{

    it('deve retornar uma lista de Posts', () =>{
        let nenhumProduto = '';

        GET_POSTS.GetPost(nenhumProduto).then((response) =>{
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.equal(200)
            Cypress._.each(response.body, (row) => {        
                expect(row.categoryId).to.not.be.null
                expect(row.productId).to.not.be.null

            })
        })
    })

    it('deve retornar apenas o produto correspondente à busca', ()=> {
        let id_post = 1;
        let produtoUnico = 'HP PAVILION 15Z TOUCH LAPTOP'
;
        GET_POSTS.GetPost(produtoUnico).then((response) =>{
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.equal(200)
            expect(response.body[0].categoryId).to.equal(id_post)

        })
    })

})