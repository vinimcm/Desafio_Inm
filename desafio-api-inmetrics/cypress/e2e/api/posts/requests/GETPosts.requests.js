/// <reference types="cypress"/>

function GetPost(name) {
    return cy. request ({
        method: "GET",
        url: "/products/search?name="+name+"&quantityPerEachCategory=-1",
        headers: {
            "Content-type": "application/json"
        },
        failOnStautsCode: false
    })
}

export {GetPost}