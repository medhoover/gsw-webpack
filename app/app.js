// This is the entry file

// Import your dependencies with any pattern you prefer : require, import(ES6) or CommonJs
var beautify = require('./helpers/beautify');

var div = document.getElementById('content');

div.innerHTML = div.innerHTML + beautify('webpack');
