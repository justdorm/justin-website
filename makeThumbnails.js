var fs = require("fs");
var path = require("path");
var sharp = require("sharp");
var mkdirp = require("mkdirp");

function thumbnailicize(targetSize, targetDir) {
    mkdirp(path.join(".", "src", targetDir));
    fs.readdir(path.join(".", "src", "images"), function(err, files) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        files.forEach(function(file) {
            console.log("Making %d px thumbnail for %s", targetSize, file);
            sharp(path.join(".", "src", "images", file))
                .resize(targetSize)
                .toFile(path.join(".", "src", targetDir, path.basename(file)), function(err) {
                    if (err) {
                        console.error(err);
                        process.exit(1);
                    }
                });
        });
    });
}

thumbnailicize(230, "thumbnails");
thumbnailicize(400, "thumbnails_lrg");
