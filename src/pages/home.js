import React from "react"
import { Link } from "react-router"
import {Header, Regular, VerticalSpacing, Slat} from "../components"

export function Home() {
  return (
    <VerticalSpacing unit={10}>
      <Slat>
        <VerticalSpacing unit={3}>
          <Regular>If you feel lost, have feelings of anxiety, sadness or depression or have a sense that something isn’t right but you don’t know what, perhaps talking about it in a safe and confidential environment is for you.</Regular>
          <Regular>Whether you&#39;re having difficulties enjoying life, suffer from regular negative or intrusive thoughts, are prone to feeling down and depressed, have in the past or are currently experiencing bullying, abuse, sexual or domestic violence, I can offer a safe space to explore these feelings and work with you to understand yourself and make changes happen.</Regular>
          <Regular>I believe that all of our actions and behaviour have a reason, and with therapy I can help you to understand those motivations and choose to take different actions with understanding and compassion for your processes and yourself.</Regular>
          <Regular>If you&#39;d like to find out more about what I can offer, you can read more <Link to="/about">about me here</Link>, read about the <Link to="/about#what">types of therapy I offer</Link> here or <Link to="/contact">Contact me</Link></Regular>
        </VerticalSpacing>
      </Slat>
    </VerticalSpacing>
  )
}
