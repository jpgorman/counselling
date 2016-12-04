import React from "react"
import {NavLink} from "./nav-link"
import {Divider} from "./divider"
import {Flex, Emphasis, View} from "./core"
import {Regular} from "./typography"
import styles from "./nav-bar.css"

export function NavBar() {
  return (
    <Flex
      flexDirection="row">
      <nav className={styles.wrapper}>
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
          </ul>
        </Divider>
      </nav>
    </Flex>
  )
}
