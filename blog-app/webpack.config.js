var webpack = require('webpack');
module.exports = {
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname,
        publicPath: "build/",
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }, {
                test: /\.(sass|scss)$/,
                exclude: /node_modules/,
                use: [{
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader'
                    }, {
                        loader: 'sass-loader'
                    }] 
           }]
    },
    devServer: {
      historyApiFallback: true
  }
}