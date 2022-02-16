const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: "./src/index.ts",
		output: {
		path: path.resolve(__dirname, "src"),	
		filename: "bundle.js",
	},

	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
						MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							url: false,
						},
					}
				],
			},
			//+++++++++++++++++++++++++++++	
			{
				test: /\.s[ac]ss$/i,
				use: [
						MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							url: false,
						},
					},
						'sass-loader'
				],
			},
			//+++++++++++++++++++++++++++++
			{
				test: /\.[tj]s|\.tsx$/,
				use: 'ts-loader',
			//	use: 'awesome-typescript-loader',
				exclude: /node_modules/,
			},
			//+++++++++++++++++++++++++++++
		],
	},
	//===================================
	resolve: {
		extensions: ['.ts', '.js'],
	},
	//===================================
	plugins: [
		new MiniCssExtractPlugin({
			filename: "bundle.css"
		}),
	],

	mode: "production"
};

//	npm i -D webpack webpack-cli css-loader sass-loader sass mini-css-extract-plugin ts-loader
//	npm run build

