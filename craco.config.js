const CracoAntDesignPlugin = require("craco-antd");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const WebpackBar = require("webpackbar");

// Don't open the browser during development
process.env.BROWSER = "none";

module.exports = {
  webpack: {
    plugins: [
      new WebpackBar({ profile: true }),
      ...(process.env.NODE_ENV === "development"
        ? [new BundleAnalyzerPlugin({ openAnalyzer: false })]
        : []),
    ],
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,

      options: {
        modifyLessRule: function(lessRule, _context) {
          // lessRule.test = /\.(module)\.(less)$/;
          // lessRule.test = /\.less$/;
          lessRule.test = /\.less$/;
          // lessRule.exclude = /node_modules/;
          return lessRule;
        },
        // modifyLessRule: function(lessRule, _context) {
        // 	// lessRule.test = /\.(module)\.(less)$/;
        // 	// lessRule.test = /\.less$/;
        // 	lessRule.test = /\.less$/
        // 	// lessRule.exclude = /node_modules/;
        // 	lessRule.use = [
        // 		{
        // 			loader: 'typings-for-css-modules-loader', // generates typings for CSS and LESS files on the fly.
        // 			query: {
        // 				modules: true,
        // 				importLoaders: 1,
        // 				camelCase: true,
        // 				namedExport: true,
        // 				localIdentName: '[name]_[local]_[hash:base64:5]'
        // 			}
        // 		},
        // 		{
        // 			loader: 'postcss-loader',
        // 			options: { sourceMap: true }
        // 		},
        // 		{
        // 			loader: 'less-loader',
        // 			options: {
        // 				javascriptEnabled: true
        // 			}
        // 		}
        // 	]
        // 	return lessRule
        // },

        // cssLoaderOptions: {
        //   modules: true,
        //   localIdentName: `${
        //     process.env.NODE_ENV === "production"
        //       ? "[local]_[hash:base64:5]"
        //       : "[path][name]__[local]-"
        //   }-[hash:base64:8]`,
        // },
      },
    },
  ],
};
