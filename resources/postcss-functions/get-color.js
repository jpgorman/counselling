const Color = require("color")

module.exports = function(theme) {
  return function(colorName, opacity) {
    if (opacity === undefined) opacity = 1
    return Color(theme.colors[colorName]).alpha(opacity).string()
  }
}
