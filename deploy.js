/**
 * This script deploys ./dist to the justdorm.github.io master branch
 */

var path = require("path");
var exec = require("child_process").exec;

console.log("Running deploy.js")

exec("git add . && git commit -m \"Automated deploy commit\" && git push deploy master", {
  cwd: path.join(".", "dist")
});
