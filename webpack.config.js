var path = require('path');

var output = '_build';
var webpack = require('webpack');

// https://webpack.github.io/docs/configuration.html
module.exports = {
    context: __dirname + '/app',
    entry: {
        app: ['./js/index.jsx'],
        vendor: ['react', 'react-dom', 'react-redux', 'react-router', 'immutable'],
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
            }, {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, output)
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor",
                                                /* filename= */"vendor.js")
    ]
}
