// Scrollspy fra Bootstrap for sømløs scrolling/navigering fra navbar
//$("body").scrollspy({target: "navbar"});

/*
$('html, body').animate({
    scrollTop: $("#omMeg").offset().top + $("#nav").height() // minus the nav height
}, 1000);
*/

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '.navbar'
})
/*
var navHeight = $(".navbar").height();
alert(navHeight + "is navheight");
$(".maincontainer").css({paddingTop: ($(".navbar").height())+'px'});
*/
// Scroll to id from nav items
/*$(".navbar a").click(function () {
    $("body,html").animate({
        scrollTop: $("#" + $(this).data('value')).offset().top - $('.navbar').height() - 10
    }, 1000)
});
*/
/* scroll ned fra forsiden*/
$(".arrowdiv").on('click', function () {
    $('.omMeg')[0].scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    $(window.scrollTo($('#omMeg').position()));
});

/* animert til toppen-knapp*/
let tiltoppen = document.getElementById("tilToppen");

$("#tilToppen").on('click', function() {
    /*vil at denne skal skjule knappen når man trykker på den, men det skjer bare
    * når man er på toppen og trykker på den etter man har scrolla
    tiltoppen.classList.remove("active"); */
    $(tiltoppen.classList.remove("active"));
    $(window.scrollTo({top:0, behavior: 'smooth'}))
})

function siFra() {
    alert("knapp er trykket på nice");
}

/* fra YT-video: sticky navigation bar on scroll using vanilla javascript from online tutorials IKKE TESTET*/
$(window.addEventListener("scroll", function() {
    let header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0);
    tiltoppen.classList.add("active");
}))

/*toggle for fagoversikt under utdanning
$(document).ready(function() {*/
    $("#seFag").click(function() {
        $("#fagSeksjon").toggle("slow");
    });
/*});*/


document.getElementById('seFag').onclick = function() {
    alert("button was clicked");
};

const tl = gsap.timeline({defaults: {duration: 0.5, ease: "power1.in"}})

//movement
tl.fromTo('.cupOfCoffee', {y:1, rotation: '0deg'}, {y: -30, rotation:'20deg', yoyo: true, repeat: -1})
tl.fromTo('#drops', {y:0, rotation: '0deg'}, {y: 30, rotation:'10deg', yoyo: true,  repeat: -1})
//ease: "slow(0.1, 0.1, false)",
