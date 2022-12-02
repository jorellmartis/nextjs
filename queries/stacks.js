import { gql } from "@apollo/client";
import { ComponentNavigationListOfLinks } from "./fragments/blocks"
export const GET_STACKS_AND_BLOCKS = gql`
    query stacksAndBlocks($stackID: String){
        stacksAndBlocks(filters:{
            stackID: {
                eq: $stackID
            }
        }){
            data{
                attributes{
                    title
                    stackID
                    blocks{
                        ${ComponentNavigationListOfLinks}
                    }
                }
            }
        }
    }

`;
