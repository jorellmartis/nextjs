import { gql } from "@apollo/client";
import { imageFragment } from "./fragments/imageFrag"
import { locationFragment } from "./fragments/locationFrag"


export const GET_PROPERTIES = gql`
query getproperties{
    pagesProperties{
        data{
            attributes{
                title
                ICAO
                image{
                    ${imageFragment}
                }
            seo{
                metaTitle
                metaDescription
            }
            location{
                ${locationFragment}
                
            }
        }
        }
        
    }
}
`;

export const GET_FILTERS = gql`

query getFilters{
    listLocations{
                data{
                    id
                    attributes{
                                title
                            }
                }
            }
    listRunways{
                data{
                    id
                    attributes{
                                title
                                numberOfRunways
                            }
                }
            }
}
`;