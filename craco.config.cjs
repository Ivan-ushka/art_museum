const path = require('path');
const CracoAlias = require("craco-alias");

module.exports = {
   plugins: [
      {
         plugin: CracoAlias,
         options: {
            source: "options",
            baseUrl: "src",
            aliases: {
               '@api': path.resolve(__dirname, 'src/api'),
               '@assets': path.resolve(__dirname, 'src/assets'),
               '@components': path.resolve(__dirname, 'src/components'),
               '@constants': path.resolve(__dirname, 'src/constants'),
               '@pages': path.resolve(__dirname, 'src/pages'),
               '@types': path.resolve(__dirname, 'src/interfaces'),
               '@utils': path.resolve(__dirname, 'src/utils'),
            }
         }
      }
   ]
};