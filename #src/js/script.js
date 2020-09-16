
$(document).ready(function () {
    let burger_link = document.querySelector(".icon-menu");
    let nav_text = document.querySelector(".menu__body");
    let scroll = document.querySelector ("body");
    burger_link.addEventListener("click", function (e) {
        e.preventDefault();
        burger_link.classList.toggle("_active");
        nav_text.classList.toggle("_active");

        if (nav_text.classList.contains('_active')) {
            scroll.style.overflow = "hidden";
        }
        else {
            scroll.style.overflow = "visible";
        }

    });
    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            evt.preventDefault();
            burger_link.classList.remove("_active");
            nav_text.classList.remove("_active");
            scroll.style.overflow = "visible"
        }

    });

    $( function() {
        $( "#slider" ).slider();
    } );
});
/*slider range*/


