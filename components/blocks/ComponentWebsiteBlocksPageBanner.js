import React from 'react'
import PageBanner from './PageBanner'

const ComponentWebsiteBlocksPageBanner = ({block}) => {
  console.log(block,"page banner data")
  return (
    <PageBanner pageBanner = {block}/>
  )
}

export default ComponentWebsiteBlocksPageBanner