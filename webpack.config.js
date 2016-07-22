// webpack configuration file
module.exports = {
    // Define entry point
    entry: './app/app.js',
    // And the output files
    output: {
        filename: 'public/assets/js/app.js'
    },
    // The module Object contains Options affecting normal modules, like which one must be automatically loaded.
    module: {
        // loaders Transforms resource file that follows the specified pattern "{test}", loader are assigned in order, seperated by '!'
        loaders:[
            { test: /\.css$/, loader: 'style-loader!css-loader' },
        ]
    }
};
