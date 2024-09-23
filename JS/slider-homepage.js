$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    infinite: true,
    speed: 600,
    cssEase: "ease-out",
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
  });
});
