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

## Example

### PostCSS
```css
:root {
  --bg-color: #fff;
}

body {
  background-color: var(--bg-color);
  color: contrast-text-color(var(--bg-color);
}
```

### Compiled CSS
```css
body {
  background-color: #fff;
  color: #000;
}
```

## Usage

```js
var postcss = require('postcss');
var contrast = require('postcss-contrast');
```

[travis-img]: https://img.shields.io/travis/stephenway/postcss-contrast.svg?label=unix
[travis]: https://travis-ci.org/stephenway/postcss-contrast
