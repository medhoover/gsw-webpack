// This is the entry file

// Import your dependencies with any pattern you prefer : require, import(ES6) or CommonJs
// Required Modules gets important only once, you can still import any module/dependency everywhere you like without worrying about duplication
var _ = require('lodash');
var beautify = require('./helpers/beautify');

require('milligram');

var div = document.getElementById('content');

div.innerHTML = div.innerHTML + beautify('webpack');

div.style.display = 'none';

var button = document.getElementsByClassName('button')[0];

window.toggleElement = function() {

    if (_.isEqual(button.innerHTML, 'Show')) {
        div.style.display = 'block';
        button.innerHTML = 'Hide';
    } else {
        div.style.display = 'none';
        button.innerHTML = 'Show';
    }
}
