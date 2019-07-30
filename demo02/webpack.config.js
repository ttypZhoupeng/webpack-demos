// 多入口文件
// 对于多页面网站，适合使用多个入口文件
const path = require('path');

module.exports = {
  entry: {
    bundle1: './main1.js', 
    bundle2: './main2.js',
    bundle3: './main3.js'
  },
  output: {
    path: path.resolve(__dirname, ''),
    filename: '[name].js' //name是一个参数，其中的值为entry中的key值
  }
};


// 操作
// 添加一个新的入口，测试