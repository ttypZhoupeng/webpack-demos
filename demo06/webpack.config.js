// css-loader
const path = require('path');

module.exports = {
  entry: './main.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'')
  },
  module: {
    rules:[
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
             loader: 'css-loader',
             options: {
               modules: true // 启用css-modules
             }
          }
        ]
      }
    ]
  }
};

// 如果是css模块是行成自己的作用域？可以使用：global来进行开关 在上面的例子中只有第二个h1是红色的，因为css被本地作用域化了，两个h2都是蓝的，因为是全局的

// css模块默认css样式均为局部样式，那么它被引入到了main.jsx中，就只在这个文件中作用，除非增加:global来定义为全局样式

//其中 style-loader的作用 能够在需要载入的html中创建一个<style></style>标签，标签里的内容就是CSS内容。
// css-loader的作用 允许在js中import一个css文件，会将css文件当成一个模块引入到js文件中

// 注意：style-loader必须在css-loader前面，loader从右往左取值/执行

// https://webpack.docschina.org/concepts/loaders#configuration


