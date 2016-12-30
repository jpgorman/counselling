import React from "react"
import theme from "theme"
import styles from "./banner.css"
import {Detail} from "./typography"
import {View, Emphasis} from "./core"

export function Banner() {
  return (
    <View className={styles.container}>
      <View className={styles.wrapper}>
        <img src={`/${theme.assets.logo}`} width="95px" />
        <Detail>Cat Chappell Counselling</Detail>
      </View>
      <View
        className={styles.info}>
        <Emphasis color="hint">
          <Detail>Bristol</Detail>
        </Emphasis>
      </View>
    </View>
  )
}
