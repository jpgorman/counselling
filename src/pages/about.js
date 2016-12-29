import React, {PropTypes} from "react"
import {Header, Regular, SubHeader, VerticalSpacing, Divider, Slat} from "../components"

export class About extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const {location} = this.props
    let hash = location.hash.replace("#", "")
    if (hash === "what") {
      let node = this.refs.what
      if (this.refs.what) {
        node.scrollIntoView()
      }
    }
  }

  render() {
    return (
      <VerticalSpacing unit={10}>
          <Slat>
            <VerticalSpacing unit={3}>
            <Header>About Me</Header>
            <SubHeader>As a counsellor</SubHeader>
            <Regular>I am an <a target="_blank" href="http://www.counselling-directory.org.uk/integrative-therapy.html">integrative counsellor</a> and I believe that therapy should be tailored to the individual, as no two people are the same and no single approach can be applied to every client.</Regular>
            <Regular>This means that I use a number of different counselling techniques depending on what I feel is best for you as a person and the outcomes you wish for.</Regular>
            <Regular>I am a registered member of the British Association of Counsellors and Psychotherapists and abide by their code of ethics.</Regular>
            <Regular>I am a feminist and am committed to reducing environmental impact where I can; I cycle to all appointments and use a Freephone.</Regular>
            </VerticalSpacing>
          </Slat>
        <Divider />
        <Slat>
          <VerticalSpacing unit={3}>
            <Header>Training and experience</Header>

            <SubHeader>Training</SubHeader>
            <Regular>As well as regular continuing professional development courses taken regularly, I have trained in the following:</Regular>
            <Regular>
              <ul>
                <li>Professional Diploma in Counselling; University of the West of England, 2015 (BACP Accredited)</li>
                <li>Rape and Sexual Abuse professional awareness and support, Sarsas, 2015</li>
                <li>Self Injury professional awareness and assistance, Self Injury Support, 2014</li>
                <li>Trauma and childhood sexual abuse in a therapeutic setting, Southmead Project, 2013</li>
                <li>Addictions in a therapeutic setting, Swan project, 2013</li>
                <li>Certificate in Counselling skills; University of the West of England, 2013</li>
                <li>Domestic Violence; professional awareness and assistance, Women’s Aid, 2011</li>
              </ul>

            </Regular>

            <SubHeader>Experience</SubHeader>
            <Regular>I have trained to be an integrative counsellor specialising in trauma and domestic violence.</Regular>
            <Regular>
              As well as my private practice I work as a sessional counsellor at <a target="_blank" href="http://www.sarsas.org.uk/">Somerset and Avon Rape and Sexual Abuse Service (SARSAS)</a> and have worked on the National Domestic Violence Helpline at <a target="_blank" href="https://www.womensaid.org.uk/">Women’s Aid</a> for four years. I spent 2 years at <a target="_blank" href="http://www.southmeadproject.org.uk/">The Southmead Project</a> as a sessional counsellor for child survivors of sexual abuse and <a target="_blank" href="http://www.theswanproject.co.uk/">The Swan Project</a> for 1.5 years as a counsellor for people with addictions.
            </Regular>
            <Regular>
              I have attended courses on the impact of trauma, abuse, domestic violence, addiction and shame and specialise in seeing clients new to counselling.
            </Regular>

            <SubHeader>Specialisms</SubHeader>
            <Regular>
              <strong>People experiencing:</strong>
              <ul>
                <li>Depression</li>
                <li>Anxiety</li>
                <li>Domestic Violence</li>
                <li>Emotional abuse</li>
                <li>Gaslighting</li>
                <li>Bullying</li>
                <li>Trauma</li>
                <li>Abuse</li>
                <li>Flashbacks</li>
                <li>Feeling lost</li>
                <li>Bullying</li>
                <li>Panic attacks</li>
                <li>Sexual Abuse</li>
                <li>Rape</li>
                <li>Relationship problems</li>
                <li>Social anxiety</li>
                <li>Stress</li>
                <li>Addiction </li>
                <li>Low Self-Confidence</li>
                <li>Low Self-Esteem</li>
                <li>Shame</li>
                <li>Workplace stress - particularly in front line caring roles and the media industry</li>
              </ul>
            </Regular>
            <Regular>
              <strong>Help with</strong>
                <ul>
                  <li>Learning self-care</li>
                  <li>Relaxation techniques</li>
                  <li>Understanding of self</li>
                  <li>Finding inner strength</li>
                  <li>Confidence</li>
                  <li>Healthy coping strategies</li>
                </ul>
            </Regular>


          </VerticalSpacing>
        </Slat>
        <Divider />
        <Slat>
          <VerticalSpacing unit={3}>
            <span ref="what" />
            <Header>What will therapy be like?</Header>
            <Regular>I feel that by being an active and impartial listener during therapy I can help you to understand the source of motivations behind actions and behaviours. We can then work together to help you choose to take different actions with this new understanding.</Regular>
            <Regular>As an Integrative Counsellor, the therapy I provide will help to foster this process by using specific techniques and key concepts drawn in from various approaches that I feel are appropriate to you. I don’t believe there is a ‘one size fits all’ solution.</Regular>
            <Regular><a target="_blank" href="http://www.counselling-directory.org.uk/integrative-therapy.html">More on what Integrative counselling is and how it works.</a></Regular>



            <SubHeader>What to Expect</SubHeader>
            <Regular>If you feel you’d like to work with me, then please get in contact – we can then arrange an appointment to meet for an initial session. This is a good opportunity for us to get a feel for one another, and decide if we would like to start working together.</Regular>
            <Regular>Counselling appointments are typically held weekly at the same day and time for 50 minutes. We can arrange to work short term or open ended and review as we go on.</Regular>



            <SubHeader>Professional membership and responsibility</SubHeader>
            <Regular>I am a registered member of the <a target="_blank" href="http://www.bacp.co.uk/">BACP (British Association of Counselling and Psychotherapy)</a> and abide by their Ethical Framework. I am also a member of <a target="_blank" href="http://www.cappp.co.uk">CAPPP (Counsellors and Psychotherapists in Private Practice)</a> and am fully insured. </Regular>
            <Regular>I will treat you and our work respectfully and confidentially. I attend ongoing professional development and regular clinical supervision in accordance with the BACP guidelines.</Regular>
          </VerticalSpacing>
        </Slat>

      </VerticalSpacing>
    )
  }
}

About.propTypes = {
  location: PropTypes.object,
}
