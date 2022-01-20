
function resetMovieNameFilter() {
    cy.get('.show-schedule__list > :nth-child(4)').click({force: true})
    cy.wait(2000)
    cy.get(':nth-child(4) > .drop-down-checkbox > .drop-down-checkbox__list-outerwrapper > .drop-down-checkbox__list-innerwrapper > .drop-down-checkbox__list').contains('Alla filmer').click({force: true})
    cy.get(':nth-child(4) > .drop-down-checkbox > .drop-down-checkbox__list-outerwrapper > .drop-down-checkbox__list-innerwrapper > .drop-down-checkbox__trigger-btn-outerwrapper > .drop-down-checkbox__trigger-btn-innerwrapper > .a-btn > .au-target').click({force: true})
}

function filterMovieByName(movieName) {
    cy.get('.show-schedule__list > :nth-child(4)').click({force:true})
    cy.wait(2000)
    cy.get(':nth-child(4) > .drop-down-checkbox > .drop-down-checkbox__list-outerwrapper > .drop-down-checkbox__list-innerwrapper > .drop-down-checkbox__list').contains(movieName).click({force: true})
    cy.get(':nth-child(4) > .drop-down-checkbox > .drop-down-checkbox__list-outerwrapper > .drop-down-checkbox__list-innerwrapper > .drop-down-checkbox__trigger-btn-outerwrapper > .drop-down-checkbox__trigger-btn-innerwrapper > .a-btn > .au-target').click({force: true})
}

function assertMovieIsListed(movieName) {
    cy.get('.show-schedule-grouped-by-movie__content').should('contain', movieName)
}

function resetMovieDayFilter() {
    cy.get('.show-schedule__list > :nth-child(2) > .drop-down-radio-btn > .a-btn').click({force: true})
    cy.get('.show-schedule__list > :nth-child(2) > .drop-down-radio-btn > .drop-down-radio-btn__list-outerwrapper > .drop-down-radio-btn__list-innerwrapper > .drop-down-radio-btn__list').contains('idag').click({force: true})
}
function filterMovieByDay(dayFilter) {
    cy.get('.show-schedule__list > :nth-child(2) > .drop-down-radio-btn > .a-btn').click({force: true})
    cy.get('.show-schedule__list > :nth-child(2) > .drop-down-radio-btn > .drop-down-radio-btn__list-outerwrapper > .drop-down-radio-btn__list-innerwrapper > .drop-down-radio-btn__list').contains(dayFilter).click({force: true})
}

function openFirstAvailableMovie() {
    cy.get(':nth-child(1) > .show-schedule__list-grouped-by-movie > .show-schedule__list-item-grouped-by-movie > .show-schedule-grouped-by-movie__outerwrapper > .show-schedule-grouped-by-movie__innerwrapper > .show-schedule-grouped-by-movie__content > .thumbnail-movie-list__btn-outerwrapper > .thumbnail-movie-list__btn-innerwrapper > .a-btn').click({force: true})
    cy.get(':nth-child(1) > .show-schedule-grouped-by-movie-show__url > .show-schedule-grouped-by-movie-show__url-inner').first().click({force: true})
    cy.wait(2000)
}

function assertDayOnBookingPage(dayFilter) {
    cy.get('.bookingSummaryBlock__showDateAndTime').should('contain', dayFilter)
}

module.exports = {
    resetMovieNameFilter,
    filterMovieByName,
    assertMovieIsListed,
    resetMovieDayFilter,
    filterMovieByDay,
    openFirstAvailableMovie,
    assertDayOnBookingPage
}