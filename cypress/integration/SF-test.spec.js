/// <reference types="cypress" />

import * as reservation from '../helpers/reservationPage'
import * as header from '../helpers/header'
import * as moviesTrailers from '../helpers/moviesTrailersPage'
import * as shop from '../helpers/shopPage'
import * as companyTicket from '../helpers/companyTicketsPage'
import * as ticket from '../helpers/ticketPage'

describe('Regression testing suite - Filmstaden', function () {

    beforeEach(() => {
        cy.visit('https://www.filmstaden.se/')
        cy.get('#onetrust-accept-btn-handler').click() //accept cookies
        cy.get('.dialog-city-selection__save-btn-wrapper > .a-btn').click() //accept default city
    })



    it('TC01 - Check reservation with phone number', function(){
        var phoneNumber = '0701234567'

        header.changePageToReservations()
        reservation.checkReservationByPhoneNumber(phoneNumber)
    })

/* // Remade into backend test
    it('TC02 - Changing city', function() {
        //defaultCity has to be set to the default choice from when you enter the page.
        //Only tested cities that have "Filmstaden" and not "Svenska Bio"
        var defaultCity = 'Stockholm'
        var newCity = 'Göteborg'

        header.checkCity(defaultCity)
        header.changeCity(newCity)
        header.checkCity(newCity)
        header.changeCity(defaultCity)
        header.checkCity(defaultCity)
    }) 
    */

    it('TC03 - Search using dropdown', function() {
        var searchQuery = 'Harry Potter och de vises sten - Klassiker'

        header.searchByDropdown(searchQuery)
    })

    it('TC04 - Search using enter', function() {
        var searchQuery = 'Harry Potter och Fången från Azkaban'

        header.searchByEnter(searchQuery)
    })

    it('TC05 - Check invalid company ticket balance', function() {
        var ticketNumber = '123456789123'

        header.goToCompanyTicketsPage()
        companyTicket.goToTicketBalanceChecker()
        companyTicket.typeTicketNumber(ticketNumber)
        companyTicket.checkTicketBalance()
        companyTicket.assertInvalidCompanyTicket()
    })

    it('TC06 - Check field validation on company ticket', function() {
        var elevenNumbers = '12345678910'
        var twelveNumbers = '123456789101'
        var thirteenNumbers = '1234567891011'

        header.goToCompanyTicketsPage()
        companyTicket.goToTicketBalanceChecker()

        companyTicket.typeTicketNumber(elevenNumbers)
        companyTicket.assertNotTwelveNumbers()

        companyTicket.typeTicketNumber(twelveNumbers)
        companyTicket.assertTwelveNumbers()

        companyTicket.typeTicketNumber(thirteenNumbers)
        companyTicket.assertNotTwelveNumbers()
    })

    it('TC07- Menu-tour - Food and drink', function(){
        //Can fail due to bug - bug can be found in test cases document

        header.goToShop()
        shop.goToSortiment()
        shop.goToKaffe()
        shop.goToHotFood()
        shop.goToFreestyle()
        shop.goToKampanjer()
        shop.goToShopLandingPage()
    })
    
    it('TC08 - Ticket filter - movie name', function() {
        var movieName = 'Scream'

        header.goToTicketsPage()
        ticket.resetMovieNameFilter() //to clear choices from previous tests/test runs
        //ticket.resetMovieDayFilter() //to clear chocies from previous tests/test runs. Can't be used if tests run late evenings
        ticket.filterMovieByName(movieName)
        ticket.assertMovieIsListed(movieName)
    })

    it('TC09 - Ticket filter - day', function() {
        var filterChoice = 'imorgon'

        header.goToTicketsPage()
        ticket.resetMovieNameFilter() //to clear chocies from previous tests/test runs
        //ticket.resetMovieDayFilter() //to clear chocies from previous tests/test runs. Can't be used if tests run late evenings
        ticket.filterMovieByDay(filterChoice)
        ticket.openFirstAvailableMovie()
        ticket.assertDayOnBookingPage(filterChoice)
    })

    it('TC10 - Video player functions', function(){
        //This test sometimes fails because the video won't load. Tried using cy.wait to delay playing the video to let it load without success.
        header.changepageToMoviesAndTrailers()

        moviesTrailers.playFirstTrailer()

        //cy.wait(2000)
        moviesTrailers.CheckHiddenVideoControls() 

        moviesTrailers.videoPlayerPause()
        moviesTrailers.videoPlayerUnpause()

        moviesTrailers.videoPlayerMute()
        moviesTrailers.videoPlayerUnmute()

        moviesTrailers.videoPlayerClose()
    })
})