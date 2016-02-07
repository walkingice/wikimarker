var path = require('path');

var output = '_build';
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractLESS = new ExtractTextPlugin('app.css');

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
            }, {
                test: /\.(css|less)$/,
                loader: extractLESS.extract(['css','less'])
            }, {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }, {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            }
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, output)
    },
    plugins: [
        extractLESS,
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor",
                                                /* filename= */"vendor.js")
    ]
}
