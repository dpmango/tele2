//////////
// MODALS
//////////
(function($, APP) {
  APP.Plugins.Modals = {
    init: function() {
      this.clickListeners();
    },
    openModal: function(target) {
      var startWindowScroll = 0;

      $.magnificPopup.open({
        items: {
          src: target,
        },
        type: 'inline',
        fixedContentPos: true,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'popup-buble',
        closeMarkup: `<button title="%title%" type="button" class="mfp-close">
          <svg class="ico ico-mono-close">
            <use xlink:href="img/sprite-mono.svg#ico-mono-close"></use>
          </svg>
        </button>`,
        callbacks: {
          beforeOpen: function() {
            startWindowScroll = _window.scrollTop();
            // $('html').addClass('mfp-helper');
          },
          close: function() {
            // $('html').removeClass('mfp-helper');
            _window.scrollTop(startWindowScroll);
          },
        },
      });
    },
    clickListeners: function() {
      _document
        .on('click', '.js-popup', function(e) {
          e.preventDefault();

          var $link = $(this);
          var target = $link.attr('href');

          APP.Plugins.Modals.openModal(target);
        })
        .on('click', '.js-close-popup', function() {
          $.magnificPopup.close();
        });
    },
  };
})(jQuery, window.APP);
