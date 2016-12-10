import React, {PropTypes} from "react"
import {NavBar, Container, Banner} from "../components"

export class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      activeMenu: false,
    }
    this.setMenuActive = this.setMenuActive.bind(this)
  }

  setMenuActive() {
    this.setState({
      activeMenu: !this.state.activeMenu,
    })
  }

  render() {

    const {activeMenu} = this.state

    return (
      <Container>
        <Banner />
        <NavBar
          active={activeMenu}
          handler={this.setMenuActive} />
        {this.props.children}
      </Container>
    )
  }
}

App.propTypes = {
  children: PropTypes.any,
}
