const path = require('path');
const withImages = require('next-images');
const withMDX = require('@next/mdx')();
module.exports = withMDX(
  withImages({
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
    target: 'serverless',
    esModule: true,
    reactStrictMode: true,
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      console.log(JSON.stringify(defaultLoaders, null, 2));
      if (isServer) {
        require('../utils/generateSiteMap');
      }
      return config;
    },
  })
);
// module.exports = withImages(
//   withMDX({
//     sassOptions: {
//       includePaths: [path.join(__dirname, 'styles')],
//     },
//     target: 'serverless',
//     esModule: true,
//     webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//       if (isServer) {
//         require('./utils/generateSiteMap');
//       }
//       return config;
//     },
//   })
// );

// module.exports = withMDX();
