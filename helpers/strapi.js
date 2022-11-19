
export const getStrapiMedia = (imageData) => {
    const imageAttributes = imageData?.data?.attributes
    return `http://localhost:1337${imageAttributes?.url}`
}
export const getStrapiMediaUrl = (imageData) => {
    const imageAttributes = imageData?.data?.attributes.alternativeText
    return imageAttributes
}