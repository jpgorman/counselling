import React, {PropTypes} from "react"
import theme from "theme"
import {Header, Regular, SubHeader, VerticalSpacing, Slat, Image, PageLink} from "../components"

export class Counselling extends React.Component {

  render() {
    return (
      <VerticalSpacing unit={10}>
          <Slat>
            <VerticalSpacing unit={3}>
            <Header>What will counselling be like?</Header>
            <Image src={`/${theme.assets.roomShot}`} />
            <Regular>By being an active and impartial listener during counselling, I can help you to understand the source of motivations behind actions and behaviours. We can then work together to help you choose to take different actions with this new understanding.</Regular>
            <Regular>As an Integrative counsellor, the counselling I provide will help to encourage this process by using specific techniques and key concepts drawn in from various approaches that I feel are appropriate to you. I don’t believe there is a ‘one size fits all’ solution.</Regular>
            <Regular><PageLink uri="http://www.counselling-directory.org.uk/integrative-therapy.html">More on what Integrative counselling is and how it works.</PageLink></Regular>



            <SubHeader>What to Expect</SubHeader>
            <Regular>If you feel you’d like to work with me, then please get in contact – We can arrange a telephone consultation free of charge, and if agreed, an initial face-to-face appointment. This is a good opportunity for you to decide if you think we can work together.</Regular>
            <Regular>Counselling appointments are typically held weekly at the same day and time for 50 minutes. We can arrange to work short term or open ended and review as we go on.</Regular>



            <SubHeader>Professional membership and responsibility</SubHeader>
            <Regular>I am a registered member of the <PageLink uri="http://www.bacp.co.uk/">BACP (British Association of Counselling and Psychotherapy)</PageLink> and abide by their Ethical Framework. I am also a member of <PageLink uri="http://www.cappp.co.uk">CAPPP (Counsellors and Psychotherapists in Private Practice)</PageLink> and am fully insured. </Regular>
            <Regular>I will treat you and our work respectfully and confidentially. I attend ongoing professional development and regular clinical supervision in accordance with the BACP guidelines.</Regular>

          </VerticalSpacing>
        </Slat>

      </VerticalSpacing>
    )
  }
}

Counselling.propTypes = {
  location: PropTypes.object,
  registerRef: PropTypes.func,
}
