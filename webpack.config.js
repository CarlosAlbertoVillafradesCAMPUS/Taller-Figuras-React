const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports={
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'bundle.js',
        publicPath:'/'
    },
    mode: 'development',
    
    resolve:{
        extensions:['.js', '.jsx'],
        alias:{
            '@routes': path.resolve(__dirname, './src/routes'),
            '@images': path.resolve(__dirname, './src/assets/images'),
            '@icons': path.resolve(__dirname, './src/assets/icons'),
        }
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use:[{
                    loader:'html-loader'
                }]
            },
            {
                test: /\.s[ac]ss$/i,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
				test: /\.(png|svg|jpg|gif)$/,
				type: 'asset',
			}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            filename:'index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'[name].css'
        }),
        new NodePolyfillPlugin()
    ],
    devServer:{
		historyApiFallback:true
	}
}