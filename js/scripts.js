$('.slick').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 4,
  autoplay: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        centerPadding: '180px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 1000,
      settings: {
        centerPadding: '60px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        centerPadding: '10px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 660,
      settings: {
        centerPadding: '0',
        slidesToShow: 1
      }
    }
  ]
});

$('.slick2').slick({
  centerMode: true,
  centerPadding: '50px',
  slidesToScroll: 1,
  variableWidth: true,
  autoplay: 1,
  arrows: false
});

$('.slick3').slick({
  centerMode: true,
  centerPadding: '0',
  slidesToScroll: 1,
  variableWidth: true,
  autoplay: 1,
  arrows: false/*,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        centerPadding: '0',
        slidesToShow: 2,
          centerMode: false,
           variableWidth: false
      }
    },
    {
      breakpoint: 880,
      settings: {
        centerPadding: '0',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 660,
      settings: {
        centerPadding: '0',
        slidesToShow: 1
      }
    }
  ]*/
});

var accordion = function() {

  $('.block-accordion__body').hide().prev().click(function() {
    $('.block-accordion__body').not(this).slideUp();
    $(this).next().not(':visible').slideDown();
  });
}

accordion();


$(document).ready(function(){
    $('.go-to').click( function(){
  var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1500);
        }
      return false;
    });
});

$(".to-modal__order-call").click(function(e) {
    e.preventDefault();
    $(".modal__order-call").fadeIn();
});

$(document).mouseup(function (e) {
    var container = $(".modal-form");
    var container2 = $(".to-modal__order-call");
    if (container.has(e.target).length === 0 && container2.has(e.target).length === 0) {
        $(".modal__order-call").fadeOut();
    }
});

$('.humburger').click(function() {
  $(this).fadeOut();
  $('.menu-mob').addClass('open');
  $('.menu-mob__close').fadeIn();
});

$('.menu-mob__close').click(function() {
  $(this).fadeOut();
  $('.menu-mob').removeClass('open');
  $('.humburger').fadeIn();
});

$('.modal__dark-close').click(function() {
  $(this).parent().fadeOut();
});

$('.modal-sale__close, .modal-estimate__close').click(function() {
  $(this).parent().parent().fadeOut();
});