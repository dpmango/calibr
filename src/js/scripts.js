// JavaScript Document
$(document).ready(function() {
  // Prevent # errors
  $('[href="#"]').click(function (e) {
    e.preventDefault();
  });

  // smoth scroll
  $('a[href^="#section"]').click(function(){
    var el = $(this).attr('href');
    $('body, html').animate({
        scrollTop: $(el).offset().top}, 1000);
    return false;
  });

  $('.fancybox').fancybox({
    "padding": 0
  });
  $('.fancybox-media').attr('rel', 'media-gallery').fancybox({
    openEffect: 'none',
    closeEffect: 'none',
    prevEffect: 'none',
    nextEffect: 'none',
    arrows: false,
    helpers: {
      media: {},
      buttons: {}
    }
  });
  $('.pull').click(function() {
    $(this).parents('.menu_mob').find('ul').slideToggle(400);
    $(this).parents('.menu_mob').find('.pull').toggleClass('is_open');
  });
  $('.open_card').click(function() {
    $('#open_card').arcticmodal();
  });
  $('.open_avto2').click(function() {
    $('#open_avto2').arcticmodal();
  });
  //menu
  var menu_active = 0;
  $('.pull2').click(function() {
    if (!$('.wrap_form').hasClass('active')) {
      $('.wrap_form').addClass('active');
      $('.wraper').addClass('closed');
      menu_active = 1;
    } else {
      $('.wrap_form').removeClass('active');
      $('.wraper').removeClass('closed');
      menu_active = 0;
    }
  });
  $('.closed_menu2').click(function() {
    if (menu_active == 1) {
      $('.wrap_form').removeClass('active');
      $('.wraper').removeClass('closed');
      menu_active = 0;
    }
  });
  $('.minus').click(function() {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function() {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
  var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 1,
    paginationClickable: true,
    autoplay: 5000,
    spaceBetween: 0,
    loop: true
  });
  var swiper = new Swiper('.swiper-container2', {
    pagination: '.swiper-pagination2',
    slidesPerView: 1,
    paginationClickable: true,
    autoplay: 3000,
    spaceBetween: 0,
    loop: true
  });

  function setEqualHeight(columns) {
    var tallestcolumn = 0;
    columns.each(function() {
      currentHeight = $(this).height();
      if (currentHeight > tallestcolumn) {
        tallestcolumn = currentHeight;
      }
    });
    columns.height(tallestcolumn);
  }
  $(window).resize(function() {
    $('.wr_polza_txt').css('height', 'auto'); //solve for all you browser stretchers out there!
    setEqualHeight($('.wr_polza_txt'));
  });
  $(window).load(function() {
    setEqualHeight($(".wr_polza_txt"));
  });

  function setEqualHeight(columns) {
    var tallestcolumn = 0;
    columns.each(function() {
      currentHeight = $(this).height();
      if (currentHeight > tallestcolumn) {
        tallestcolumn = currentHeight;
      }
    });
    columns.height(tallestcolumn);
  }
  $(window).resize(function() {
    $('.pre_item').css('height', 'auto'); //solve for all you browser stretchers out there!
    setEqualHeight($('.pre_item'));
  });
  $(window).load(function() {
    //solve for all you browser stretchers out there!
    setEqualHeight($('.pre_item'));
  });

  function setEqualHeight(columns) {
    var tallestcolumn = 0;
    columns.each(function() {
      currentHeight = $(this).height();
      if (currentHeight > tallestcolumn) {
        tallestcolumn = currentHeight;
      }
    });
    columns.height(tallestcolumn);
  }
  $(window).resize(function() {
    $('.product_txt').css('height', 'auto'); //solve for all you browser stretchers out there!
    setEqualHeight($('.product_txt'));
  });
  $(window).load(function() {
    setEqualHeight($(".product_txt"));
  });

  function setEqualHeight(columns) {
    var tallestcolumn = 0;
    columns.each(function() {
      currentHeight = $(this).height();
      if (currentHeight > tallestcolumn) {
        tallestcolumn = currentHeight;
      }
    });
    columns.height(tallestcolumn);
  }
  $(window).resize(function() {
    $('.vid_txt').css('height', 'auto'); //solve for all you browser stretchers out there!
    setEqualHeight($('.vid_txt'));
  });
  $(window).load(function() {
    setEqualHeight($(".vid_txt"));
  });
  $(".inp_phone").mask("+7(999) 999-99-99");
});
