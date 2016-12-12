import React from "react"
import {Header, Regular, SubHeader, VerticalSpacing, Divider, Slat} from "../components"

export function Contact() {
  return (
    <VerticalSpacing unit={10}>
      <Slat>
        <VerticalSpacing unit={3}>
          <Header>Contact</Header>
          <Regular>Sessions by appointment only.
  Appointments made via phone on 07422 972 165 or email <a href="mailto:info@catchappell.co.uk" target="blank">info@catchappell.co.uk</a></Regular>
        </VerticalSpacing>
      </Slat>
      <Divider />
      <Slat>
        <VerticalSpacing unit={3}>
          <Header>Fees & Location</Header>
          <SubHeader>Fees</SubHeader>
          <Regular>I charge £45 per session (50 minutes)</Regular>
          <Regular>An initial telephone consultation is free.</Regular>

          <SubHeader>Location</SubHeader>
          <Regular>I work at <a href="http://ensohealingrooms.com/" target="blank">Enso Healing Rooms</a></Regular>
          <Regular>190 Cheltenham Road</Regular>
          <Regular>Bristol</Regular>
          <Regular>BS6 5RB</Regular>
          <Regular>The practice is based in Bristol on Cheltenham Road between the Gloucester Road and Stokes Croft</Regular>
          <Regular>It offers:</Regular>
          <Regular>Comfortable and spacious rooms.</Regular>
          <Regular>Private Reception area</Regular>
        </VerticalSpacing>
      </Slat>
      <Divider />
      <Slat>
        <VerticalSpacing unit={3}>
          <Header>Getting here</Header>
          <SubHeader>By Car</SubHeader>
          <Regular>Enso Healing Rooms has two of its’ own car parking spaces on Cheltenham Lane. You are welcome to use these if the space is available for customers of Enso Healing Rooms.</Regular>
          <Regular>You can also park on the main road, Cheltenham Road, on any of the single yellow lines between 10am and 4pm  and from 6.30pm onwards for free. Do not park outside of these times as they will remove the vehicle to free the bus lanes. Saturday and Sunday you can park all day for free.</Regular>
          <Regular>Free parking can also be found on Station Road, up from Enso towards to Arches for one hour.</Regular>
          <Regular>Additional parking can be found on roads opposite Enso Healing Rooms on Brookfield Road and Winsley road, which is £1 to park for an hour.</Regular>


          <SubHeader>By Public Transport</SubHeader>
          <Regular>The buses no’s 70,71,72,75 and 76 all stop almost outside the location – you can plan your journey using the <a href="http://www.travelinesw.com/swe/XSLT_TRIP_REQUEST2?language=en&timeOffset=15" target="blank">Traveline Journey Planner</a></Regular>

          <SubHeader>By Bike</SubHeader>
          <Regular>There are also several sheffield stands to lock bikes securely both at the front and the back of the location.</Regular>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d458.8237752006826!2d-2.5922093945991564!3d51.46809839203094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe5fc6043a088a902!2sEnso+Martial+Arts+Shop!5e0!3m2!1sen!2suk!4v1481490457089" width="100%" height="450" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
        </VerticalSpacing>
      </Slat>
    </VerticalSpacing>
  )
}
