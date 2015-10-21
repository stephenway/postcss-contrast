# postcss-contrast

<img src="giticon.png" alt="postcss-contrast" align="right" width="95"
height="95">

PostCSS plugin to change text color depending on background color
contrast.

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
