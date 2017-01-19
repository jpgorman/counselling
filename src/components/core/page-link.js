import React, {PropTypes} from "react"
import styles from "./page-link.css"

export function PageLink({uri, children}) {
  return (
    <a
      target="_blank"
      href={uri}
      className={styles.container}>
      {children}
    </a>
  )
}

PageLink.propTypes = {
  uri: PropTypes.string.isRequired,
  children: PropTypes.any,
}
