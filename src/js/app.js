// PRE-initialization
var APP = window.APP || {};
APP.Dev = APP.Dev || {};
APP.Browser = APP.Browser || {};
APP.Plugins = APP.Plugins || {};
APP.Components = APP.Components || {};

// force scroll to top on initial load
window.onbeforeunload = function() {
  window.scrollTo(0, 0);
};

// shorthand operators
var _window = $(window);
var _document = $(document);

(function($, APP) {
  APP.Initilizer = function() {
    var app = {};

    app.init = function() {
      app.initGlobalPlugins();
      app.initPlugins();
      app.initComponents();
    };

    // Global plugins which must be initialized once
    app.initGlobalPlugins = function() {
      APP.Dev.Credentials.logCredentials();
      APP.Dev.Breakpoint.listenResize();
      APP.Browser().methods.setBodyTags();
      APP.Plugins.LegacySupport.init();
      APP.Plugins.ScrollBlock.listenScroll();
      APP.Plugins.Clicks.init();
    };

    // Plugins which depends on DOM and page content
    app.initPlugins = function() {
      APP.Plugins.Sliders.init();
      APP.Plugins.Modals.init();
      APP.Plugins.Masks.init();
      APP.Plugins.Selectric.init();
      APP.Plugins.InputFocuses.init();
      APP.Plugins.InputReader.init();
      APP.Plugins.FilterList.init();
      APP.Plugins.TextareaAutoExpand.init();
      APP.Plugins.Validations.init();
      APP.Plugins.LegacySupport.fixImages();
    };

    // All components from `src/componenets`
    app.initComponents = function() {
      APP.Components.Header.init();
    };

    return app;
  };

  // a.k.a. ready
  $(function() {
    APP.Initilizer().init();
  });
})(jQuery, window.APP);
