import React, {PropTypes} from "react"
import { Link } from "react-router"
import { View } from "./core"
import styles from "./nav-link.css"

const componentMap = {
  "link": Link,
  "anchor": View,
}

export function NavLink(props){
  const {handler, type} = props
  const Component = componentMap[type]
  return (
    <Component
      onClick={handler}
      className={styles.wrapper}
      activeClassName={styles.active}
      {...props}
    />
  )
}

NavLink.propTypes = {
  type: PropTypes.string,
  handler: PropTypes.func,
}

NavLink.defaultProps = {
  type: "link",
}
