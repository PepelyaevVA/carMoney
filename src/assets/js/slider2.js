
import $ from "jquery";
import "slick-carousel";
$(".carousel").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
   // autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    arrows: false,
    responsive: [
        {
          breakpoint: 978,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 726,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 426,
          variableWidth: true,
          settings: {
            slidesToShow: 1,
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        }
      ]
});
$(".what-loans__carousel").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: false,
  variableWidth: true,

  responsive: [
      {
        breakpoint: 978,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 726,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
})
/*$(".what-loans__carousel").slick({
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  
})*/

$(".receiving__carousel").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  variableWidth: true,

  arrows: false,
  responsive: [
      {
        breakpoint: 726,
        settings: {
          arrows: false,
          centerPadding: '30px',
          slidesToShow: 1
        }
      }
    ]
})

$(".money-fast__carousel").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  //autoplay: true,
  autoplaySpeed: 2000,
  variableWidth: true,

  arrows: false,
  responsive: [
      {
        breakpoint: 726,
        settings: {
          arrows: false,
          centerPadding: '30px',
          slidesToShow: 1
        }
      }
    ]
})