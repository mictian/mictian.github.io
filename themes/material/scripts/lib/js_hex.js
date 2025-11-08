'use strict';

var pathLib = require('path');
var fs = require('fs');

function jsHelper() {
  var result = '';
  var path = '';

  for (var i = 0, len = arguments.length; i < len; i++) {
    path = arguments[i];

    if (i) result += '\n';

    if (Array.isArray(path)) {
      result += jsHelper.apply(this, path);
    } else {
      if (path.indexOf('?') < 0 && path.substring(path.length - 3, path.length) !== '.js') path += '.js';
      
      // Get file hash for cache busting
      var hash = '';
      try {
        var publicPath = pathLib.join(this.env.public_dir, path);
        if (fs.existsSync(publicPath)) {
          var crypto = require('crypto');
          var content = fs.readFileSync(publicPath);
          hash = crypto.createHash('md5').update(content).digest('hex').substring(0, 8);
        }
      } catch(e) {
        hash = Date.now(); // Fallback to timestamp
      }
      
      result += '<script src="' + this.url_for(path) + '?' + hash + '"></script>';
    }
  }

  return result;
}

module.exports = jsHelper;