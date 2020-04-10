import React, {PropTypes} from "react"
import { connect } from "react-redux"
import {find, propEq} from "ramda"
import {VerticalSpacing, View, asyncWrapper} from "../components"
import {Layout} from "./layout"
import {mapContentTypes} from "./map-content"
import styles from "./page.css"

const mapStateToProps = ({pages}, props) => {
  const {uid} = props.params
  const page = find(propEq("uid", uid))(pages.entities)
  return {
    page,
    isFetching: pages.isFetching,
    error: pages.error,
  }
}

function renderPage(page) {
  return mapContentTypes({
    data: page,
    fields: [ "banner", "sections"],
  })
}

class Wrapper extends React.Component {

  render() {
    const {page} = this.props
    return page ? (
      <Layout title={page["page_template.title"]}>
          <View className={styles.page}>
            <VerticalSpacing unit={3}>
              {renderPage(page)}
            </VerticalSpacing>
          </View>
      </Layout>
    ) : null
  }
}

Wrapper.propTypes = {
  page: PropTypes.object,
}

export const Page = connect(mapStateToProps)(asyncWrapper(Wrapper))
