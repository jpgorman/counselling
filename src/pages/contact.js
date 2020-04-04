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
          <Regular>I charge £50 per session (50 minutes)</Regular>
          <Regular>An initial telephone consultation is free.</Regular>

          <SubHeader>Location</SubHeader>
          <Regular>I have a private office on Orchard Street in Central Bristol, BS1.</Regular>
          <Regular>There is a seated waiting area and bathroom to use before and after sessions.</Regular>
        </VerticalSpacing>
      </Slat>
      <Divider />
      <Slat>
        <VerticalSpacing unit={3}>
          <Header>Getting here</Header>
          <SubHeader>By Car</SubHeader>
	  <Regular>There is parking on Orchard Street and the streets nearby with 24/7 charges and can be quite crowded. Alternatively, there is the <PageLink uri="https://www.bristol.gov.uk/parking/trenchard-street-long-stay-car-park">Trenchard Street Carpark</PageLink>.</Regular>

          <SubHeader>By Public Transport</SubHeader>
          <Regular>Most buses in Bristol stop at the city centre – a few minutes walk away. You can plan your journey using the <PageLink uri="http://www.travelinesw.com/swe/XSLT_TRIP_REQUEST2?language=en&timeOffset=15">Traveline Journey Planner</PageLink></Regular>

          <SubHeader>By Bike</SubHeader>
          <Regular>There are also several sheffield stands to lock bikes securely on nearby Unity Street.</Regular>

          <SubHeader>Access</SubHeader>
          <Regular>
          Sadly the venue is not accessible. My office is on the second floor with stairs only access. Toilets are located on the first floor, and are not adapted. If you have other access or other requirements that would be useful for me to know about and make arrangements for, please do get in contact.
	        </Regular>        
    
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.237851805641!2d-2.6007828705605673!3d51.45378929413287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718dd76f07a2f7%3A0x49e0e5a41a165f4!2sOrchard%20St%2C%20Bristol%20BS1%205EH!5e0!3m2!1sen!2suk!4v1585422650873!5m2!1sen!2sukk" width="100%" height="450" frameBorder="0" style={{border:0}} allowFullScreen aria-hidden="false" tabIndex="0"></iframe>            
        </VerticalSpacing>
      </Slat>
    </VerticalSpacing>
  )
}
