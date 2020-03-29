//////////////////////////////////
// HELPERS and PROTOTYPE FUNCTIONS
//////////////////////////////////

// get window width (not to forget about ie, win, scrollbars, etc)
function getWindowWidth() {
  return window.innerWidth;
}

// Add padding to numbers (a.k.a format by mask 00)
// use (9).pad(2) // output - 09
Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {
    s = '0' + s;
  }
  return s;
};
