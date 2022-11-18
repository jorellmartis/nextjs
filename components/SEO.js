import React from 'react'

export const SEO = (props) => {
    return (
    <>
        <title>
            {props?.pageProps?.seo?.metaTitle
            ? props?.pageProps?.seo?.metaTitle
            : props?.pageProps?.title}
        </title>
        <meta
            name="description"
            content={props?.pageProps?.seo?.metaDescription}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
        property="og:image"
        content={
            props?.seo?.metaImage
            ? props?.seo?.metaImage
            : props.pageProps?.featuredImage
        }
        />
    </>
)
}
