module.exports = {
	entry: './src/index.tsx',
	output: {
		libraryTarget: 'commonjs',
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
	},
	externals: {
		react: 'react',
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: ['ts-loader'],
			},
		],
	},
};
