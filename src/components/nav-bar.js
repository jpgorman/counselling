import React, {PropTypes} from "react"
import {NavLink} from "./nav-link"
import {Divider} from "./divider"
import {Flex, Emphasis, Overlay} from "./core"
import {Detail} from "./typography"
import styles from "./nav-bar.css"
import {menuSpec} from "./menu-spec"
import {reduce, keys} from "ramda"


function buildMenuFromSpec(spec,handler) {
  return reduce((accum, key) => {
    const item = spec[key]
    const routeIndexOnlyProps = item.route === "/"
      ? {onlyActiveOnIndex: true}
      : null

    accum.push(
      <li key={item.label} className={styles.item}>
        <Detail>
          <Emphasis color="detail">
            <NavLink
              handler={handler}
              to={item.route}
              {...routeIndexOnlyProps}>
                {item.label}
            </NavLink>
          </Emphasis>
        </Detail>
      </li>
    )
    return accum
  }, [], keys(spec))
}

export function NavBar({active, handler}) {

  const overlay = active
    ? <Overlay handler={handler} />
    : null

  return (
    <Flex
      flexDirection="row">
      {overlay}
      <nav className={`${styles.wrapper} ${active && styles.wrapperActive}`}>
        <Divider>
          <ul role="nav" className={styles.container}>
            {buildMenuFromSpec(menuSpec, handler)}
            <li className={`${styles.mobileMenuItem}`}>
              <Detail>
                <Emphasis color="detail">
                  <NavLink
                    type="anchor"
                    handler={handler}>Menu</NavLink>
                </Emphasis>
              </Detail>
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
