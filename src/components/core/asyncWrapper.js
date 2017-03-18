import React, {PropTypes} from "react"
import {Detail, Flex, View} from ".."
import styles from "./asyncWrapper.css"

function renderContent(content) {
  return (
    <Flex
      alignItems="center"
      justifyContent="center">
      <View className={styles.wrapper}>
        <Detail>{content}</Detail>
      </View>
    </Flex>
  )
}

function Wrapper({isFetching, error, children}) {
  const content = error ? "Ooops something went wrong!" : "Loading..."
  return isFetching || error ? renderContent(content) : children
}

Wrapper.propTypes = {
  isFetching: PropTypes.bool,
  children: PropTypes.any,
}

export function asyncWrapper(Component) {
  return class AsyncWrapper extends React.Component {
    render() {
      return (
        <Wrapper {...this.props}>
          <Component {...this.props} />
        </Wrapper>
      )
    }
  }
}
