var fs = require("fs");
var path = require("path");
var sharp = require("sharp");
var mkdirp = require("mkdirp");

mkdirp(path.join(".", "src", "thumbnails"));

fs.readdir(path.join(".", "src", "images"), function(err, files) {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  files.forEach(function(file) {
    console.log("Making thumbnail for %s", file);
    sharp(path.join(".", "src", "images", file))
      .resize(230)
      .toFile(path.join(".", "src", "thumbnails", path.basename(file)), function(err) {
        if (err) {
          console.error(err);
          process.exit(1);
        }
      });
  });
});
