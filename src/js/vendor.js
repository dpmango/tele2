// import $ from 'jquery';
import svg4everybody from 'svg4everybody';
import picturefill from 'picturefill';
import viewportUnitsBuggyfill from 'viewport-units-buggyfill';
import objectFitImages from 'object-fit-images/dist/ofi.es-modules.js';
import Swiper from 'swiper';
import magnificPopup from 'magnific-popup';
import scrollMonitor from 'scrollmonitor';
import validate from 'jquery-validation';
import mask from 'jquery-mask-plugin';
import selectric from 'jquery-selectric';
import TweenMax from 'gsap/TweenMax';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
import sharer from 'sharer.js';

// expose imports to window to use in app.js
// (jquery is exposed in expose-loader)
// window.jQuery = $;
// window.$ = $;
window.svg4everybody = svg4everybody;
window.picturefill = picturefill;
window.objectFitImages = objectFitImages;
window.viewportUnitsBuggyfill = viewportUnitsBuggyfill;
window.Swiper = Swiper;
window.magnificPopup = magnificPopup;
window.scrollMonitor = scrollMonitor;
window.validate = validate;
window.mask = mask;
window.selectric = selectric;
window.ScrollToPlugin = ScrollToPlugin;
window.TweenMax = TweenMax;
window.debounce = debounce;
window.throttle = throttle;
window.sharer = sharer;
