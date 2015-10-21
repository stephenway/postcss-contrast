var postcss = require('postcss');
var contrast = require('contrast');

/**
 * PostCSS plugin to transform contrast()
 */
module.exports = postcss.plugin('postcss-contrast', function(opts) {
  opts = opts || {};

  return function(css) {
    css.walkDecls(function(decl) {
      if (!decl.value || decl.value.indexOf('contrast(') === -1) {
        return;
      }

      var index = decl.value.indexOf('(');
      var last = decl.value.indexOf(')');
      var value = decl.value.slice(++index, last);

      if (contrast(value) === 'light') {
        decl.value = '#000';
        return decl.value;
      }
      else {
        decl.value = '#fff';
        return decl.value;
      }
    });
  };
});

