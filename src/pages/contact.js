import React from "react"
import {Header, Regular, SubHeader, VerticalSpacing, Divider, Slat, PageLink} from "../components"

export function Contact() {
  return (
    <VerticalSpacing unit={10}>
      <Slat>
        <VerticalSpacing unit={3}>
          <Header>Contact</Header>
          <Regular> Appointments made via phone on 07422 972 165 or email <PageLink uri="mailto:info@catchappell.co.uk">info@catchappell.co.uk</PageLink></Regular>
        </VerticalSpacing>
      </Slat>
      <Divider />
      <Slat>
        <VerticalSpacing unit={3}>
          <Header>Fees & Location</Header>
          <SubHeader>Fees</SubHeader>
          <Regular>I charge £48 per session (50 minutes)</Regular>
          <Regular>An initial telephone consultation is free.</Regular>

          <SubHeader>Location</SubHeader>
          <Regular>I work at <PageLink uri="http://ensohealingrooms.com/">Enso Healing Rooms</PageLink> and <PageLink uri="http://thearchestherapyrooms.co.uk">Arches Therapy Rooms</PageLink></Regular>
          <Regular>Both rooms are based in Bristol on Cheltenham Road between the Gloucester Road and Stokes Croft.</Regular>
	  <Regular>They also both have seated waiting areas to use before sessions.</Regular>
        </VerticalSpacing>
      </Slat>
      <Divider />
      <Slat>
        <VerticalSpacing unit={3}>
          <Header>Getting here</Header>
          <SubHeader>By Car</SubHeader>
	  <Regular>Both rooms have access to parking spaces and are there are public parking spaces near to both locations.</Regular>

          <SubHeader>By Public Transport</SubHeader>
          <Regular>The buses 70,71,72,75 and 76 all stop almost outside of both locations – you can plan your journey using the <PageLink uri="http://www.travelinesw.com/swe/XSLT_TRIP_REQUEST2?language=en&timeOffset=15">Traveline Journey Planner</PageLink></Regular>

          <SubHeader>By Bike</SubHeader>
          <Regular>There are also several sheffield stands to lock bikes securely both at the front and the back of both locations.</Regular>

          <SubHeader>Access</SubHeader>
          <Regular>
	  	Both venues are on the ground floor with a minimum of one step to access the counselling room. Toilets are also located on the ground floor, but are not adapted. Sadly neither venue has door clearance needed for wheelchairs. If you have access or other requirements that would be useful for me to know about and make arrangements for, please do get in contact.
	  </Regular>                    
	  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d621.3630436475393!2d-2.5924658725696013!3d51.468213921388816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718e0b78072dcd%3A0xe301213423636638!2sEnso+Healing+Rooms!5e0!3m2!1sen!2suk!4v1483036529293" width="100%" height="450" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
        </VerticalSpacing>
      </Slat>
    </VerticalSpacing>
  )
}
