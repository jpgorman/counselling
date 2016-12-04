import React, {PropTypes} from "react"
import {NavBar, Container, Banner} from "../components"

export function App(props){
  return (
    <Container>
      <Banner />
      <NavBar />
      {props.children}
    </Container>
  )
}

App.PropTypes = {
  children: PropTypes.any,
}
