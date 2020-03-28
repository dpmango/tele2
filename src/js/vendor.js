// import $ from 'jquery';
import svg4everybody from 'svg4everybody';
import picturefill from 'picturefill';
import viewportUnitsBuggyfill from 'viewport-units-buggyfill';
import objectFitImages from 'object-fit-images/dist/ofi.es-modules.js';
import Swiper from 'swiper';
import magnificPopup from 'magnific-popup';
import validate from 'jquery-validation';
import mask from 'jquery-mask-plugin';
import selectric from 'jquery-selectric';
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
// import difference from 'lodash/difference';
import autofillEvent from 'autofill-event';

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
window.validate = validate;
window.mask = mask;
window.selectric = selectric;
window.debounce = debounce;
window.throttle = throttle;
// window.difference = difference;
window.autofillEvent = autofillEvent;
