import React, {PropTypes} from "react"
export function addTracking(Component) {

  return class Tracking extends React.Component {

    static get propTypes() {
      return {
        children: PropTypes.any,
        location: PropTypes.object,
      }
    }

    constructor(props) {
      super(props)
    }

    componentDidMount() {
      window.ga("set", "page", this.props.location.pathname)
      window.ga("send", "pageview")
    }

    render() {
      return (<Component {...this.props} />)
    }

  }

}
