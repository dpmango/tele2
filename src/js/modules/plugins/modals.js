//////////
// MODALS
//////////
(function($, APP) {
  APP.Plugins.Modals = {
    init: function() {
      var startWindowScroll = 0;
      $('.js-popup').magnificPopup({
        type: 'inline',
        fixedContentPos: true,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'popup-buble',
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
  };
})(jQuery, window.APP);
