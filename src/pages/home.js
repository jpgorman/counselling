import React from "react"
import theme from "theme"
import {Regular, VerticalSpacing, Slat, Image, PageLink} from "../components"

export function Home() {
  return (
    <VerticalSpacing unit={10}>
      <Slat>
        <VerticalSpacing unit={3}>
          <Image src={`/${theme.assets.headShot}`} />
          <Regular>If you feel lost, have feelings of anxiety, sadness or depression or have a sense that something isn’t right but you don’t know what, perhaps talking about it in a safe and confidential environment is for you.</Regular>
          <Regular>Whether you&#39;re having difficulties enjoying life, suffer from regular negative or intrusive thoughts, are prone to feeling down and depressed, have in the past or are currently experiencing bullying, abuse, sexual or domestic violence, I can offer a safe space to explore these feelings and work with you to understand yourself and make changes happen.</Regular>
          <Regular>I believe that all of our actions and behaviour have a reason, and with therapy I can help you to understand those motivations and choose to take different actions with understanding and compassion for your processes and yourself.</Regular>
          <Regular>If you&#39;d like to find out more about what I can offer, you can read more <PageLink to="/about">about me here</PageLink>, read about the <PageLink to="/counselling">types of counselling I offer</PageLink> here or <PageLink to="/contact">Contact me</PageLink></Regular>
        </VerticalSpacing>
      </Slat>
    </VerticalSpacing>
  )
}
