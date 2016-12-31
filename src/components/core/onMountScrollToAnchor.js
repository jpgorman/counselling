import React, {PropTypes} from "react"

function loadWithUrlHash({location}) {
  const DOMNode = this.refsDictionary[location.hash.replace("#", "")] || this.top
  if(DOMNode)
    DOMNode.scrollIntoView()
}

export function onMountScrollToAnchor(Component) {

  return class WrapComponentWithScrollToAnchor extends React.Component {

    static get propTypes() {
      return {
        location: PropTypes.object,
      }
    }

    constructor(props) {
      super(props)
      this.loadWithUrlHash = loadWithUrlHash.bind(this)
      this.registerRef = this.registerRef.bind(this)
      this.refsDictionary = {}
    }

    componentDidMount() {
      this.loadWithUrlHash(this.props)
    }

    registerRef(name, ref) {
      if(!this.refsDictionary[name])
        this.refsDictionary[name] = ref
    }

    render() {
      return (
        <span>
          <span ref={top => this.top = top} />
          <Component registerRef={this.registerRef} {...this.props} />
        </span>
      )
    }

  }

}
