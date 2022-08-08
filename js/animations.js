// Scrollspy fra Bootstrap for sømløs scrolling/navigering fra navbar
//$("body").scrollspy({target: "navbar"});

/* animert til toppen-knapp*/
let tiltoppen = document.getElementById("tilToppen");

$("#tilToppen").on('click', function() {
    /*vil at denne skal skjule knappen når man trykker på den, men det skjer bare
    * når man er på toppen og trykker på den etter man har scrolla
    tiltoppen.classList.remove("active"); */
    $(tiltoppen.classList.remove("active"));
    $(window.scrollTo({top:0, behavior: 'smooth'}))
})

/* fra YT-video: sticky navigation bar on scroll using vanilla javascript from online tutorials IKKE TESTET*/
$(window.addEventListener("scroll", function() {
    let header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0);
    tiltoppen.classList.add("active");
}))

/*toggle for fagoversikt under utdanning */
$(document).ready(function() {
    $("#seFag").click(function() {
        $("#fagSeksjon").toggle("slow");
    });
});

const tl = gsap.timeline({defaults: {duration: 0.5, ease: "power1.in"}})

//movement
tl.fromTo('.cupOfCoffee', {y:1, rotation: '0deg'}, {y: -30, rotation:'20deg', yoyo: true, repeat: -1})
tl.fromTo('#drops', {y:0, rotation: '0deg'}, {y: 30, rotation:'10deg', yoyo: true,  repeat: -1})
//ease: "slow(0.1, 0.1, false)",
