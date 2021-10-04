$(function() {
  $('.slick').slick({
    dots: false,
    arrows: true,
    slidesToShow:4,
/*     autoplay:true,
    autoplaySpeed:2000, */
    easing:'ease',
  });

  $(".logo").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 1500);
  });




const toTopButton = document.querySelector(".footer__logo");



toTopButton.addEventListener("click", function () {

  $(".footer__logo").animate({scrollTop: 0}, "slow");
})

});

$(function(){
  var mixer = mixitup('.slick');
})
