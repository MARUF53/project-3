

var typed = new Typed('.header_txt', {
  strings: ["Manage it all, in this all new system.",],
  typeSpeed: 30
});


$(document).ready(function() {
  $(".next").click(function() {
    var tab = $(this).closest('.tab-pane');
    $('#' + tab[0].id + ', .nav-pills li').removeClass('active');
    $('.nav-pills li a[href="#' + tab.next()[0].id + '"]').parent().addClass('active');
    tab.next().addClass('active');
  });
});

$('.slide_sec').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  centerMode: true,
  centerPadding: "0",
});

AOS.init();