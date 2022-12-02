import { GET_STACKS_AND_BLOCKS } from "../queries/stacks"
import apolloClient from './apollo'

export const stackData = async() =>{  
    let headerData = null;
    try {
    const { data } = await apolloClient.query({
      query:  GET_STACKS_AND_BLOCKS,
      variables: {
        stackID: "header-navigation"
      }
    });
    headerData = data?.stacksAndBlocks?.data[0].attributes;

  }
  catch (error) {
    console.log(error);
    
  }
  return{
    headerData
  }
}