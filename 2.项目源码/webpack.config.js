// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/main.js',    // 入口文件
  output: {
    path: path.resolve(__dirname, 'dist'),   // 出口文件路径
    filename: 'bundle.js'    // 打包后的文件名
  },
  module: {
    rules: [
      {
        test: /\.vue$/,    // 处理Vue组件
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,    // 处理JS文件
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 4096,  // 可选项，根据需要进行配置
              name: 'assets/[name].[hash:8].[ext]'  // 可选项，根据需要进行配置
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/',  // 可根据需要指定输出路径
            },
          },
        ],
      }
      // 其他加载器和规则...
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json','svg'],    // 解析文件扩展名
    alias: {
      'vue$': 'vue/dist/vue.esm.js',    // 别名配置，确保使用运行时构建的Vue
      '@': path.resolve(__dirname, 'src')
    }
  },
  mode: 'production'
};