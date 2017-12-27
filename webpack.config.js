const path = require("path");

module.exports = {
	entry:"./src/index.js",
	output:{
		filename:"bundle.js",
		path:path.resolve(__dirname,"dist")
	},
	devServer:{
		contentBase:'./dist'
	},
	resolve: {
        extensions: ['.js', '.jsx']
    },
	module:{
		rules:[
		  {
			test:/\.js$/,
			loader:"babel-loader",
			query: {
                    presets: ['es2015', 'react']
                }
		  },
		  {
			test:/\.jsx$/,
			loader:"babel-loader",
			query: {
                    presets: ['es2015', 'react']
                }
		  }
		]
	}
};