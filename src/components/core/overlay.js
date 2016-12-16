import React, {PropTypes} from "react"
import {View} from "./view"
import styles from "./overlay.css"

export function Overlay({handler}) {
  return (<View onClick={handler} className={styles.container} />)
}

Overlay.propTypes = {
  handler: PropTypes.func,
}
