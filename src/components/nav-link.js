import React, {PropTypes} from "react"
import { Link } from "react-router"
import { View } from "./core"
import styles from "./nav-link.css"
import {omit} from "ramda"

const componentMap = (handler) => {
  return {
    link: {
      Component: Link,
      overides: {
        onClick: handler,
        className: styles.wrapper,
        activeClassName: styles.active,
      },
    },
    anchor: {
      Component: View,
      overides: {
        onClick: handler,
        className: styles.wrapper,
      },
    },
    a: {
      Component: "a",
      overides: {
        className: styles.wrapper,
        activeClassName: styles.active,
      },
    },
  }
}

export function NavLink(props){
  const {handler, type} = props
  const {Component, overides} = componentMap(handler)[type]

  const newProps = {
    ...omit(["handler", "type"], props),
    ...overides,
  }

  return (
    <Component {...newProps} />
  )
}

NavLink.propTypes = {
  type: PropTypes.string,
  handler: PropTypes.func,
  children: PropTypes.any,
}

NavLink.defaultProps = {
  type: "link",
}
