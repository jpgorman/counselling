import React, {PropTypes} from "react"

function loadWithUrlHash({location}) {
  const hash = location.hash.replace("#", "")
  const DOMNode = this.refsDictionary.hasOwnProperty(hash) ? this.refsDictionary[hash] : this.top
  if(DOMNode)
    DOMNode.scrollIntoView()
}

export function scrollToAnchor(Component) {

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
