import React from "react"
import {Header, Regular, SubHeader, VerticalSpacing, Divider} from "../components"

export function About() {
  return (
    <VerticalSpacing unit={10}>
      <VerticalSpacing unit={3}>
        <Header>About Me</Header>
        <SubHeader>As a therapist</SubHeader>
        <Regular>I am an integrative counsellor and I believe that therapy should be tailored to the individual, as no two people are the same and no single approach can be applied to every client.</Regular>
        <Regular>This means that I use a number of different counselling techniques depending on what I feel is best for you as a person and the outcomes you wish for.</Regular>
        <Regular>I am a registered member of the British Association of Counsellors and Psychotherapists and abide by their code of ethics.</Regular>

        <SubHeader>Values</SubHeader>
        <Regular>I am a feminist and am committed to reducing environmental impact where I can; I cycle to all appointments and use a Freephone.</Regular>
      </VerticalSpacing>
      <Divider />
      <VerticalSpacing unit={3}>
        <Header>Training and experience</Header>

        <SubHeader>Training</SubHeader>
        <Regular>Professional Diploma in Counselling; University of the West of England, 2015 (BACP Accredited)</Regular>
        <Regular>Certificate in Counselling skills; University of the West of England, 2013</Regular>

        <SubHeader>Experience</SubHeader>
        <Regular>I have trained to be an integrative counsellor specialising in trauma and domestic violence.</Regular>
        <Regular>
          As well as my private practice I work as a sessional counsellor at Somerset and Avon Rape and Sexual Abuse Service (SARSAS) and have worked on the National Domestic Violence Helpline at Women’s Aid for four years. I spent 2 years at The Southmead Project as a sessional counsellor for child survivors of sexual abuse and The Swan Project for two years as a counsellor for people with addictions.
        </Regular>
        <Regular>
          I am trained in the impact of trauma, abuse, domestic violence, addiction and shame and specialise in seeing clients new to counselling.
        </Regular>

        <SubHeader>Specialisms</SubHeader>
        <Regular>
          Domestic Violence,
          Trauma,
          Abuse,
          Bullying,
          Depression,
          Anxiety,
          Panic attacks.
        </Regular>
      </VerticalSpacing>
      <Divider />
      <VerticalSpacing unit={3}>
        <Header>What will therapy be like?</Header>
        <Regular>I feel that by being an active and impartial listener during therapy I can help you to understand the source of motivations behind actions and behaviours. We can then work together to help you choose to take different actions with this new understanding.</Regular>
        <Regular>As an Integrative Counsellor, the therapy I provide will help to foster this process by using specific techniques and key concepts drawn in from various approaches that I feel are appropriate to you. I don’t believe there is a ‘one size fits all’ solution.</Regular>
        <Regular>More on Integrative counselling can be found here: http://www.counselling-directory.org.uk/integrative-therapy.html </Regular>



        <SubHeader>What to Expect</SubHeader>
        <Regular>If you feel you’d like to work with me, then please get in contact – we can then arrange an appointment to meet for an initial session. This is a good opportunity for us to get a feel for one another, and decide if we would like to start working together.</Regular>
        <Regular>Counselling appointments are typically held weekly at the same day and time for 50 minutes. We can arrange to work short term or open ended and review as we go on.</Regular>



        <SubHeader>Professional membership and responsibility</SubHeader>
        <Regular>I am a registered member of the BACP (British Association of Counselling and Psychotherapy) and abide by their Ethical Framework. I am also a member of CAPPP (Counsellors and Psychotherapists in Private Practice) and am fully insured. </Regular>
        <Regular>I will treat you and our work respectfully and confidentially. I attend ongoing professional development and regular clinical supervision in accordance with the BACP guidelines.</Regular>
      </VerticalSpacing>

    </VerticalSpacing>
  )
}
