const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
/*
const fs = require('fs');

fs.open('./src/config/env.js', 'w', function(err, fd) {
    const buf = 'export default "production";';
    fs.write(fd, buf, 0, buf.length, 0, function(err, written, buffer) {});
});
*/

module.exports = merge(webpackBaseConfig, {
    output: {
        publicPath: '/dist/',
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].chunk.js'
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].[contenthash].css',
            allChunks: true
        }),
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendors', 'manifest']
            
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            },
            BACKEND_URL: JSON.stringify('/')
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true
            }
        }),
        new HtmlWebpackPlugin({
            filename: '../index_prod.html',
            template: './src/template/index.ejs',
            inject: false
        }),
        new CompressionPlugin({
            test: /\.(js|css|svg|bmp|ttf|eot|woff)$/,
            threshold: 4096
        })
    ],
    externals: {
        "@babel/polyfill": 'window',
        'bootstrap': 'window.bootstrap',
        'vue': 'window.Vue',
        'vuex': 'window.Vuex',
        'vue-router': 'window.VueRouter',
        'axios': 'window.axios'
    }
});