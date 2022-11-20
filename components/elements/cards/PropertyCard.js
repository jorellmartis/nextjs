import React from 'react'
import styled from 'styled-components'
import { getStrapiMedia , getStrapiMediaUrl } from '../../../helpers/strapi'
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


export const PropertyCard = ({property , showContent}) => {
  return (
    <Card>
      { showContent  
        ?
        <Image>
            <img src={getStrapiMedia(property?.property?.data?.attributes?.image)} alt={getStrapiMediaUrl(property?.property?.data?.attributes?.image)}/>
        </Image>
        :
        <Image>
            <img src={getStrapiMedia(property?.attributes?.image)} alt="Goa International Airport"/>
        </Image>
      }
            {/* <Text level={3}>Title Of Property</Text>
            <Text level={4}>Title Of Property</Text>
            <Text level={4}>Title Of Property</Text> */}
      { showContent
              ?
              <Content>
                <h3>{property?.property?.data?.attributes?.title}</h3>
                <h4>{property?.property?.data?.attributes?.ICAO}</h4>
              </Content>
              :
              <Content>
                <h3>{property?.attributes?.title}</h3>
                <h4>{property?.attributes?.ICAO}</h4>
                </Content>
      }      
    </Card>
  )
}