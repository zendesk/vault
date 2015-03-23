/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var compileSass = require('broccoli-sass');

// Our ember app
var app = new EmberApp();
module.exports = app.toTree();

// Styles
var appCss = compileSass([], 'app/styles/app.scss', 'dists/assets/ui.css');


