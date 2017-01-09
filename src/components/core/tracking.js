import React, {PropTypes} from "react"
export function withTracking(Component) {

  return class Tracking extends React.Component {

    static get propTypes() {
      return {
        children: PropTypes.any,
        route: PropTypes.object,
      }
    }

    constructor(props) {
      super(props)
    }

    componentDidMount() {
      window.ga("set", "page", this.props.route.path)
      window.ga("send", "pageview")
    }

    render() {
      return (<Component {...this.props} />)
    }

  }

}
