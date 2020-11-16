 const { dirname } = require("path");
const path = require("path");
const htmlwebpack = require("html-webpack-plugin") ;

//uglifyjs-webpack-plugin  压缩js插件

module.exports = {
  entry: "./src/main.js",
  output: {
    //__dirname node全局变量 指向当前全目录
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    //使用插件自动生成html 时不需要
    // publicPath:"dist/"

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
      },{
        test:/\.vue$/,
        use:["vue-loader"]
      }
    ]
  },
  plugins:[new htmlwebpack({
    template:'index.html'
  })],
  //指定vue 使用的文件
  resolve: {
    alias: {
      'vue$':"vue/dist/vue.esm.js"
    }
  },
  devServer:{
    contentBase:"./dist",
    inline:true,
    port:8088
  }
//关闭 webpack 的性能提示
// performance: {
//   hints:false
// }



}