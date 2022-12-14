import React from 'react'
import styled from 'styled-components'
import { PropertyCard } from '../elements/cards/PropertyCard'

const PropertyContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: auto;
padding: 2% ;
`
const PropertyContent = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
height: auto;
gap: 2%;
`
const PropertyList = ({block}) => {
  return (
    /* If template a*/
    <PropertyContainer>
    <PropertyContent>
      {block?.list?.map((property, index) => (
          <PropertyCard key={`property-id-${new Date().getTime}-${index}`}
            property={property}
            showContent = {block.isBlock}
          />
      ))}
    </PropertyContent>
  </PropertyContainer>
    /*If template b*/
    /* New Styles Here??? */
  )
}

export default PropertyList