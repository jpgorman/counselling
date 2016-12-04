import React, {PropTypes} from "react"
import {pick, keys} from "ramda"
import {View} from "./view"
import styles from "./flex.css"

const styleProps = {
  automationId: PropTypes.string,
  flexShrink: PropTypes.any,
  flexGrow: PropTypes.number,
  flexDirection: PropTypes.string,
  flexBasis: PropTypes.any,
  flexWrap: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  margin: PropTypes.any,
  marginLeft: PropTypes.any,
  marginRight: PropTypes.any,
  marginTop: PropTypes.any,
  marginBottom: PropTypes.any,
}

export class Flex extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const newProps = {
      style: {...pick(keys(styleProps), this.props)},
    }

    return (
      <View
        {...newProps}
        className={`${styles.wrapper} ${this.props.className || ""}`}>
        {this.props.children}
      </View>
    )
  }
}

Flex.propTypes = {
  className: PropTypes.string,
  automationId: PropTypes.string,
  children: PropTypes.node,
  flexGrow: PropTypes.number,
  onClick: PropTypes.func,
  ...styleProps,
}

Flex.defaultProps = {
  // defaults taken from https://github.com/facebook/css-layout
  position: "relative",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "flex-start",
  flexShrink: 0,
  flexGrow: 1,
}
