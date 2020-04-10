import React, {PropTypes} from "react"
import {Header, VerticalSpacing, Divider, Slat} from "../components"

export function Layout({title, children}) {
  return (
    <VerticalSpacing unit={10}>
        <Slat>
          <VerticalSpacing unit={3}>
            <Header>{title}</Header>
          </VerticalSpacing>
          {children}
        </Slat>
      <Divider />
    </VerticalSpacing>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
}
