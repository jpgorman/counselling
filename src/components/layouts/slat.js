import React, {PropTypes} from "react"
import {View} from "../"
import styles from "./slat.css"

export function Slat({children}) {
  return (
    <View className={styles.wrapper}>
      {children}
    </View>
  )
}

Slat.propTypes = {
  children: PropTypes.any,
}
