import * as React from 'react'

export const Map = ({src}) => (
  <section data-field="map">
  <iframe src={src} 
    width="100%" 
    height="450" 
    frameBorder="0" 
    style={{border:0}} 
    allowFullScreen 
    aria-hidden="false" 
    tabIndex="0">
  </iframe>
  </section>
)
