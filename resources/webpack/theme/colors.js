const Color = require("color")
const R = require("ramda")

const colors = {
  primary: Color("rgb(92, 92, 92)"),
  swamp: Color("rgb(0, 51, 102)"),
  detail: Color("rgb(0, 0, 0)").alpha(0.5),
  hint: Color("rgb(0, 0, 0)").alpha(0.3),
  separator: Color("rgb(231, 231, 231)"),
  canvas: Color("rgb(243, 243, 243)"),
  noir: Color("rgb(0, 0, 0)"),
  punch: Color("rgb(216, 216, 216)"),
  lift: Color("rgb(255, 255, 255)"),

  warn: Color("rgb(255, 152, 0)"),
  alert: Color("rgb(225, 27, 34)"),

  gradientPunchStart: Color("rgb(0, 83, 137)"),
  gradientPunchEnd: Color("rgb(0, 47, 94)"),
}

const colourVariations = {
  secondary: colors.alert,
  good: Color("rgb(55,186,136)"),
  bad: colors.alert,
  primaryDisabled: Color(colors.primary.string()).alpha(0.5),
  primaryLight: Color("rgb(127,153,178)"),
  gradientLiftStart: Color(colors.gradientPunchStart.string()).darken(0.05),
  gradientLiftEnd: Color(colors.gradientPunchEnd.string()).darken(0.05),
}

function mergeColors(colors) {
  return R.compose(
    R.map(function(c) {return c.string()}),
    R.mergeAll
  )(colors)
}

module.exports = mergeColors([colors, colourVariations])
