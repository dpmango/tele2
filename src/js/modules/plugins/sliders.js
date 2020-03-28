//////////
// SLIDERS
//////////
(function($, APP) {
  APP.Plugins.Sliders = {
    data: {
      swipers: [],
      responsiveSwipers: {
        tarifSwiper: {
          instances: [],
          enableOn: 991,
        },
      },
    },
    init: function(fromPjax) {
      if (!fromPjax) {
        this.initSwipers();
        this.initSwiperDataTree();
        this.initResponsiveSwipers();
        this.listenResize();
      }
    },
    reinit: function() {
      // without resize listeners double check
      this.initSwipers();
      this.initSwiperDataTree();
      this.initResponsiveSwipers();
    },
    update: function(selector) {
      var $swiper;
      // if selector passed - update only with selector
      if (selector) {
        $swiper = $(`${selector}.swiper-container-initialized`);
      } else {
        $swiper = $('.swiper-container-initialized');
      }

      if ($swiper.length > 0) {
        $swiper.each(function(i, swiper) {
          $(swiper)[0].swiper.update();
        });
      }
    },
    listenResize: function() {
      _window.on('resize', debounce(this.initResponsiveSwipers.bind(this), 200));
    },
    initSwipers: function() {
      var $page = $('.page').last();
    },
    initSwiperDataTree: function() {
      var tarifSwiper = '.js-tarif-swiper';
      if ($(tarifSwiper).length > 0) {
        this.initSwiperTree(tarifSwiper, 'tarifSwiper');
      }
    },
    initResponsiveSwipers: function() {
      var tarifSwiper = '.js-tarif-swiper';
      if ($(tarifSwiper).length > 0) {
        this.responsiveSwiperConstructor(tarifSwiper, 'tarifSwiper', {
          loop: true,
          watchOverflow: true,
          setWrapperSize: false,
          spaceBetween: 0,
          slidesPerView: 'auto',
          normalizeSlideIndex: true,
          centeredSlides: true,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
        });
      }
    },
    initSwiperTree: function(selector, name) {
      var _this = this;
      _this.data.responsiveSwipers[name].instances = [];
      $(selector).each(function(i, sw) {
        _this.data.responsiveSwipers[name].instances.push(undefined);
      });
    },
    responsiveSwiperConstructor: function(selector, objName, options) {
      var dataObj = this.data.responsiveSwipers[objName];

      $(selector).each(function(idx, element) {
        if (window.innerWidth <= dataObj.enableOn) {
          if (dataObj.instances[idx] === undefined) {
            dataObj.instances[idx] = new Swiper(element, options);
          }
        } else {
          if (dataObj.instances[idx] !== undefined) {
            dataObj.instances[idx].destroy(true, true);
            dataObj.instances[idx] = undefined;
          }
        }
      });

      this.data.responsiveSwipers[objName] = dataObj;
    },
  };
})(jQuery, window.APP);
