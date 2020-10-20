(function ($) {
  ("use strict");

  // post-input-filed default text hide -----------
  $(".post-input-field").click(function () {
    $(".post-input-field span").hide();
  });

  // responsive nav
  $(".res-menu-btn").click(function go() {
    $(".main-menu").toggle();
  });

  
})(jQuery);