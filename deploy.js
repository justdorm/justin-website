/**
 * This script deploys ./dist to the justdorm.github.io master branch
 */

var path = require("path");
var exec = require("child_process").exec;

exec("git add . && git commit -m \"Automated deploy commit\" && git push deploy master", {
  cwd: path.join(".", "dist")
});
