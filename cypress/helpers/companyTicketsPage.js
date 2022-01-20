
const ENDPOINT_GET_COMPANYVALIDITY = 'https://www.filmstaden.se/api/v2/discount/'


function goToTicketBalanceChecker() {
    cy.get(':nth-child(1) > .giftcard-information__btn-wrapper > .a-btn').click({force: true})
}

function checkTicketBalance() {
    cy.get('.companyTicketBalance__formSubmit').click({force: true})
}

function typeTicketNumber(ticketNumber) {
    cy.get('.companyTicketBalance__formInput').clear().type(ticketNumber, {force: true})
}

function assertInvalidCompanyTicket() {
    cy.get('.companyTicketBalance__ticketValidity').should('contain', 'Vi hittade ingen biljett med detta nummer')
}

function assertNotTwelveNumbers() {
    cy.get('.companyTicketBalance__formInputBlock--valid').should('not.exist')
}

function assertTwelveNumbers() {
    cy.get('.companyTicketBalance__formInputBlock--valid').should('exist')
}

function backendTicketBalanceOnInvalidTicket(ticketNumber) {
    cy.request({
        method: 'GET',
        url: ENDPOINT_GET_COMPANYVALIDITY + ticketNumber,
        failOnStatusCode: false
    }).then((response => {
        expect(response.status).to.eq(404)
    }))
}


module.exports = {
    goToTicketBalanceChecker,
    checkTicketBalance,
    assertInvalidCompanyTicket,
    typeTicketNumber,
    assertNotTwelveNumbers,
    assertTwelveNumbers,
    backendTicketBalanceOnInvalidTicket
}