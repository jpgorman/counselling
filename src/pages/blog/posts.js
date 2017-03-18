import React, {PropTypes} from "react"
import { connect } from "react-redux"
import {map, append, length, head} from "ramda"

import {Layout} from "./layout"
import {PageLink, Flex, View, asyncWrapper} from "../../components"
import {mapContentTypes} from "./map-content"
import styles from "./posts.css"

const mapStateToProps = ({posts}) => {
  return {
    posts: posts.entities,
    isFetching: posts.isFetching,
    error: posts.error,
  }
}

function addLinkToPost(fields, {uid}) {
  return append(<PageLink key={uid} to={`/blog/${uid}`}>Read More</PageLink>, fields)
}

function renderPosts(posts) {
  return map(post => {
    const fields = mapContentTypes({
      data: post.data,
      fields: ["thumbnail", "date", "title", "summary", "uid"],
    })
    return addLinkToPost(fields, post)
  }, posts)
}

class BlogPosts extends React.Component {
  render() {
    const {posts} = this.props

    if(length(posts)) {
      const [img, ...rest] = head(renderPosts(posts))
      return (
        <Layout title="Blog">
          <View className={styles.item}>
            <View className={styles.thumbnail}>{img}</View>
            <Flex flexGrow={1} flexShrink={1}>{rest}</Flex>
          </View>
        </Layout>
      )
    }
  }
}

BlogPosts.propTypes = {
  posts: PropTypes.array,
  isFetching: PropTypes.bool,
}

export const Posts = connect(mapStateToProps)(asyncWrapper(BlogPosts))
