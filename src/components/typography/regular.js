import React, {PropTypes} from "react"
import styles from "./regular.css"
import {View} from "../core"

export function Regular(props) {
  return (
    <View className={styles.regular}>
      {props.children}
    </View>
  )
}

Regular.propTypes = {
  children: PropTypes.any,
}
