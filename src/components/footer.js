import React from "react"
import theme from "theme"
import styles from "./footer.css"
import {Detail} from "./typography"
import {View, Emphasis} from "./core"

export function PageFooter() {
  return (
    <View className={styles.container}>
      <View
        className={styles.info}>

        <View
          className={`${styles.item} ${styles.desktopOnly}`}>
          <Emphasis color="hint">
            <Detail>Prof. Dip Counselling</Detail>
          </Emphasis>
        </View>

        <View
          className={`${styles.item}`}>
          <Emphasis color="hint">
            <img src={`/${theme.assets.psa}`} width="200px" />
          </Emphasis>
        </View>


        <View
          className={`${styles.item} ${styles.desktopOnly}`}>
          <Emphasis color="hint">
            <Detail>Registered Member MBACP</Detail>
          </Emphasis>
        </View>

      </View>
    </View>
  )
}
