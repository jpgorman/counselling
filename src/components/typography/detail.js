import React, {PropTypes} from "react"
import styles from "./detail.css"
import {View} from "../core"

export function Detail(props) {
  return (
    <View className={styles.detail}>
      {props.children}
    </View>
  )
}

Detail.propTypes = {
  children: PropTypes.any,
}
