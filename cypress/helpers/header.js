function checkCity(city) {
    cy.get('.drop-down-radio-btn > .a-btn > .a-btn__label').should('contain', city)

}

function changeCity(city) {
    cy.get('.main-navigation__city-selection-drop-down-wrapper > .drop-down-radio-btn > .a-btn > .a-btn__label').click()
    cy.get('span').contains(city).click({ force: true })
}

function changePageToReservations() {
    cy.get('.material-menu').click()
    cy.get('.list > :nth-child(10) > .au-target').click()
}

function changepageToMoviesAndTrailers() {
    cy.get('.ncgNavigationInnerWrapper > :nth-child(3) > :nth-child(2) > .au-target').click()
}

function searchByDropdown(searchQuery) {
    
    cy.get('.main-navigation__right-section-list-item-search-icon-wrapper > .a-btn > .au-target').click()   //open search
    cy.get('.navigation-search-field__search-input').type(searchQuery)   //search
    cy.get(':nth-child(2) > .navigation-search-field__result-list-item-url').click() //click result in dropdown
    cy.get('.movie-information__poster-section-header').should('contain', searchQuery) //check that title is correct

}

function searchByEnter(searchQuery) {
    
    cy.get('.main-navigation__right-section-list-item-search-icon-wrapper > .a-btn > .au-target').click() //open search
    cy.get('.navigation-search-field__search-input').type(searchQuery + '{enter}') //search and click enter
    cy.get(':nth-child(1) > .ncgMovieResultWrapper > .ncgSearchMoviePoster > .image-url__image-wrapper > .image-url__image-inset', {timeout: 5000}).should('be.visible')
    cy.get(':nth-child(1) > .ncgMovieResultWrapper > .ncgSearchMoviePoster > .image-url__image-wrapper > .image-url__image-inset').click() //click poster for movie
    cy.get('.movie-information__poster-section-header').should('contain', searchQuery) //check that title is correct

}

function goToShop() {
    cy.get('.material-menu').click()
    cy.get('.list > :nth-child(12) > .au-target').click()
    cy.get('.oneColumnPageHeaderSpacer').should('contain', 'Butiken')
}

function goToCompanyTicketsPage() {
    cy.get('.ncgNavigationInnerWrapper > :nth-child(3) > :nth-child(6) > .au-target').click()
}

function goToTicketsPage() {
    cy.get('.ncgNavigationInnerWrapper > :nth-child(3) > :nth-child(1) > .au-target').click()
}

module.exports = {
    checkCity,
    changeCity,
    changePageToReservations,
    changepageToMoviesAndTrailers,
    searchByDropdown,
    searchByEnter,
    goToShop,
    goToCompanyTicketsPage,
    goToTicketsPage
}