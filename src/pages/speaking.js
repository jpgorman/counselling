import React, {PropTypes} from "react"
import theme from "theme"
import {Header, Regular, SubHeader, Divider, VerticalSpacing, Slat, Image, PageLink} from "../components"

export class Speaking extends React.Component {

  render() {
    return (
      <VerticalSpacing unit={10}>
          <Slat>
            <VerticalSpacing unit={3}>
            <Header>Speaking</Header>
            <Image src={`/${theme.assets.catSpeaking}`} />
            <Regular>I can be hired to speak about the following topics: </Regular>
            <ul>
              <li>Counselling survivors of Rape and Sexual Violence</li>
              <li>Counselling survivors of Domestic Violence</li>
              <li>Working appropriately with trauma</li>
              <li>Starting up as a therapist in Private Practice</li>
              <li>Feminism within counselling</li>
              <li>Realistic self-care on a budget</li>
              <li>Health at every size – working with clients in a weight-neutral manner</li>
            </ul>

            <Regular>Please contact me to discuss <PageLink to="/contact">booking and rates</PageLink></Regular>
            </VerticalSpacing>
        </Slat>
        <Divider />
        <Slat>
            <VerticalSpacing unit={3}>
          <SubHeader>Upcoming:</SubHeader>
          <Regular>20th Feb 2021</Regular>
          <Regular><strong>Starting up in Private Practice</strong> - Taunton Association of Psychotherapy</Regular>
          <SubHeader>Previous:</SubHeader>
          <Regular>November 2019</Regular>
          <Regular><strong>The importance of specialist rape and sexual abuse counselling</strong> – SARSAS (Somerset and Avon Rape and Sexual Abuse Service)</Regular>
          <Regular>November 2018</Regular>
          <Regular><strong>Feminism in counselling</strong> – Women&#39;s aid conference</Regular>
            </VerticalSpacing>

        </Slat>

      </VerticalSpacing>
    )
  }
}

Speaking.propTypes = {
  location: PropTypes.object,
  registerRef: PropTypes.func,
}
