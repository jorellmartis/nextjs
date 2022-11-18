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