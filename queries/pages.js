import { gql } from "@apollo/client"
import { imageFragment } from "./fragments/imageFrag"

export const GET_PAGE_DATA = gql`
    
query pageData($slug:String){
    pagesSitemaps(filters:{
        slug : {
        eq: $slug
        }
    }){
        data{
        attributes{
            title
            slug
            blocks{
            ... on ComponentWebsiteBlocksPropertyList{
                __typename
                title
                propertyList{
                property{
                    data{
                    attributes{
                        slug
                        title
                        image{
                        data{
                            attributes{
                            url
                            alternativeText
                            }
                        }
                        }
                        ICAO  
                        location{
                        data{
                            attributes{
                            title
                            }
                        }
                        }
                    }
                    }
                }
                }
            }
            }
        }
        }
    }
    }


    `;