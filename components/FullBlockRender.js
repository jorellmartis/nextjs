import React from 'react'
import ComponentWebsiteBlocksPropertyList from './blocks/ComponentWebsiteBlocksPropertyList'

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
        
            default:
                break;
        }

    }
    return <div>{blocks?.map(( block, index ) => 
        getComponent(block, index)
        )}</div>
}

export default FullBlockRender