// ES6 Woo-Hoo !!
// webpack configuration file
var path = require('path');

module.exports = {
    // Define entry point
    entry: './app/app.js',
    // And the output files
    output: {
        // Define base folder for output files, required for webpack-dev-server
        path: path.resolve(__dirname, 'public'),
        filename: 'assets/js/app.js'
    },
    // The module Object contains Options affecting normal modules, like which one must be automatically loaded.
    module: {
        // Preloaders are executed BEFORE Bundling
        preLoaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'jscs-loader'}
        ],
        // loaders Transforms resource file that follows the specified pattern '{test}', loader are assigned in order, seperated by '!'
        loaders:[
            { test: /\.css$/, loader: 'style-loader!css-loader'},
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    }
};
