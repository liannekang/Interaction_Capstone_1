$(function() {var s = skrollr.init();})

$.ready(function(){
  $(window).on('scroll', function(e){
    $('#scroll-container').innerText = $(window).scrollTop();
  });
});

