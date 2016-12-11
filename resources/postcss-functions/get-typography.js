const R = require("ramda")

module.exports = function(theme) {
  return function(name) {
    const font = R.path(["typography", name], theme) || {}
    const defaultFont = R.path(["typography", "default"], theme)
    const family = font.family || defaultFont.family
    const weight = font.weight || defaultFont.weight
    const lineHeight = font.lineHeight || defaultFont.lineHeight
    const size = font.size || defaultFont.size
    return weight + " " + size + "px/" + lineHeight + family
  }
}
