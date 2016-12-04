import React from "react"
import {NavLink} from "./nav-link"

export function NavBar() {
  return (
    <ul role="nav">
      <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/training">Training</NavLink></li>
    </ul>
  )
}
