import React, {PropTypes} from "react"
import { connect } from "react-redux"
import {find, propEq} from "ramda"
import {VerticalSpacing, View, asyncWrapper} from "../../components"
import {Layout} from "../layout"
import {mapContentTypes} from "../map-content"
import styles from "./post.css"

const mapStateToProps = ({posts}, props) => {
  const {uid} = props.params
  const post = find(propEq("uid", uid))(posts.entities)
  return {
    post,
    isFetching: posts.isFetching,
  }
}

function renderPost(post) {
  return mapContentTypes({
    data: post,
    fields: ["date", "img", "body"],
  })
}

class BlogPost extends React.Component {

  render() {
    const {post} = this.props
    return post ? (
      <Layout title={post["blog_post.title"]}>
          <View className={styles.post}>
            <VerticalSpacing unit={3}>
              {renderPost(post)}
            </VerticalSpacing>
          </View>
      </Layout>
    ) : null
  }
}

BlogPost.propTypes = {
  post: PropTypes.object,
}

export const Post = connect(mapStateToProps)(asyncWrapper(BlogPost))
