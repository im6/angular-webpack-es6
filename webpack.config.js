var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: {
        app: [
            'webpack-dev-server/client?http://127.0.0.1:8081/',
            'webpack/hot/only-dev-server',
            './src/modules/main/module.js'
        ]
    },

    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve:{
        modulesDirectories:['node_modules',  './src/modules/'],
        extensions: ['','.js']
    },
    module: {
        loaders:[
            { test: /\.jsx?$/,exclude: /node_modules/,loaders: ['babel?presets[]=es2015']},
            { test: /\.jade$/, loader: "jade" },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
            { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/, loader: "file-loader" },
            {
                test: /\.less$/,
                loader: "style!css!less"
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        //new webpack.optimize.UglifyJsPlugin()
        new webpack.NoErrorsPlugin()
    ]
};