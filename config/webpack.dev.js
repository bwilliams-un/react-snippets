const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractCSSChunks = require('extract-css-chunks-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css/,
                exclude: /node_modules/,
                use: ExtractCSSChunks.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[name]__[local]--[hash:base64:5]'
                            }
                        }
                    ]
                })
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '../build'
    },
    plugins: [
        // new CleanWebpackPlugin(['../build']),
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './src/index.html'
        }),
        new ExtractCSSChunks()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../build')
    }
};