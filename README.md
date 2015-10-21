# postcss-contrast [![Travis Build Status][travis-img]][travis]

<img src="giticon.png" title="postcss-contrast" align="right" width="95"
height="95">

PostCSS plugin to change text color depending on background color
contrast. This is generally useful if your writing a mixin or placeholder
selector that applies to many scenarios.

**TL;DR** Use the `contrast()` function
anywhere and get `#fff` or `#000` depending on the lightness of the color you
pass in the function.

## Install

``` shell
npm i --save-dev postcss-contrast
```

## Usage

```js
var fs = require('fs');
var postcss = require('postcss');
var customProperties = require('postcss-custom-properties');
var contrast = require('postcss-contrast');

var css = fs.readFileSync('input.css', 'utf8');

var output = postcss()
  .use(customProperties())
  .use(contrast())
  .process(css)
  .css;

```

### PostCSS
```css
/* input.css */

:root {
  --bg-color: #fff;
}

body {
  background-color: var(--bg-color);
  color: contrast(var(--bg-color));
}
```

### Compiled CSS
```css
/* output.css */

body {
  background-color: #fff;
  color: #000;
}
```

## Options

#### `dark` (default: `#000`)

This lets your define a custom black for all contrast functions in your project.

``` js
var out = postcss()
  .use(contrast({dark: '#444'}))
  .process(css)
  .css;

```

#### `light` (default: `#fff`)

This lets your define a custom white for all contrast functions in your project.

``` js
var out = postcss()
  .use(contrast({light: '#efefef'}))
  .process(css)
  .css;

```

## Contributing

Make a branch, `npm test` often, submit a new pull when it passes.

``` shell
git clone https://github.com/stephenway/postcss-contrast.git
git checkout -b patch-1
npm i
npm test
```

## Resources

* [License](LICENSE)
* [Releases](https://github.com/stephenway/postcss-contrast/releases)
* [Plugin Guidelines](https://github.com/postcss/postcss/blob/master/docs/guidelines/plugin.md)

[travis-img]: https://img.shields.io/travis/stephenway/postcss-contrast.svg?label=unix
[travis]: https://travis-ci.org/stephenway/postcss-contrast
