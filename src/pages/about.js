
import React, {PropTypes} from "react"
import theme from "theme"
import {Header, Regular, SubHeader, VerticalSpacing, Divider, Slat, Image, PageLink} from "../components"

export class About extends React.Component {

  render() {
    return (
      <VerticalSpacing unit={10}>
          <Slat>
            <VerticalSpacing unit={3}>
            <Header>About Me</Header>
            <Image src={`/${theme.assets.outdoorShot}`} />
            <SubHeader>As a counsellor</SubHeader>
            <Regular>I am an <PageLink uri="http://www.counselling-directory.org.uk/integrative-therapy.html">integrative counsellor</PageLink>. This means that I use a number of different counselling techniques depending on what I feel is best for you as a person and the outcomes you wish for.</Regular>
            <Regular>I believe that therapy should be tailored to the individual, as no two people are the same and no single approach can be applied to every person.</Regular>
            <Regular>I am an accredited, member of the British Association of Counsellors and Psychotherapists and abide by their code of ethics. I encourage body neutrality and am a HAES (Health at Every Size) practitioner.</Regular>
            <Regular>I am an intersectional feminist and am committed to reducing environmental impact where I can; I also cycle to all appointments.</Regular>
            </VerticalSpacing>
          </Slat>
        <Divider />

        <Slat>
          <VerticalSpacing unit={3}>
            <Header>Specialisms</Header>

            <SubHeader>People experiencing:</SubHeader>
            <Regular>
              <ul>
                <li>Depression, sadness and low mood</li>
                <li>Anxiety, overthinking, fears and phobias</li>
                <li>Domestic violence</li>
                <li>Emotional abuse and gaslighting</li>
                <li>Bullying</li>
                <li>Trauma and abuse</li>
                <li>Flashbacks</li>
                <li>Feeling lost</li>
                <li>Panic attacks</li>
                <li>Rape and sexual abuse</li>
                <li>Relationship problems</li>
                <li>Stress</li>
                <li>Self-Harm</li>
                <li>Addiction, recovery and relapse</li>
                <li>Confidence issues and low self-esteem</li>
                <li>Shame</li>
                <li>Workplace stress - particularly in front line caring roles and the media industry</li>
                <li>Body and image issues</li>
              </ul>
            </Regular>
            <SubHeader>Help with:</SubHeader>
            <Regular>
                <ul>
                  <li>Understanding of self</li>
                  <li>Finding inner strength</li>
                  <li>Learning self-care</li>
                  <li>Relaxation techniques</li>
                  <li>Confidence</li>
                  <li>Healthy coping strategies</li>
                  <li>Finding calm</li>
                  <li>Feeling comfortable in your own skin</li>
                </ul>
            </Regular>
          </VerticalSpacing>
        </Slat>
        <Divider />

        <Slat>
          <VerticalSpacing unit={3}>
            <Header>Training and experience</Header>

            <SubHeader>Training</SubHeader>
            <Regular>I have trained to be an integrative counsellor specialising in trauma and domestic violence. I attained professional accreditation from the BACP in 2019. As well as regular continuing professional development, I have trained in the following:</Regular>
            <Regular>
              <ul>
                <li>Professional Diploma in Counselling; University of the West of England, 2015 (BACP Accredited)</li>
                <li>Rape and Sexual Abuse professional awareness and support, Sarsas, 2015</li>
                <li>Self injury professional awareness and assistance, Self Injury Support, 2014</li>
                <li>Trauma and childhood sexual abuse in a therapeutic setting, Southmead Project, 2013</li>
                <li>Addictions in a therapeutic setting, Swan project, 2013</li>
                <li>Certificate in Counselling skills; University of the West of England, 2013</li>
                <li>Domestic Violence; professional awareness and assistance, Women’s Aid, 2011</li>
              </ul>

            </Regular>

            <SubHeader>Experience</SubHeader>
            <Regular>
              As well as my private counselling practice, I work as a sessional counsellor at <PageLink uri="http://www.sarsas.org.uk/">Somerset and Avon Rape and Sexual Abuse Service (SARSAS)</PageLink> and have worked on the National Domestic Violence Helpline at <PageLink uri="https://www.womensaid.org.uk/">Women’s Aid</PageLink> since 2011.
            </Regular>
            <Regular> I spent 2 years at <PageLink uri="http://www.southmeadproject.org.uk/">The Southmead Project</PageLink> as a counsellor for adult survivors of childhood sexual abuse and <PageLink uri="http://www.theswanproject.co.uk/">The Swan Project</PageLink> for 1.5 years as a counsellor for people with addictions.
            </Regular>
            <Regular>
              I have attended courses on the impact of trauma, abuse, domestic violence, addiction and shame and specialise in seeing clients new to counselling.
            </Regular>


          </VerticalSpacing>
        </Slat>

      </VerticalSpacing>
    )
  }
}

About.propTypes = {
  location: PropTypes.object,
  registerRef: PropTypes.func,
}
