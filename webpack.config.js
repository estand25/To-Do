var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var __DEV__ = process.env.NODE_ENV === 'development'

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        __DEV__ && './mocks/index.js',
        './index.js'
    ].filter(Boolean),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader', 'eslint-loader'],
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader',
                    'less-loader']
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'svg-url-loader',
                query: {
                    limit: '10000',
                    mimetype: 'application/svg+xml'
                }
            }
        ]
    },
    devServer: {
      contentBase: "./build",
      historyApiFallback: true,
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin ({
            template: 'public/index.html'
        })
    ],
    resolve: {
        extensions: [
            ".ts",".tsx",".js",".jsx",".json"
        ]
    }
}
