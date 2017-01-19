import React, {PropTypes} from "react"
import { Link } from "react-router"
import styles from "./page-link.css"

export function PageLink({uri, to, children}) {
  const target = !to ? "_blank": ""
  return (
    <Link
      to={to}
      target={target}
      href={uri}
      className={styles.container}>
      {children}
    </Link>
  )
}

PageLink.propTypes = {
  to: PropTypes.string,
  uri: PropTypes.string,
  children: PropTypes.any,
}
