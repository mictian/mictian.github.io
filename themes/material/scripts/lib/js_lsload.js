'use strict';

var pathLib = require('path');
var fs = require('fs');

function jsHelper() {
  var result = '';
  var path = '';
  var key = ''

  for (var i = 0, len = arguments.length; i < len; i++) {

    if (typeof arguments[i] === 'string'){
      path = arguments[i];
      key = path;
    }else{
      path = arguments[i].path;
      key = arguments[i].key
    }

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
          hash = '?' + crypto.createHash('md5').update(content).digest('hex').substring(0, 8);
        }
      } catch(e) {
        // Ignore errors, just don't add hash
      }
      
      result += '<script>lsloader.load("' + key + '","' +
        this.url_for(path) + hash + '", true)</script>'
    }
  }
  return result;
}

module.exports = jsHelper;