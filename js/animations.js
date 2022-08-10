// Scrollspy fra Bootstrap for sømløs scrolling/navigering fra navbar
//$("body").scrollspy({target: "navbar"});
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '.navbar'
})

/* scroll ned fra forsiden*/
$(".arrowdiv").on('click', function () {
    $('.omMeg')[0].scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    $(window.scrollTo($('#omMeg').position()));
    console.log("done!");
});

/* toggle-knapp for å skru av og på videobakgrunn
* på store skjermer (er automatisk av på små)*/
let video = document.getElementById("video");

$('.togglebutton').on('click', function () {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

/* animert "til toppen"-knapp*/
let tiltoppen = document.getElementById("tilToppen");

/* knappen dukker opp når man scroller*/
$(window.addEventListener("scroll", function() {
    let header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0);
    tiltoppen.classList.add("active");
}))

/* sender deg til toppen*/
$("#tilToppen").on('click', function() {
    $(tiltoppen.classList.remove("active"));
    $(window.scrollTo({top:0, behavior: 'smooth'}));
})

/*toggle for fagoversikt under utdanning, knapp over og under innhold*/
$("#seFag").click(function() {
    $("#fagSeksjon").toggle("slow");
});

$("#lukkFag").click(function() {
    $("#fagSeksjon").toggle();
});

/*animasjon av kopp*/
const tl = gsap.timeline({defaults: {duration: 0.5, ease: "power1.in"}})

//movement
tl.fromTo('.cupOfCoffee', {y:1, rotation: '0deg'}, {y: -30, rotation:'20deg', yoyo: true, repeat: -1})
tl.fromTo('#drops', {y:0, rotation: '0deg'}, {y: 30, rotation:'10deg', yoyo: true,  repeat: -1})
