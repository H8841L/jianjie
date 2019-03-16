const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode:"development",
    entry:"./src/main.js",
    output:{
        path: path.resolve(__dirname, "dist"),
        filename:"bundle.js"
    },
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        }
    },
    module:{
        rules:[{
            test:/\.vue$/,
            loader:'vue-loader'
        },{
            test:/\.js$/,
            loader:'babel-loader'
        },{
            test:/\.css$/,
            loader:'style-loader!css-loader'
        },{
            test:/\.(png|jpg|svg|gif)$/,
            loader:'file-loader',
            
        }]
    },
    externals:[],

    devServer:{
        contentBase:'./dist'
    },

    plugins:[
        new VueLoaderPlugin()
    ]
}