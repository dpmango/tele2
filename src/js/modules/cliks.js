//////////
// CICKS
//////////
(function($, APP) {
  APP.Plugins.Clicks = {
    init: function() {
      $(document)
        .on('click', '[href="#"]', function(e) {
          e.preventDefault();
        })
        // scroll to section
        .on('click', 'a[href^="#section"]', function() {
          // section scroll
          var el = $(this).attr('href');
          var topTarget = $(el).offset().top;

          // $('body, html').animate({scrollTop: topTarget}, 1000);
          TweenLite.to(window, 1, {
            scrollTo: { y: topTarget, autoKill: false },
            ease: easingSwing,
          });

          return false;
        });

      // accardeon
      _document.on('click', '.js-accardeon .accardeon__toggler', function(e) {
        var $title = $(this);
        var $element = $title.parent();
        var $content = $element.find('.accardeon__content');

        // clear previous active element(s)
        // var $siblings = $element.siblings();
        // if ($siblings.length > 0) {
        //   $siblings.each(function(i, element) {
        //     var $element = $(element);
        //     var $content = $element.find('.accardeon__content');

        //     if ($element.is('.is-active')) {
        //       $element.removeClass('is-active');
        //       $content.slideUp();
        //     }
        //   });
        // }

        // target current element
        if ($element.is('.is-active')) {
          $element.removeClass('is-active');
          $content.slideUp();
        } else {
          $element.addClass('is-active');
          $content.slideDown();
        }
      });
    },
    destroy: function() {
      // ... code ...
    },
  };
})(jQuery, window.APP);
