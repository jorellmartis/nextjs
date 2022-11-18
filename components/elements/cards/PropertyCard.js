import React from 'react'
import { Text } from '../../Typography'
import styled from 'styled-components'
import { getStrapiMedia } from '../../../helpers/strapi'

const Card = styled.div`
  width: 20%;` 

const Image = styled.div`
>img{
  width: 100%;
  object-fit: contain;
  /* clip-path: polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%); */
}`

const Content = styled.div`
text-align: center`;


export const PropertyCard = ({property}) => {
  console.log(property,"card content")
  return (
    <Card>
        <Image>
            <img src={getStrapiMedia(property?.property?.data?.attributes?.image)} alt="Goa International Airport"/>
        </Image>
 
            {/* <Text level={3}>Title Of Property</Text>
            <Text level={4}>Title Of Property</Text>
            <Text level={4}>Title Of Property</Text> */}
            {//if we r on property page 
             // ?       
                    /* <Content>
                    <h3>{property?.data?.attributes?.title}</h3>
                    <h4>{property?.data?.attributes?.ICAO}</h4>
                    </Content> */
                // :
                    /* <Content>
                    <h3>{property?.property?.data?.attributes?.title}</h3>
                    <h4>{property?.property?.data?.attributes?.ICAO}</h4>
                    </Content>} */
      
    </Card>
  )
}