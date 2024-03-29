const path = require('path');
const common = require('./webpack.common')
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
module.exports = merge(common, {
    mode: 'production',


    output: {
        filename: "./bundle.[contenthash].js",
        clean: true,
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
        new CleanWebpackPlugin()
    ],
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin(),
            new HtmlWebpackPlugin({

                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            })
        ]
    },
    module: {
        rules: [{
            test: /\.scss$/,

            use: [
                MiniCssExtractPlugin.loader, //3. Extract css into files
                "css-loader", //2. Turns css into commonjs
                "sass-loader", //1. Turns sass into css

            ],

        }]
    }

});