import React, {PropTypes} from "react"
import styles from "./sub-header.css"
import {View} from "../core"

export function SubHeader(props) {
  return (
    <View className={styles.subHeader}>
      {props.children}
    </View>
  )
}

SubHeader.propTypes = {
  children: PropTypes.any,
}
