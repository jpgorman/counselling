import React from "react"
import theme from "theme"
import styles from "./banner.css"
import {Regular} from "./typography"
import {View, Flex, Emphasis} from "./core"

export function Banner() {
  return (
    <View>
      <View className={styles.wrapper}>
        <img src={theme.assets.logo} width="95px" />
      </View>
      <Flex
        flexDirection="row"
        justifyContent="space-between">
        <Emphasis color="hint">
          <Regular>Foo</Regular>
        </Emphasis>

        <Emphasis color="hint">
          <Regular>Bar</Regular>
        </Emphasis>

        <Emphasis color="hint">
          <Regular>Baz</Regular>
        </Emphasis>
      </Flex>
    </View>
  )
}
