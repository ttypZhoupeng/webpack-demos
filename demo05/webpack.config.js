// image loader
// 同样，图片资源也可以在js 文件中 main.js

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
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  }
};

// url转换image文件，如果小于8192字节不用特殊，就可以转化成数据url，不然的化就是正常的url。‘？’是用来给loader传递参数的

// 操作
// 查看bundle.js中的base64格式
// 删除生成的图片
// 运行代码，浏览器中查看

//1kb 为 1024字节，计算图片大小

// 到这里可以看到通过webpack处理之后，index.html基本只需要引入一个bundle.js即可，所有的包括css,图片，js,都会被处理成一个能被浏览器所认识的js文件
