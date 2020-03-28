//////////
// HEADER
//////////
(function($, APP) {
  APP.Components.Header = {
    data: {
      header: {
        container: undefined,
        bottomPoint: undefined,
      },
    },
    init: function(fromPjax) {
      var _this = this;
      if (!fromPjax) {
        setTimeout(function() {
          _this.showRegionModal();
        }, 3000);

        this.getHeaderParams();
        this.hamburgerClickListener();
      }
    },
    getHeaderParams: function() {
      var $header = $('.header');
      var headerOffsetTop = 0;
      var headerHeight = $header.outerHeight() + headerOffsetTop;

      this.data.header = {
        container: $header,
        bottomPoint: headerHeight,
      };
    },
    closeMobileMenu: function(isOnload) {
      $('[js-hamburger]').removeClass('is-active');
    },
    hamburgerClickListener: function() {
      _document
        .on('click', '[js-hamburger]', function() {
          $(this).toggleClass('is-active');
        })
        .on('click', '.js-close-region-modal', function() {
          $('.js-region-modal').removeClass('is-visible');
        });
    },
    showRegionModal: function() {
      $('.js-region-modal').addClass('is-visible');
    },
    // listenScroll: function() {
    //   _window.on('scroll', this.scrollHeader.bind(this));
    // },
    // listenResize: function() {
    //   _window.on('resize', debounce(this.getHeaderParams.bind(this), 100));
    // },
  };
})(jQuery, window.APP);
