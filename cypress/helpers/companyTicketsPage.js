
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


module.exports = {
    goToTicketBalanceChecker,
    checkTicketBalance,
    assertInvalidCompanyTicket,
    typeTicketNumber,
    assertNotTwelveNumbers,
    assertTwelveNumbers
}