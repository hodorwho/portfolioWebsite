// Scrollspy fra Bootstrap for å animere menyen når man scroller ned på siden
/*var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar'
})*/

// $("body").scrollspy({target: "navbar"});

/* animert scroll til toppen-knapp
mangler enda at den fader inn og ut, pluss styling
* */
$("#tilToppen").on('click', function() {
    $(window.scrollTo({top:0, behavior: 'smooth'}))
})
