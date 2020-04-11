import React, {PropTypes} from "react"
import {View} from "../"
import styles from "./vertical-spacing.css"
import theme from "theme"
import postCssFunctions from "../../../resources/postcss-functions"
const {baseunits} = postCssFunctions(theme)

function addSpacerAfterEach(children, unit) {
  return React.Children.map(children, (child) => {
    return child != null && <View key={"spaceAfter"} style={{marginBottom: unit}}>{child}</View>
  })
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
