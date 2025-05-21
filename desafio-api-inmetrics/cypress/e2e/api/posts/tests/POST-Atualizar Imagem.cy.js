/// <reference types="cypress"/>

import * as POST_POSTS from "../requests/POSTPosts.request.js"

describe('API de atualização de imagem de produto', () => {

    it('deve atualizar a imagem do produto e retornar um ID para a nova imagem',() =>{
 
        let idUser = 374228604
        let image = "fonejbl.jpg"
        let productColor = "DD3A5B"
        let imageName = "fonejbl.jpg"
        let idProduct = 20
        let bearerToken = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3d3cuYWR2YW50YWdlb25saW5lc2hvcHBpbmcuY29tIiwidXNlcklkIjozNzQyMjg2MDQsInN1YiI6InppbmltYWRtaW4iLCJyb2xlIjoiQURNSU4ifQ.hCA43tTK-K6aY3HBSyQF0wFhigpiYw9FxwZZR-VDM1E"

        POST_POSTS.uploadImage(idUser, image, productColor, imageName, idProduct, bearerToken).then((response)=>{
            cy.log('Status: ${response.status}')
            cy.log(JSON.stringify(response.data))
            expect(response).to.not.be.null
            expect(response.status).to.equal(200)

            const imageId = response.data.id;
            expect(imageId).to.not.be.null
            expect(imageId).to.not.be.undefined

            cy.log(`ID da nova imagem: ${imageId}`)
        })
    })
})

//     "Red": "DD3A5B",
//     "Gray": "C3C3C3",
//     "White": "FFFFFF",
//     "Blue": "3683D1",
//     "Purple": "545195",
//     "Yellow": "FCC23D",
//     "Unassigned": "ABCDEF",
//     "Black": "414141",
//     "Turquoise": "55CDD5"
