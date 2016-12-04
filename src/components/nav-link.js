import React from "react"
import { Link } from "react-router"

export function NavLink(props){
    return <Link {...props} activeClassName="active"/>
}
