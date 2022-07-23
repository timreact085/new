const path = require('path');
const common = require('./webpack.common')
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: "./bundle.js",
        clean: true,
        path: path.resolve(__dirname, "dist")

    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                "style-loader", //3. Inject styles into DOM
                "css-loader", //2. Turns css into commonjs
                "sass-loader",
                //1. Turns sass into css
            ]
        }]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'Development',
        }),



    ],


});