/// <reference types="cypress" />

import * as reservation from '../helpers/reservationPage'
import * as companyTicket from '../helpers/companyTicketsPage'
import * as header from '../helpers/header'



describe('Backend testing suite for Filmstaden.se', function() {

    it('TCB01 - Phone number reservation check - no reservation', function() {
        var phoneNumber = '070213123'

        reservation.backendReservationCheck(phoneNumber)

    })

    it('TCB02 - Company ticket validity check - invalid ticket', function() {
        var ticketNumber = '123123123123'

        companyTicket.backendTicketBalanceOnInvalidTicket(ticketNumber)

    })

    it('TCB03 - City filter - Gothenburg', function() {
        var cityAlias = 'GB'

        header.backendCityFilter(cityAlias)

    })

    it('TCB04 - City filter - Stockholm', function() {
        var cityAlias = 'SE'

        header.backendCityFilter(cityAlias)
        
    })

    it('TCB 05 - City filter - Malmo', function() {
        var cityAlias = 'MA'

        header.backendCityFilter(cityAlias)

    })

})