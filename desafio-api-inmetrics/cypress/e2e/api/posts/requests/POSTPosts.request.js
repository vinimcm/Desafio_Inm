
/// <reference types="cypress"/>

function uploadImage(idUser, image, productColor, imageName, idProduct, bearerToken) {
    return cy.task("uploadImage", {
    userId: idUser,
    source: image,
    color: productColor,
    fileName: imageName,
    productId: idProduct,
    token: bearerToken
    })
}

export {uploadImage}
