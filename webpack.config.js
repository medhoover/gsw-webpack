// ES6 Woo-Hoo !!
// webpack configuration file
var path = require('path');

module.exports = {
    // Define entry point
    entry: './app/app.js',
    // And the output files
    output: {
        // Define base folder for output files
        path: path.resolve(__dirname, 'public'),
        // Define allowed path for url to access via webpack-dev-server
        publicPath: '/assets/',
        // Define filename based on webpack run type
        filename: outputPath()
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

function outputPath() {
    return (process.env.NODE_ENV === 'development') ? 'app.js' : 'assets/js/app.js';
}
