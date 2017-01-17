import React, {PropTypes} from "react"
import {View} from "./core"
import styles from "./image.css"

export function Image({src}) {
  return (
    <View className={styles.wrapper}>
      <img src={src} width="100%" />
    </View>
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
}
