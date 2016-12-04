import React, {PropTypes} from "react"
import styles from "./regular.css"

export function Regular(props) {
  return (<div className={styles.regular}>{props.children}</div>)
}

Regular.PropTypes = {
  children: PropTypes.any,
}
