import React, {PropTypes} from "react"
import styles from "./container.css"

export function Container(props) {
  return (
    <div className={styles.wrapper}>
      {props.children}
    </div>
  )
}

Container.PropTypes = {
  children: PropTypes.any,
}
