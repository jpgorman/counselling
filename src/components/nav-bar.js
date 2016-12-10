import React, {PropTypes} from "react"
import {NavLink} from "./nav-link"
import {Divider} from "./divider"
import {Flex, Emphasis} from "./core"
import {Regular} from "./typography"
import styles from "./nav-bar.css"

export function NavBar({active, handler}) {
  return (
    <Flex
      flexDirection="row">
      <nav className={`${styles.wrapper} ${active && styles.wrapperActive}`}>
        <Divider>
          <ul role="nav" className={styles.container}>
            <li className={styles.item}>
              <Regular>
                <Emphasis color="detail">
                  <NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink>
                </Emphasis>
              </Regular>
            </li>
            <li className={styles.item}>
              <Regular>
                <Emphasis color="detail">
                  <NavLink to="/about">About</NavLink>
                </Emphasis>
              </Regular>
            </li>
            <li className={styles.item}>
              <Regular>
                <Emphasis color="detail">
                  <NavLink to="/training">Training</NavLink>
                </Emphasis>
              </Regular>
            </li>
            <li className={`${styles.mobileMenuItem}`}>
              <Regular>
                <Emphasis color="detail">
                  <NavLink
                    type="anchor"
                    handler={handler}>Menu</NavLink>
                </Emphasis>
              </Regular>
            </li>
          </ul>
        </Divider>
      </nav>
    </Flex>
  )
}

NavBar.propTypes = {
  active: PropTypes.bool,
  handler: PropTypes.func,
}
