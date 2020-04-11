import React, {PropTypes} from "react"
import { connect } from "react-redux"
import {find, propEq} from "ramda"
import {VerticalSpacing, View, asyncWrapper} from "../components"
import {PageLayout} from "./page-layout"
import {mapContentTypes} from "./map-content"
import styles from "./page.css"

const mapStateToProps = ({pages}, props) => {
  const {uid ='home'} = props.params
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
    fields: [ "sections"],
  })
}

function renderImage(page){
  return mapContentTypes({
    data: page,
    fields: [ "banner"],
  })
}

class Wrapper extends React.Component {

  render() {
    const {page} = this.props
    const banner = renderImage(page)
    return page ? (
      <PageLayout 
        title={page["page_template.title"]} 
        banner={banner}>
          <View className={styles.page}>
              {renderPage(page)}
          </View>
      </PageLayout>
    ) : null
  }
}

Wrapper.propTypes = {
  page: PropTypes.object,
}

export const Page = connect(mapStateToProps)(asyncWrapper(Wrapper))
