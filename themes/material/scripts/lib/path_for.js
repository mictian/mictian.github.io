var path = require('path');
var fs = require('fs');

function pathFor(paths) {
  var res = "";
  // In Hexo 7, use this.env to access hexo instance
  var hexo = this.env || this;
  var themeDir = hexo.theme_dir || (hexo.theme && hexo.theme.base) || path.join(hexo.base_dir, 'themes', hexo.config.theme);
  var sourceDir = hexo.source_dir || path.join(hexo.base_dir, 'source');
  
  res = path.join(themeDir, "source", paths);
  if(!fs.existsSync(res)){
    res = path.join(sourceDir, paths);
  }
  return res;
}

module.exports = pathFor;