/// <reference types="cypress" />


const ENDPOINT_GET_RESERVATION = 'https://www.filmstaden.se/api/v2/reservation/se/'
const ENDPOINT_GET_COMPANYVALIDITY = 'https://www.filmstaden.se/api/v2/discount/'
const ENDPOINT_GET_CITYFILTER = 'https://www.filmstaden.se/api/v2/cinema/sv/1/100?filter.cityAlias='

describe('Backend testing suite for Filmstaden.se', function() {

    it('TCB01 - Phone number reservation check - no reservation', function() {
        var number = '070213123'

        cy.request({
            method: 'GET',
            url: ENDPOINT_GET_RESERVATION + number,
            failOnStatusCode: false
        }).then((response => {
            expect(response.status).to.eq(404)
        }))
    })

    it('TCB02 - Company ticket validity check - invalid ticket', function() {
        var ticketNumber = '123123123123'

        cy.request({
            method: 'GET',
            url: ENDPOINT_GET_COMPANYVALIDITY + ticketNumber,
            failOnStatusCode: false
        }).then((response => {
            expect(response.status).to.eq(404)
        }))
    })

    it('TCB03 - City filter - Gothenburg', function() {
        var gothenburgAlias = 'GB'

        cy.request({
            method: 'GET',
            url: ENDPOINT_GET_CITYFILTER + gothenburgAlias
        }).then((response => {
            const responseAsString = JSON.stringify(response.body)
            expect(responseAsString).to.have.string('\"alias\":\"' + gothenburgAlias + '\"')
            expect(response.status).to.eq(200)

        }))
    })

    it('TCB04 - City filter - Stockholm', function() {
        var stockholmAlias = 'SE'

        cy.request({
            method: 'GET',
            url: ENDPOINT_GET_CITYFILTER + stockholmAlias
        }).then((response => {
            const responseAsString = JSON.stringify(response.body)
            expect(responseAsString).to.have.string('\"alias\":\"' + stockholmAlias + '\"')
            expect(response.status).to.eq(200)

        }))
    })

    it('TCB 05 - City filter - Malmo', function() {
        var malmoAlias = 'MA'

        cy.request({
            method: 'GET',
            url: ENDPOINT_GET_CITYFILTER + malmoAlias
        }).then((response => {
            const responseAsString = JSON.stringify(response.body)
            expect(responseAsString).to.have.string('\"alias\":\"' + malmoAlias + '\"')
            expect(response.status).to.eq(200)

        }))
    })

})