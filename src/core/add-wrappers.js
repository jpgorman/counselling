import {compose} from "ramda"
import {withRouter} from "react-router"

import {pageWrapper, scrollToAnchor, addTracking} from "../components/core"

export function addCoreWrappers(Component) {
  return compose(
    scrollToAnchor,
    pageWrapper,
    addTracking,
    withRouter
  )(Component)
}
