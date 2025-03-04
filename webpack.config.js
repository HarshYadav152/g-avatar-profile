const path = require( 'path' );

module.exports = {
	entry: './src/client/index.js',
	output: {
		path: path.resolve( __dirname, 'public' ),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ],
			},
			{
				test: /\.scss$/,
				use: [ 'style-loader', 'css-loader', 'sass-loader' ],
			},
		]
	},
	resolve: {
		extensions: [ '.js', '.jsx', '.css', '.scss' ]
	}
};
