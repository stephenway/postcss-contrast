var fs = require('fs');
var test = require('tape');
var postcss = require('postcss');
var plugin = require('..');

function filename(name) { return 'test/' + name + '.css'; }
function read(name) { return fs.readFileSync(name, 'utf8'); }

function compareFixtures(t, name, msg, opts, postcssOpts) {
  postcssOpts = postcssOpts || {};
  postcssOpts.from = filename('fixtures/' + name);
  opts = opts || {};
  var actual = postcss().use(plugin(opts)).process(read(postcssOpts.from), postcssOpts).css;
  var expected = read(filename('fixtures/' + name + '.expected'));
  fs.writeFile(filename('fixtures/' + name + '.actual'), actual);
  t.equal(actual, expected, msg);
}

test('dark', function(t) {
  compareFixtures(t, 'dark', 'should transform darks to #fff');
  t.end();
});

test('light', function(t) {
  compareFixtures(t, 'light', 'should transform lights to #000');
  t.end();
});

test('options', function(t) {
  compareFixtures(t, 'options', 'should transform to custom dark/light option', {dark: '#444', light: '#efefef'});
  t.end();
});

