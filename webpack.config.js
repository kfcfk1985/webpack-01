const path = require("path")
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');


module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js"
    },
    mode: 'development',
    plugins: [

        // new CleanWebpackPlugin(),
    ],
    module: {
        rules: [{
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        }
                    },
                    'less-loader'
                ],
            }
        ],
    },
}