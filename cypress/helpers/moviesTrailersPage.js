function checkFilterCity(city) {
    cy.get('.ncgNavigationInnerWrapper > :nth-child(3) > :nth-child(2) > .au-target', {timeout: 5000}).should('be.visible') //times out if the next menu isnt shown within 5 sec
    cy.get('.ncgNavigationInnerWrapper > :nth-child(3) > :nth-child(2) > .au-target').click()                           //go to filmer trailers
    cy.get(':nth-child(1) > .drop-down-radio-btn > .a-btn > .a-btn__label', {timeout: 5000}).should('be.visible')       //times out if the next menu isnt shown within 5 sec
    cy.get(':nth-child(1) > .drop-down-radio-btn > .a-btn > .a-btn__label').should('contain', city)               //menu there is göteborg
}

function playFirstTrailer() {
    cy.get(':nth-child(1) > .thumbnail-movie-list__btn-outerwrapper > .a-btn', {timeout: 5000}).should('be.visible')
    cy.get(':nth-child(1) > .thumbnail-movie-list__btn-outerwrapper > .a-btn').click({force: true})
    cy.get('.dialog-slot-overlay__innerwrapper > [ref="videoPlayerContainerElement"] > .video-player__outerwrapper > .video-player__innerwrapper > .video-player__video-wrapper > .video-player__screen-trigger').should('be.visible')
}

function videoPlayerPause() {
    cy.get('.dialog-slot-overlay__outerwrapper--vertical-center > .dialog-slot-overlay__innerwrapper > [ref="videoPlayerContainerElement"] > .video-player__outerwrapper > .video-player__innerwrapper > .video-player__controls-outerwrapper > .video-player__controls-innerwrapper > .video-toggle-play-btn__wrapper > .a-btn > .material-pause').click()
    cy.get('.dialog-slot-overlay__outerwrapper--vertical-center > .dialog-slot-overlay__innerwrapper > [ref="videoPlayerContainerElement"] > .video-player__outerwrapper > .video-player__innerwrapper > .video-player__controls-outerwrapper > .video-player__controls-innerwrapper > .video-toggle-play-btn__wrapper > .a-btn > .material-play_arrow2').should('be.visible')
}

function videoPlayerUnpause() {
    cy.get('.dialog-slot-overlay__outerwrapper--vertical-center > .dialog-slot-overlay__innerwrapper > [ref="videoPlayerContainerElement"] > .video-player__outerwrapper > .video-player__innerwrapper > .video-player__controls-outerwrapper > .video-player__controls-innerwrapper > .video-toggle-play-btn__wrapper > .a-btn > .material-play_arrow2').click()
    cy.get('.dialog-slot-overlay__outerwrapper--vertical-center > .dialog-slot-overlay__innerwrapper > [ref="videoPlayerContainerElement"] > .video-player__outerwrapper > .video-player__innerwrapper > .video-player__controls-outerwrapper > .video-player__controls-innerwrapper > .video-toggle-play-btn__wrapper > .a-btn > .material-pause').should('be.visible')
}

function CheckHiddenVideoControls() {
    cy.get('.dialog-slot-overlay__outerwrapper--vertical-center > .dialog-slot-overlay__innerwrapper > [ref="videoPlayerContainerElement"] > .video-player__outerwrapper > .video-player__innerwrapper > .video-player__controls-outerwrapper > .video-player__controls-innerwrapper').should('not.be.visible')
}

function videoPlayerMute() {
    cy.get('.dialog-slot-overlay__outerwrapper--vertical-center > .dialog-slot-overlay__innerwrapper > [ref="videoPlayerContainerElement"] > .video-player__outerwrapper > .video-player__innerwrapper > .video-player__controls-outerwrapper > .video-player__controls-innerwrapper > video-volume.au-target > .video-volume__toggle-mute-wrapper > .a-btn > .material-volume_up').should('be.visible')
    cy.get('.dialog-slot-overlay__outerwrapper--vertical-center > .dialog-slot-overlay__innerwrapper > [ref="videoPlayerContainerElement"] > .video-player__outerwrapper > .video-player__innerwrapper > .video-player__controls-outerwrapper > .video-player__controls-innerwrapper > video-volume.au-target > .video-volume__toggle-mute-wrapper > .a-btn > .material-volume_up').click()
    cy.wait(2000)
}

function videoPlayerUnmute() {
    cy.get('.dialog-slot-overlay__outerwrapper--vertical-center > .dialog-slot-overlay__innerwrapper > [ref="videoPlayerContainerElement"] > .video-player__outerwrapper > .video-player__innerwrapper > .video-player__controls-outerwrapper > .video-player__controls-innerwrapper > video-volume.au-target > .video-volume__toggle-mute-wrapper > .a-btn > .material-volume_off').should('be.visible')
    cy.get('.dialog-slot-overlay__outerwrapper--vertical-center > .dialog-slot-overlay__innerwrapper > [ref="videoPlayerContainerElement"] > .video-player__outerwrapper > .video-player__innerwrapper > .video-player__controls-outerwrapper > .video-player__controls-innerwrapper > video-volume.au-target > .video-volume__toggle-mute-wrapper > .a-btn > .material-volume_off').click()
    cy.get('.dialog-slot-overlay__outerwrapper--vertical-center > .dialog-slot-overlay__innerwrapper > [ref="videoPlayerContainerElement"] > .video-player__outerwrapper > .video-player__innerwrapper > .video-player__controls-outerwrapper > .video-player__controls-innerwrapper > video-volume.au-target > .video-volume__toggle-mute-wrapper > .a-btn > .material-volume_up').should('be.visible')
}

function videoPlayerClose() {
    cy.get('.dialog-slot-overlay__outerwrapper--vertical-center > .dialog-slot-overlay__innerwrapper > .dialog-slot-overlay__inner-close-btn > .material-icon').click()
    cy.get('.dialog-slot-overlay__outerwrapper--vertical-center > .dialog-slot-overlay__innerwrapper > [ref="videoPlayerContainerElement"] > .video-player__outerwrapper > .video-player__innerwrapper > .video-player__video-wrapper > .video-player__screen-trigger').should('not.exist')
}




module.exports = {
    checkFilterCity,
    playFirstTrailer,
    videoPlayerPause,
    videoPlayerUnpause,
    videoPlayerMute,
    videoPlayerUnmute,
    videoPlayerClose,
    CheckHiddenVideoControls
}