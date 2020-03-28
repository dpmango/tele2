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
        // accardeon
        .on('click', '.js-accardeon .accardeon__toggler', function(e) {
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
        })

        // accardeon
        .on('click', '.js-select-tarif', function(e) {
          // select by id in selectric
          var id = $(this).data('id');
          var $select = $('.form select');

          $select.prop('selectedIndex', id).selectric('refresh');

          // scroll to section
          var topTarget = $('.form').offset().top;

          $('body, html').animate({ scrollTop: topTarget }, 1000);
          return false;
        });
    },
  };
})(jQuery, window.APP);
