$(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
});


$(function(){

    $('.roll__menu__btn').on('click', function() {
    $('.nav-pills').slideToggle(300, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
    });

    });

});

$(function() {

    "use strict";

    let toggles = document.querySelectorAll(".roll__menu__btn");

    for (let i = toggles.length - 1; i >= 0; i--) {
    let toggle = toggles[i];
    toggleHandler(toggle);
    }

    function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
    }

});
