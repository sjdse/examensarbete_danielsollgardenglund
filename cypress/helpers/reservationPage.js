function checkReservationByPhoneNumber(phoneNumber) {
        cy.get('.anonymousReservationBlock__formInput').type(phoneNumber, {force: true})
        cy.get('.anonymousReservationBlock__formSubmit').click({force: true})
        cy.get('.anonymousReservationBlock__reservationListContainer > div').should('contain', 'Inga reservationer finns på detta nummer')
}

module.exports = {
    checkReservationByPhoneNumber
}