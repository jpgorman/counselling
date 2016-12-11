import React, {PropTypes} from "react"
import {Flex, View} from "./core"
import styles from "./divider.css"

export function Divider(props) {
  return (
    <Flex className={styles.wrapper}>
      <View className={styles.container}>
        {props.children}
      </View>
    </Flex>
  )
}

Divider.propTypes = {
  children: PropTypes.any,
}
