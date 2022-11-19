import React from 'react'
import styled from 'styled-components'
import { Typography } from './/Typography'


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
padding: 0% 15% 0% 15%;
z-index: 2;
`
const BannerImage = styled.div`
width: 100%;
position: absolute;
>img{
  object-fit: contain;
}`
const PageBanner = () => {
    return (
        <BannerContainer>
            <BannerImage>
                <img src="/images/banner2.jpg" alt="Banner Image" />
            </BannerImage>
            <BannerContent>
            <Typography level={1}>Title Of Property</Typography>
            <Typography level={"paramain"}> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</Typography>
            
            </BannerContent>
            

        </BannerContainer>
    )
}

export default PageBanner