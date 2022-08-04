// Scrollspy fra Bootstrap for sømløs scrolling/navigering fra navbar
//$("body").scrollspy({target: "navbar"});

/* animert til toppen-knapp*/
let tiltoppen = document.getElementById("tilToppen");

$("#tilToppen").on('click', function() {
    $(window.scrollTo({top:0, behavior: 'smooth'}))
    tiltoppen.classList.remove("active");
})

/* fra YT-video: sticky navigation bar on scroll using vanilla javascript from online tutorials IKKE TESTET*/
$(window.addEventListener("scroll", function() {
    let header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0);
    tiltoppen.classList.add("active");
}))

$(document).ready(function() {
    $("#seFag").click(function() {
        $("#fagSeksjon").toggle("slow");
    });
});

/* Smooth scrolling fra https://medium.com/@pacific880/learn-to-make-one-page-scroll-navigation-b97ab42ef6fa  */

/*
    $('#sec-1').addClass("active");

    $("#hjem").click(function() {
        $('html, body').animate({
            scrollTop:        $("#one").offset().top-66
        }, 1000);
        return false;
    });

    $("#omMeg").click(function() {
        $('html, body') .animate({
            scrollTop:        $("#two").offset().top-112
        }, 1000);
        return false;
    });

    $("#prosjekter").click(function() {
        $(' html,body') .animate({
            scrollTop:        $("#three").offset().top-112
        }, 1000);
        return false;
    });

    $("#utdanning").click(function() {
        $(this).addClass("active");
        $('html,body ') .animate({
            scrollTop:        $("#four").offset().top-112
        }, 1000);
        return false;
    });

    $('#omMeg').waypoint(function() {

        $(".navbar ul li").children().removeClass("active");
        $("#omMeg").addClass("active");

    }, { offset: 101 });


    $('#prosjekter').waypoint(function() {
        $(".navbar ul li").children().removeClass("active");
        $("#prosjekter").addClass("active");
    }, { offset: 101 });

    $('#utdanning').waypoint(function() {
        $(".navbar ul li").children().removeClass("active");
        $("#utdanning").addClass("active");
    }, { offset: 101 });

    $('#hjem').waypoint(function() {
        $(".navbar ul li").children().removeClass("active");
        $("#sec-1").addClass("active");
    }, { offset: 0 });
*/

