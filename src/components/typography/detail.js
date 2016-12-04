import React, {PropTypes} from "react"
import styles from "./detail.css"

export function Detail(props) {
  return (<div className={styles.detail}>{props.children}</div>)
}

Detail.PropTypes = {
  children: PropTypes.any,
}
