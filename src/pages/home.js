import React from "react"
import theme from "theme"
import {Regular, VerticalSpacing, Header, Slat, Image, PageLink, Divider} from "../components"

export function Home() {
  return (
    <VerticalSpacing unit={10}>
      <Slat>
        <VerticalSpacing unit={3}>
          <Image src={`/${theme.assets.headShot}`} />
        </VerticalSpacing>
      </Slat>
      <Divider />
      <Slat>
        <VerticalSpacing unit={3}>
          <Header>Coronavirus (COVID-19)</Header>
          <Regular>At this time I am working only online and via telephone with clients
until it is safe to resume face to face sessions.</Regular>
        </VerticalSpacing>
      </Slat>
      <Divider />
      <Slat>
        <VerticalSpacing unit={3}>
          <Regular>IIf you are feeling lost, anxious, sad, depressed, or have a sense that something isn&#39;t right and you aren&#39;t sure why, perhaps talking about it in a safe and confidential environment is for you.</Regular>
          <Regular>You may be having difficulties enjoying life, suffering from regular negative or intrusive thoughts, are prone to feeling down and depressed or have cycles of feeling up and down. Perhaps you are or have been bullied, or received emotional or physical abuse from a person close to you.</Regular>
          <Regular>Whatever has or is happening, I can offer a safe space to explore these feelings and work with you to understand yourself and make change happen.</Regular>
          <Regular>I believe that all of our actions and behaviour have reasons behind them that are often initially unseen, and that counselling can help you to locate and understand them so you can choose to take different actions with compassion for yourself.</Regular>
          <Regular>If you&#39;d like to find out more about what I can offer, you can read more <PageLink to="/about">about me here</PageLink>, read about the <PageLink to="/counselling">types of counselling I offer</PageLink> here or <PageLink to="/contact">Contact me</PageLink></Regular>
        </VerticalSpacing>
      </Slat>
      <Divider />
    </VerticalSpacing>
  )
}
