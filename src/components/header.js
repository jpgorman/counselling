import React, {PropTypes} from "react"
import {NavBar, Banner} from "../components"

export class PageHeader extends React.Component {

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
      <span>
        <Banner />
        <NavBar
          active={activeMenu}
          handler={this.setMenuActive} />
      </span>
    )
  }
}

PageHeader.propTypes = {
  children: PropTypes.any,
}
