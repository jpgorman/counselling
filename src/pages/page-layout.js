import React, {PropTypes} from "react"
import {Header, VerticalSpacing, Divider, Slat} from "../components"

export function PageLayout({title, banner, children}) {
  return (
    <VerticalSpacing unit={10}>
        <Slat>
          <VerticalSpacing unit={3}>
            {title && <Header>{title}</Header>}
            {banner}
          </VerticalSpacing>
        </Slat>
        <Divider />
        {children}
    </VerticalSpacing>
  )
}

PageLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
}
