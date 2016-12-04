import React, {PropTypes} from "react"
import normalizeStyles from "react-style-normalizer"

export class View extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const {style, children, ...rest} = this.props

    return (
      <div
        {...rest}
        style={normalizeStyles(style)}
      >
        {children}
      </div>
    )
  }
}

View.PropTypes = {
  style: PropTypes.object,
  children: PropTypes.any,
}
