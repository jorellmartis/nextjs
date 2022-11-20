import React from 'react'
import styled from 'styled-components'
import { Typography } from '../Typography'
import { getStrapiMedia , getStrapiMediaUrl } from '../../helpers/strapi'

const BannerContainer = styled.div`
${(props) => props.theme.centerFlex}
padding: 2% 3% 4% 3%;
flex-direction: column;
text-align: center;
position: relative;
overflow: hidden;
min-height: 430px;
`
const BannerContent = styled.div`
background: rgba(125, 118, 126, 0.4);
padding: 0% 15% 0% 15%;
z-index: 2;
border-radius: 50px;
`
const BannerImage = styled.div`
width: 100%;
position: absolute;
>img{
    min-width: 100% ;   
    object-fit: contain;
}`
const PageBanner = ({pageBanner}) => {
    return (
        <BannerContainer>
            <BannerImage>
                <img src={getStrapiMedia(pageBanner?.image)} alt={getStrapiMediaUrl(pageBanner?.image)}/>
            </BannerImage>
            <BannerContent>
            <Typography level={1}>{pageBanner?.title}</Typography>
            <Typography level={"paramain"}>{pageBanner?.description}</Typography>
            </BannerContent>
        </BannerContainer>
    )
}

export default PageBanner