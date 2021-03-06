import React, {PropTypes} from "react"
import {View} from "./core"
import styles from "./image.css"

export function Image({src, width = "100%"}) {
  return (
    <View className={styles.wrapper}>
      <img src={src} width={width} />
    </View>
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
}
