import React, {PropTypes} from "react"
import {map, addIndex} from "ramda"
import {View} from "../"
import styles from "./vertical-spacing.css"
import theme from "theme"
import postCssFunctions from "../../../resources/postcss-functions"
const {baseunits} = postCssFunctions(theme)

function addSpacerAfterEach(children, unit) {
  return addIndex(map)((child, index) => <View key={`${index}-spaceAfter`} style={{marginBottom: unit}}>{child}</View>
  , children)
}

export function VerticalSpacing({children, unit}) {
  return (
    <View className={styles.wrapper}>
      {addSpacerAfterEach(children, baseunits(unit))}
    </View>
  )
}

VerticalSpacing.propTypes = {
  children: PropTypes.any,
  unit: PropTypes.number,
}

VerticalSpacing.defaultProps = {
  unit: 1,
}
