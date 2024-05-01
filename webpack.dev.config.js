const { merge } = require('webpack-merge');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const commonConfig = require('./webpack.base.config')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(commonConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'test-index.html',
            filename: 'test-index.html',
            inject: false
        }),
        // new CopyWebpackPlugin({
        //     patterns: [
        //         { from: 'createGameData.js', to: 'createGameData.js' },
        //         { from: 'validateGameData.js', to: 'validateGameData.js' },
        //         { from: 'node_modules/crypto-js/crypto-js.js', to: 'node_modules/crypto-js/crypto-js.js' }
        //     ]
        // }),
    ],
})
