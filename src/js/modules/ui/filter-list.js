//////////
// INPUT FOCUSES
//////////
(function($, APP) {
  APP.Plugins.FilterList = {
    init: function() {
      this.filter();
    },
    filter: function() {
      var $elements = $('.js-filter-list');
      if ($elements.length === 0) return;

      $elements.each(function(i, input) {
        var $input = $(input);
        var $list = $($input.data('list'));
        var $listElements = $list.find('li');
        if ($list.length === 0) return true;

        $input.on(
          'input',
          debounce(function() {
            var val = $(this)
              .val()
              .trim()
              .toLowerCase();

            var shouldHide = [];
            var shouldShow = [];
            $listElements.each(function() {
              var $li = $(this);
              var text = $(this)
                .text()
                .trim()
                .toLowerCase();

              if (text.search(val) > -1) {
                shouldShow.push($li);
                $li.fadeIn(100);
              } else {
                shouldHide.push($li);
                $li.fadeOut(100);
              }
            });

            setTimeout(hideParents, 200);

            function hideParents() {
              // clear
              $('.popup__region').show();

              $listElements.each(function() {
                var $li = $(this);
                var $container = $li.closest('.popup__region');
                var $list = $li.closest('.popup__region-list');

                if ($list.children(':visible').length === 0) {
                  $container.hide();
                } else {
                  $container.show();
                }
              });
            }

            // if (shouldHide.length > 0) {
            //   $.each(shouldHide, function(i, li) {
            //     var $li = $(li);
            //     var $container = $li.closest('.popup__region');
            //     var $containerLis = $container.find('li');

            //     var isAllHidden = (difference($containerLis, shouldHide).length = 0);
            //     if (isAllHidden) {
            //       $container.fadeOut(100);
            //     } else {
            //       $container.fadeIn(100);
            //     }
            //   });
            // }
          }, 300)
        );
      });
    },
  };
})(jQuery, window.APP);
