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
        ? [new BundleAnalyzerPlugin({ openAnalyzer: true })]
        : []),
    ],
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,

      options: {
        modifyLessRule: function(lessRule, _context) {
          lessRule.test = /\.less$/;
          lessRule.exclude = undefined;

          // console.log('lessRule', lessRule)
          // console.log('JSON', JSON.stringify(lessRule.use))

          return lessRule;
        },

        // cssLoaderOptions: {
        // 	modules: true,
        // 	localIdentName: `${process.env.NODE_ENV === 'production'
        // 		? '[local]_[hash:base64:5]'
        // 		: '[path][name]__[local]-'}-[hash:base64:8]`
        // }
      },
    },
  ],
};
