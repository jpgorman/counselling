module.exports = function(theme) {
  const breakpoints = theme.breakpoints || {}
  return function(breakpoint) {
    return breakpoints[breakpoint]
  }
}
