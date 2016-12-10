var baseunits = require("./base-units")
var getcolor = require("./get-color")
var gettypography = require("./get-typography")
var getbreakpoint = require("./get-breakpoint")

module.exports = function(theme) {
  return {
    baseunits: baseunits(theme),
    getcolor: getcolor(theme),
    gettypography: gettypography(theme),
    getbreakpoint: getbreakpoint(theme),
  }
}
