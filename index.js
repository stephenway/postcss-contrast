var postcss = require('postcss');
var contrast = require('contrast');

/**
 * PostCSS plugin to transform contrast()
 */
module.exports = postcss.plugin('postcss-contrast', function(opts) {
  opts = opts || {};
  opts.dark = '#000';
  opts.light = '#fff';

  return function(css) {
    css.walkDecls(function(decl) {
      if (!decl.value || decl.value.indexOf('contrast(') === -1) {
        return;
      }

      var index = decl.value.indexOf('(');
      var last = decl.value.indexOf(')');
      var value = decl.value.slice(++index, last);

      if (contrast(value) === 'light') {
        decl.value = opts.dark;
      }
      else {
        decl.value = opts.light;
      }
    });
  };
});

