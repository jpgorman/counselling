import React from "react"
import moment from "moment"
import uuidV4 from "uuid/v4"
import ReactHtmlParser from "html-react-parser"
import {map, keys, last, split, partialRight, reduce, pick, pipe} from "ramda"
import {Regular, Detail, SubHeader, Image, Thumbnail} from "../components"

const getNameFromKey = key => last(split(".", key))

function renderStructuredTextAsHtml(key, Component, text) {
  return <Component key={`${key}-${uuidV4()}`}>{ReactHtmlParser(text)}</Component>
}

function renderStructuredText(key, Component, text) {
  return <Component key={`${key}-${uuidV4()}`}>{text}</Component>
}

function renderTimestamp(key, Component, text, format) {
  return <Component key={`${key}-${uuidV4()}`}>{moment(text).format(format)}</Component>
}

function renderImage(key, Component, {main}) {
  const {url, dimensions} = main
  return <Component key={`${key}-${uuidV4()}`} src={url} dimensions={dimensions} />
}

const contentTypeToComponentDictionary = {
  "title": {
    getComponent: () => SubHeader,
    renderer: renderStructuredText,
  },
  "summary": {
    getComponent: () => Regular,
    renderer: renderStructuredText,
  },
  "body": {
    getComponent: () => Regular,
    renderer: renderStructuredTextAsHtml,
  },
  "sections": {
    getComponent: () => Regular,
    renderer: renderStructuredTextAsHtml,
  },
  "date": {
    getComponent: () => Detail,
    renderer: partialRight(renderTimestamp, ["Do MMMM YYYY"]),
  },
  "img": {
    getComponent: () => Image,
    renderer: renderImage,
  },
  "banner": {
    getComponent: () => Image,
    renderer: renderImage,
  },
  "thumbnail": {
    getComponent: () => Thumbnail,
    renderer: renderImage,
  },
}

function normaliseFieldNames(data) {
  return reduce((accum, key) => {
    accum[getNameFromKey(key)] = data[key]
    return accum
  }, {}, keys(data))
}

function renderData(key, data) {
  const {getComponent, renderer} = contentTypeToComponentDictionary[key]
  return renderer(key, getComponent(key), data[key])
}

export function mapContentTypes({data, fields}) {
  const normalisedData = normaliseFieldNames(data)
  return pipe(
    pick(fields),
    keys,
    map(partialRight(renderData, [normalisedData]))
  )(normalisedData)

}
