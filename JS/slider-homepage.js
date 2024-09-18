$(document).ready(function () {
    $(".slider").slick({
      dots: true,
      infinite: true,
      speed: 300,
      cssEase: "liner",
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      mobileFirst: true,
    });
  });