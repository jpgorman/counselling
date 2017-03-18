import React, {PropTypes} from "react"
import { connect } from "react-redux"
import {find, propEq} from "ramda"
import {Layout} from "./layout"
import {mapContentTypes} from "./map-content"

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
    data: post.data,
    fields: ["title", "date", "img", "body", "uid"],
  })
}

class BlogPost extends React.Component {

  render() {
    const {post} = this.props
    return post ? (
      <Layout title={post.title}>
        {renderPost(post)}
      </Layout>
    ) : null
  }
}

BlogPost.propTypes = {
  post: PropTypes.object,
}

export const Post = connect(mapStateToProps)(BlogPost)
