import React, {PropTypes} from "react"
import styles from "./header.css"
import {View} from "../core"

export function Header(props) {
  return (
    <View className={styles.regular}>
      {props.children}
    </View>
  )
}

Header.propTypes = {
  children: PropTypes.any,
}
