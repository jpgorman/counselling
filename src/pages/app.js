import React from "react"
import {NavLink} from "../components"

export function App(props){
    return (
      <div>
        <h1>Some Header</h1>
        <ul role="nav">
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/training">Training</NavLink></li>
        </ul>
        {props.children}
      </div>
    )
}
