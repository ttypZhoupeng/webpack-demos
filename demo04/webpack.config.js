// css-loader
// 可以预处理css 文件使用css—loader

const path = require('path');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'')
  },
  module: {
    rules:[
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
    ]
  }
};

// 这个比较简单，主要展示常用的一些loader
