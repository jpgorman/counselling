import React, {PropTypes} from "react"
import {colors} from "theme"

export function Emphasis(props) {
  const {color, children} = props
  return (
    <span
      style = {{
        color: colors[color],
        fill: colors[color],
      }}>
      {children}
    </span>
  )
}

Emphasis.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.any,
}

Emphasis.defaultProps = {
  color: "noir",
}
