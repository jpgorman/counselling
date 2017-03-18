import React from "react"
import moment from "moment"
import uuidV4 from "uuid/v4"
import {map, keys, last, split, partialRight, reduce, pick, pipe} from "ramda"
import {Regular, Detail, SubHeader, Image, Thumbnail} from "../../components"

const getNameFromKey = key => last(split(".", key))

function renderStructuredText(key, Component, data) {
  return map(({text}) => <Component key={`${key}-${uuidV4()}`}>{text}</Component>,data)
}

function renderTimestamp(key, Component, text, format) {
  return <Component key={`${key}-${uuidV4()}`}>{moment(text).format(format)}</Component>
}

function renderImage(key, Component, {main}) {
  const {url, dimensions} = main
  return <Component key={`${key}-${uuidV4()}`} src={url} dimensions={dimensions} />
}

const contentTypeToComponentDictionary = {
  "StructuredText": {
    getComponent: (name) => name === "title" ? SubHeader : Regular,
    renderer: renderStructuredText,
  },
  "Timestamp": {
    getComponent: () => Detail,
    renderer: partialRight(renderTimestamp, ["Do MMMM YYYY"]),
  },
  "Image": {
    getComponent: (name) => name === "thumbnail" ? Thumbnail : Image,
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
  const {type, value} = data[key]
  const {getComponent, renderer} = contentTypeToComponentDictionary[type]
  return renderer(key, getComponent(key), value)
}

export function mapContentTypes({data, fields}) {
  const normalisedData = normaliseFieldNames(data)
  return pipe(
    pick(fields),
    keys,
    map(partialRight(renderData, [normalisedData]))
  )(normalisedData)

}
