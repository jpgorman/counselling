var baseunits = require("./base-units")
var getcolor = require("./get-color")
var gettypography = require("./get-typography")

module.exports = function(theme) {
  return {
    baseunits: baseunits(theme),
    getcolor: getcolor(theme),
    gettypography: gettypography(theme),
  }
}
