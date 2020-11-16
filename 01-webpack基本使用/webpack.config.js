const { dirname } = require("path");
const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    publicPath:"dist/"

  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name:'img/[name].[hash:8].[ext]',
            },
          },
       
        ]
      }
    ]
  },
  //指定vue 使用的文件
  resolve: {
    alias: {
      'vue$':"vue/dist/vue.esm.js"
    }

  },
//关闭 webpack 的性能提示
performance: {
  hints:false
}



}