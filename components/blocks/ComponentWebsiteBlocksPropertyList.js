import React from 'react'
import PropertyList from './PropertyList';

const ComponentWebsiteBlocksPropertyList = ({block}) => {
  return (
    <>
    <h2>{block?.title}</h2>
    {/* {block?.propertyList?.map((property, index) => {
        console.log(property)
        return( */}
            <PropertyList block={{
                list: block.propertyList,
                title: "Whatever"
            }}/>
        {/* );
    })} */}
    </>
  )
}

export default ComponentWebsiteBlocksPropertyList