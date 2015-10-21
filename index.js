'use strict';

var postcss = require('postcss');
var contrast = require('contrast');

/**
 * PostCSS plugin to transform contrast()
 */
module.exports = postcss.plugin('postcss-contrast', function(opts) {
  opts = opts || {};
  var dark = opts.dark;
  var light = opts.light;

  return function(css) {
    css.walkDecls(function(decl) {
      if (!decl.value || decl.value.indexOf('contrast(') === -1) {
        return;
      }

      var index = decl.value.indexOf('(');
      var last = decl.value.indexOf(')');
      var value = decl.value.slice(++index, last);
      var black = '#000';
      var white = '#fff';


      return new Promise(function(resolve) {
        if (contrast(value) === 'light') {
          if (!dark) {
            decl.value = black;
          }
          else {
            decl.value = opts.dark;
          }
          resolve();
        }
        else {
          if (!light) {
            decl.value = white;
          }
          else {
            decl.value = opts.light;
          }
          resolve();
        }
      });
    });
  };
});

