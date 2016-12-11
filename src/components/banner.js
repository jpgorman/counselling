import React from "react"
import theme from "theme"
import styles from "./banner.css"
import {Detail} from "./typography"
import {View, Flex, Emphasis} from "./core"

export function Banner() {
  return (
    <View className={styles.container}>
      <View className={styles.wrapper}>
        <img src={theme.assets.logo} width="95px" />
      </View>
      <View
        className={styles.info}>
        <View
          className={styles.item}>
          <Emphasis color="hint">
            <Detail>Cat Chappell</Detail>
          </Emphasis>
        </View>

        <View
          className={`${styles.item} ${styles.desktopOnly}`}>
          <Emphasis color="hint">
            <Detail>Prof. Dip Counselling</Detail>
          </Emphasis>
        </View>

        <View
          className={`${styles.item} ${styles.desktopOnly}`}>
          <Emphasis color="hint">
            <Detail>Registered Member MBACP</Detail>
          </Emphasis>
        </View>


        <View
          className={styles.item}>
          <Emphasis color="hint">
            <Detail>Bristol</Detail>
          </Emphasis>
        </View>

      </View>
    </View>
  )
}
