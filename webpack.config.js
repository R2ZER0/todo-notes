const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const distPath = path.resolve(__dirname, 'dist');


const appConfig = {
    name: 'app',
    entry: './src/index.js',

    output: {
        path: distPath,
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({ template: 'src/index.html' })
    ],

};

module.exports = appConfig;
