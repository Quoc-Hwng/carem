$(function () {
    $(".rewards-owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        margin: 180,
        dots: false,
        center: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],

    });
});

$(document).ready(function(){
    var owl = $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:1
    });
    
    owl.on('changed.owl.carousel', function(event) {
        setTimeout(function(){
        var activeEls = $('.owl-item.active').eq(1); // .eq(1) to get the "middle image out of 3 actives"
        setCarouselCaption( activeEls ); 
        },1);
    });
    function setCarouselCaption(el){
        $(".owl-item").removeClass("target");
        el.addClass("target");
    }
});
function owl_jquery(id){
    if(id == "owl-1"){
        var x = document.getElementById(id);
        $("#owl-2").removeClass("active");
        var child = $(".owl-dots").children();
        child[0].click();
        if (x.className.indexOf("active") == -1) {
            x.className += " active";
        }
    }else if(id == "owl-2"){
        var x = document.getElementById(id);
        var child = $(".owl-dots").children();
        child[1].click();
        $("#owl-1").removeClass("active");
        $("#owl-3").removeClass("active");
        if (x.className.indexOf("active") == -1) {
            x.className += " active";
        }
    }else if(id == "owl-3"){
        var x = document.getElementById(id);
        var child = $(".owl-dots").children();
        child[2].click();
        $("#owl-1").removeClass("active");
        $("#owl-2").removeClass("active");
        if (x.className.indexOf("active") == -1) {
            x.className += " active";
        }
    }
}