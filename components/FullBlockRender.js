import React from 'react'
import ComponentWebsiteBlocksPropertyList from './blocks/ComponentWebsiteBlocksPropertyList'
import ComponentWebsiteBlocksPageBanner from './blocks/ComponentWebsiteBlocksPageBanner'

const FullBlockRender = ({blocks}) => {
    // console.log(blocks)
    const getComponent = (block , index ) => {
        switch (block.__typename) {
            case "ComponentWebsiteBlocksPropertyList":
                return <ComponentWebsiteBlocksPropertyList 
                block = {block}
                key = {`section-block-${index}`}
                />
                break;
            case "ComponentWebsiteBlocksPageBanner":
                return <ComponentWebsiteBlocksPageBanner 
                block = {block}
                key = {`section-block-${index}`}
                />
                break;
            default:
                break;
        }

    }
    return <>{blocks?.map(( block, index ) => 
        getComponent(block, index)
        )}</>
}

export default FullBlockRender