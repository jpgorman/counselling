
import React, {PropTypes} from "react"
import { connect } from "react-redux"
import theme from "theme"
import {Header, Regular, Detail, SubHeader, VerticalSpacing, Divider, Slat, Image, PageLink} from "../components"

const mapStateToProps = ({posts}) => {
  return {
    posts: posts.entities,
    isFetching: posts.isFetching,
  }
}

class Blog extends React.Component {

  render() {
    // const {posts} = this.props
    return (
      <VerticalSpacing unit={10}>
          <Slat>
            <VerticalSpacing unit={3}>
            <Header>Blog</Header>
            <Image src={`/${theme.assets.blog1}`} />
            <Detail>8th March 2017</Detail>
            <SubHeader>Integrating feminism into counsellingr</SubHeader>
            <Regular>I am an integrative counsellor. This means that I integrate different elements of counselling theory and practice with clients depending on who they are and what they need. I work this was as I feel there is no ‘one size fits all’ model of counselling.</Regular>
            <Regular>Something that I often integrate into my practice, is feminism. I feel this is important as patriarchal values are still very present in our lives, and are becoming ever more prevalent in 2017. Therefore I feel it is important to acknowledge this within my counselling practice.</Regular>
            <Regular>To acknowledge feminism is to acknowledge that women, because they are women, are treated differently than men, and therefore women are at a disadvantage in the world.</Regular>
            <Regular>For example, when I work with women who have experienced domestic violence, rape or sexual abuse, it is important to also acknowledge the gendered nature of these crimes, and the injustices that women can face as a result. This can include the public, media and frontline services victim blaming or excusing the perpetrator’s behaviour.</Regular>
            <Regular>Things have improved over the years and a lot of services are doing better at working with survivors of abuse; but not all are and there is much room for improvement. The prosecution rates for rape and domestic abuse are still at very low levels and the sentences given when a conviction is made can often be very short. </Regular>
            <Regular>Acknowledging <PageLink uri="https://en.oxforddictionaries.com/definition/intersectionality">intersectionality</PageLink> is also essential as it can further reduce a person's chance of being believed and receiving the treatment that they deserve.</Regular>
            <Regular>Integrating acknowledgment that these imbalances and biases occur within the world when in the counselling process can help to give further context to a person’s process.</Regular>
            <Regular>Another factor is the contradictory messages that women are given on how they are ‘supposed’ to look. They are not allowed to be too fat or too thin, wear too much or too little clothing and makeup. They are continually told that their appearance and conduct influences men’s behaviour towards them.  Typical examples include schools banning girls from wearing short skirts, in the belief that they will ‘distract’ men and boys, or women’s outfits being blamed as a catalyst for harassment, rather than the harassers.</Regular>
            <Regular>There is also the pervasive message that women are not qualified to make decisions about their bodies. We are seeing a resurgence, especially in the US, of women’s rights being reduced; mainly around their ability to access abortion and reproductive healthcare.</Regular>
            <Regular>Lastly, there is the day to day expectations of women; also known as emotional labour or the invisible workload. This includes childcare, cleaning, remembering birthdays, listening to problems etc. but also the considerations women have to think about every day around how to dress, how to assert themselves without seeming ‘bossy’ and worrying whether situations are safe or not.  There is a great article expanding on all of this <PageLink uri="http://time.com/money/4561314/women-work-home-gender-gap/">here</PageLink> that I would recommend a read of. </Regular>
            <Regular>All of these messages feed into a woman’s experience of the world, and can become internalised throughout their lives. </Regular>
            <Regular>So what about men?</Regular>
            <Regular>I get asked this a lot when talking about feminism. So, in case you were wondering, feminism benefits men greatly. Patriarchal messages like ‘boys don’t cry’ ‘man up’ and ‘don’t be a sissy’ mean men are often told that they are not allowed to acknowledge their feelings. This makes it all the harder for men to seek help, when they need it. It can prevent them from feeling safe to express or communicate their emotions for fear of it not being ok.</Regular>
            <Regular>Integrating feminism through the recognition of the imbalance of power within the sexes and challenging the norms placed on genders through patriarchal values can help clients to see the pressures that have been placed upon them. </Regular>
            <Regular>When a client acknowledges the stereotyping and other unhelpful messages that have been present on their journey, it gives more understanding as to why they may feel as they do, empowering them to choose what they do next.</Regular>
            </VerticalSpacing>
          </Slat>
        <Divider />
      </VerticalSpacing>
    )
  }
}

Blog.propTypes = {
  location: PropTypes.object,
  registerRef: PropTypes.func,
}

export const BlogPage = connect(mapStateToProps)(Blog)
