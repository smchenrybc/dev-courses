/**
 * BuildManfiestPlugin.js
 */

let fs = require('fs');
let path = require("path");

// constructor
function BuildManfiestPlugin() {}

// apply method
BuildManfiestPlugin.prototype.apply = function(compiler) {
  compiler.plugin('emit', (compiler, callback) => {
    let manifest = JSON.stringify(compiler.getStats().toJson().assetsByChunkName);

    compiler.assets['manifest.json'] = {
      source: function() {
        return manifest;
      },

      size: function() {
        return manifest.length;
      }
    };

    callback();
  });

  compiler.plugin('done', this.writeManifest);
};

BuildManfiestPlugin.prototype.writeManifest = function(stats) {
  fs.writeFileSync(
    path.join(__dirname, '../../dist/manifest.json'),
    JSON.stringify(stats.toJson().assetsByChunkName)
  );
}

// export
module.exports = BuildManfiestPlugin;
