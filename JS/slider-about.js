$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    infinite: true,
    speed: 600,
    cssEase: "ease-out",
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 2,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
    ],
  });
});

