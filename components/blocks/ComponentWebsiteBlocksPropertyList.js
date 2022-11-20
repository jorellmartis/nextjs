import React from 'react'
import PropertyList from './PropertyList';

const ComponentWebsiteBlocksPropertyList = ({block}) => {
  return (
    <>
    <h2>{block?.title}</h2>
    <PropertyList block={{
        isBlock : true,
        list: block.propertyList,
        title: "Whatever"
    }}/>
    </>
  )
}

export default ComponentWebsiteBlocksPropertyList