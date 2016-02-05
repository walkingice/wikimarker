var path = require('path');

var output = '_build';

// https://webpack.github.io/docs/configuration.html
module.exports = {
    context: __dirname + '/app',
    entry: {
        app: ['./js/index.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
            },
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, output)
    }
}
