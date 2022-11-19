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
            ... on ComponentWebsiteBlocksPageBanner{
                __typename
                title
                description
                image{${imageFragment}}
                
            } 
            ... on ComponentWebsiteBlocksPropertyList{
                __typename
                title
                propertyList{
                property{
                    data{
                    attributes{
                        slug
                        title
                        image{${imageFragment}
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