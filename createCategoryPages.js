/**
 * This script creates html files representing portfolio categories.
 */

var fs = require("fs");
var path = require("path");
var portfolio = require("./src/portfolio.json");

/**
 * Converts a word to kebab-case
 */
var kebabCase = function(word) {
    return word.toLowerCase().replace(/[\s_]/g, '-');
};

console.log("Cleaning outdated files...");

fs.readdirSync("src").forEach(function(file) {
    if (path.extname(file) !== ".html") return;
    file = path.join(".", "src", file);
    if (fs.readFileSync(file, 'utf8').match(/\<\!\-\- Automatically generated on /)) {
        fs.unlinkSync(file);
        console.log("Deleted " + file);
    }
});

console.log("Creating category pages...");

for (var category in portfolio) {
    if (!portfolio.hasOwnProperty(category)) {
        continue;
    }
    var categoryFile = path.join(".", "src", kebabCase(category) + ".html");
    var categoryHtml = "<!--\ntitle: " + category + "\ncategory: " + category + "\n-->";
    categoryHtml += "\n<!-- Automatically generated on " + new Date().toUTCString() + " -->";
    fs.writeFileSync(categoryFile, categoryHtml);
    console.log("Wrote " + categoryFile + ".");
}
