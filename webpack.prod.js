const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(common,{
    mode: 'production',
    entry: './src/index.js',
    plugins:[
        new CleanWebpackPlugin('dist')
    ]
})