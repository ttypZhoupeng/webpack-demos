// demo1: 入口文件
const path = require('path'); //path是node的核心模块，用于操作文件路径

module.exports = {
  entry: './main.js', //入口文件，webpack构建的起始文件
  output: {           // 配出输出编译的文件，以及位置
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  }
};

// 升级webpack4，安装webpack-cli，重新install

// 操作
// 1.删除path，展示默认output的文件夹
// 2.更改filename,展示filename输出的名字