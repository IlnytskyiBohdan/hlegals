$(document).ready(function () {
    $(".slider").slick({
      dots: true,
      infinite: true,
      speed: 300,
      cssEase: "liner",
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