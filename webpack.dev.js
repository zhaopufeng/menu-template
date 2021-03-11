const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const  HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common,{
    mode: 'development',
    entry: './examples/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'head'
        })
    ],
    devtool: 'inline-source-map',
    devServer:{
        contentBase: './dist',
        port: 8083
    }
})