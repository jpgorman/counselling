import React from "react"
import { Link } from "react-router"
import styles from "./nav-link.css"

export function NavLink(props){
  return (<Link className={styles.wrapper} {...props} activeClassName={styles.active} />)
}
