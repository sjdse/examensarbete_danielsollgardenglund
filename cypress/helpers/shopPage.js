function goToSortiment() {
    cy.get('.ncgUrlList').contains('Sortiment').should('be.visible').click({force: true})
    cy.get('#PrimaryRouterInnerWrapper > .ncgPageWrapper > .ncgOneColumn > :nth-child(2) > .text-header-block > .row > .col-xs-12 > .oneColumnPageHeaderSpacer').should('contain', 'Sortiment')
}

function goToKaffe() {
    cy.get('.ncgUrlList').contains('Kaffe').click({force: true})
    cy.get('#SecondaryRouterInnerWrapper > .ncgPageWrapper > .ncgOneColumn > :nth-child(2) > .text-header-block > .row > .col-xs-12 > .oneColumnPageHeaderSpacer').should('contain', 'Kaffe')
}

function goToHotFood() {
    cy.get('.ncgUrlList').contains('Hot Food').click({force: true})
    cy.get(':nth-child(3) > .text-header-block > .row > .col-xs-12 > .oneColumnPageHeaderSpacer').should('contain', 'Hot Food')
}

function goToFreestyle() {
    cy.get('.ncgUrlList').contains('Freestyle').click({force: true})
    cy.get('#SecondaryRouterInnerWrapper > .ncgPageWrapper > .ncgOneColumn > :nth-child(3) > .text-header-block > .row > .col-xs-12 > .oneColumnPageHeaderSpacer').should('contain', 'Freestyle')
}

function goToKampanjer() {
    cy.get('.ncgUrlList').contains('Kampanjer och erbjudanden').click({force: true})
    cy.get(':nth-child(2) > .text-header-block > .row > .col-xs-12 > .oneColumnPageHeaderSpacer').should('contain', 'Kampanjer och erbjudanden')
}

function goToShopLandingPage() {
    cy.get('.ncgUrlList').contains('Välkommen').click({force: true})
    cy.get('#SecondaryRouterInnerWrapper > .ncgPageWrapper > .ncgOneColumn > :nth-child(2) > .text-header-block > .row > .col-xs-12 > .oneColumnPageHeaderSpacer').should('contain', 'Butiken')
}



module.exports = {
    goToFreestyle,
    goToHotFood,
    goToKaffe,
    goToKampanjer,
    goToShopLandingPage,
    goToSortiment
}