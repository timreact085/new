const path = require('path');


const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {

    entry: {
        index: './src/index.tsx',

    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, loader: "ts-loader" },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }

            },


            {
                test: /\.html$/i,
                use: ["html-loader"],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],

            },
            {

                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },

                options: {
                    name: "[name].[hash].[ext]",
                    outputPath: 'assets/imgs',

                }

            }

        ],
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".jsx"],
    },
    devtool: 'inline-source-map',



    optimization: {
        minimizer: [new UglifyJsPlugin()],
        removeAvailableModules: true,
    },



};