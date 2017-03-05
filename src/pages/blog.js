
import React, {PropTypes} from "react"
import { connect } from "react-redux"
import theme from "theme"
import {Header, Regular, SubHeader, VerticalSpacing, Divider, Slat, Image, PageLink} from "../components"

const mapStateToProps = ({posts}, ownProps) => {
  return {
    posts: posts.entities,
    isFetching: posts.isFetching,
  }
}

class Blog extends React.Component {

  render() {
    const {posts} = this.props
    console.log(posts)
    return (
      <VerticalSpacing unit={10}>
          <Slat>
            <VerticalSpacing unit={3}>
            <Header>Blog</Header>
            <Image src={`/${theme.assets.outdoorShot}`} />
            <SubHeader>As a counsellor</SubHeader>
            <Regular>I am an <PageLink uri="http://www.counselling-directory.org.uk/integrative-therapy.html">integrative counsellor</PageLink>. This means that I use a number of different counselling techniques depending on what I feel is best for you as a person and the outcomes you wish for.</Regular>
            <Regular>I believe that therapy should be tailored to the individual, as no two people are the same and no single approach can be applied to every person.</Regular>
            <Regular>I am a registered member of the British Association of Counsellors and Psychotherapists and abide by their code of ethics.</Regular>
            <Regular>I am a feminist and am committed to reducing environmental impact where I can; I cycle to all appointments and use a Freephone.</Regular>
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
