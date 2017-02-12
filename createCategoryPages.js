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

console.log("Creating category pages...");

for (var category in portfolio) {
    if (!portfolio.hasOwnProperty(category)) {
        continue;
    }
    var categoryFile = path.join(".", "src", kebabCase(category) + ".html");
    var categoryHtml = "<!--\ncategory: " + category + "\nlayout: category\n-->";
    fs.writeFileSync(categoryFile, categoryHtml);
    console.log("Wrote " + categoryFile + ".");
}
