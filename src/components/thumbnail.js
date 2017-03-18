import React, {PropTypes} from "react"
import {View} from "./core"
import styles from "./thumbnail.css"

export function Thumbnail({src, width = "100px"}) {
  return (
    <View className={styles.wrapper}>
      <img src={src} width={width} />
    </View>
  )
}

Thumbnail.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
}
