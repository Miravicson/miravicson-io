const path = require('path');
const withImages = require('next-images');
module.exports = withImages({
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  target: 'serverless',
  esModule: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (isServer) {
      require('./utils/generateSiteMap');
    }
    return config;
  },
});
