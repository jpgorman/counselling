import React, {PropTypes} from "react"
import {Flex} from "./core"
import styles from "./divider.css"

export function Divider(props) {
  return <Flex className={styles.wrapper}>{props.children}</Flex>
}

Divider.PropTypes = {
  children: PropTypes.any,
}
