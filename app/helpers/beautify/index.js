// Import required dependencies per each Module
var _ = require('lodash');

// Only expose what you need
module.exports = function(title) {
    return '<strong>' + _.toUpper(title) + '</strong>';
}
