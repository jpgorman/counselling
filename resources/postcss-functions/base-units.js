module.exports = function(theme) {
  const baseUnit = theme.units.baseUnit || 0
  return function(multiplier) {
    return multiplier * baseUnit + "px"
  }
}
