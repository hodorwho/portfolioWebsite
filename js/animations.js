// Scrollspy fra Bootstrap for å animere menyen når man scroller ned på siden
/*var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar'
})*/

$("body").scrollspy({target: "navbar"});

/* animert scroll to top button fra https://anyday.inc/ideas/how-to-make-a-cool-animated-scroll-to-top-button/
*/

/*
$(window).on('scroll', function(){
    if (document.body.scrollTop > 20) {
        $('#tilToppen').addClass('active')
    }
    else {
        $('#tilToppen').removeClass('active')
    }
})

$('#tilToppen').on('click',function() {
    $(window.scrollTo({top:0, behavior: 'smooth'}))
    $("html, body").animate({scrollTop: 0}, 500);
})
*/

//const tilToppen = document.getElementById('tilToppen');
//tilToppen.addEventListener("click", Toppen)

$("#tilToppen").on('click', function() {
    $(window.scrollTo({top:0, behavior: 'smooth'}))
})

//function Toppen() {
 //   $(window.scrollTo({top:0, behavior: 'smooth'}))
//}