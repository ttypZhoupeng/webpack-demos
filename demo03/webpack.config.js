
// babel-loader
// loader 是预处理器，让webpack处理非js文件（JSX/ES6），在构建之前将所有的文件转换为webpack能够处理的有效模块
// loader的两个目标

// - 识别出应该被loader转化的文件， 使用test属性
// - 转换这些文件，使他们添加到依赖图中，最终添加到bundle中，使用use属性

// babel-loader 是一个将jsx、es6格式的文件转换为js文件的工具。

const path = require('path');

module.exports = {
  entry: './main.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'')
  },
  module: { 
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  }
};



// main.js改成了react的jsx文件
// module 模块 决定了如何处理项目中的不同类型的模块
// exclude 排除 /node_modules/ 中的jsx, 另外还有一个是include: 匹配特定条件下的文件
// options: 给预处理器传递的参数
// ”presets“配置项来标识如何将ES6语法转成ES5以及如何转换React的JSX成js文件

