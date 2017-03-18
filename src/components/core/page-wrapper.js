import React from "react"
import {PageHeader, PageFooter, Container} from ".."

export function pageWrapper(Component) {
  return class Page extends React.Component {

    constructor(props) {
      super(props)
    }

    render() {
      return(
        <Container>
          <PageHeader />
          <Component {...this.props} />
          <PageFooter />
        </Container>
      )
    }
  }
}
