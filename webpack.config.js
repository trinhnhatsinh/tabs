const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
 
module.exports = {
   entry: './main.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'app.js'
   },
   devServer: {
      inline: true,
      port: 3000
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['@babel/preset-env', '@babel/preset-react']
            }
         },
         {
          test: /\.(s[ac]ss|css|less)$/i,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
            },
            {
              loader: 'less-loader',
            }
          ],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader',
          ],
        },
      ],
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './index.html'
      })
   ],
   resolve: {
    alias: {
      '@misc': path.resolve(__dirname, './src/misc'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@components': path.resolve(__dirname, './src/components'),
      '@translation': path.resolve(__dirname, './src/translation'),
      '@router': path.resolve(__dirname, './src/router'),
      '@uitls': path.resolve(__dirname, './src/uitls')
    }
  }
}