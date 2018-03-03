

$(document).ready(function(){
  $("#sp_navi_btn").click(function(){
    $(".sp_menu_toggle").slideToggle();
  });
});

$(document).ready(function(){
    $('.owl-carousel').owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true
        }
    );
});

$(window).load(function(){
  $(".small-image li img").click(function(){
    var img_src = $(this).attr("src");
    $(".big-image img").attr("src", img_src);
  });
});