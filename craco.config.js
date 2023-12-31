// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
module.exports = {
  // webpack 配置
  webpack: {
    // 配置别名
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      '@': path.resolve(__dirname, 'src'),
    },
    configure: (webpackConfig, { paths }) => {
      webpackConfig.entry = 'src/main.tsx';
      paths.appIndexJs = 'src/main.tsx';
      return webpackConfig;
    },
  },
};
