const ENDPOINT_GET_RESERVATION = 'https://www.filmstaden.se/api/v2/reservation/se/'

function checkReservationByPhoneNumber(phoneNumber) {
        cy.get('.anonymousReservationBlock__formInput').type(phoneNumber, {force: true})
        cy.get('.anonymousReservationBlock__formSubmit').click({force: true})
        cy.get('.anonymousReservationBlock__reservationListContainer > div').should('contain', 'Inga reservationer finns på detta nummer')
}

function backendReservationCheck(phoneNumber) {
    cy.request({
        method: 'GET',
        url: ENDPOINT_GET_RESERVATION + phoneNumber,
        failOnStatusCode: false
    }).then((response => {
        expect(response.status).to.eq(404)
    }))
}

module.exports = {
    checkReservationByPhoneNumber,
    backendReservationCheck
}