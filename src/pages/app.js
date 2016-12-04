import React, {PropTypes} from "react"
import {NavBar, Container} from "../components"

export function App(props){
  return (
    <Container>
      <h1>Some Header</h1>
      <NavBar />
      {props.children}
    </Container>
  )
}

App.PropTypes = {
  children: PropTypes.any,
}
