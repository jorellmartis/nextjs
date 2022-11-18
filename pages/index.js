import { Text } from "../components/Typography"
import  PropertyList  from "../components/blocks/PropertyList"
import apolloClient from '../helpers/apollo'
import { GET_PAGE_DATA } from "../queries/pages"
import { getVariableValues } from "graphql"
import FullBlockRender from "../components/FullBlockRender"
//STYLED COMPONENTS BASIC 
// const Text = styled.h1`
// color: red;
// display: flex;
// `;
// const Text2 = styled.h2`
// color: ${(props) => props.theme.primaryColor}
// `;
export default function Home({pageData}) {
  return (
    <>
    <h1>{pageData?.title}</h1>
    <FullBlockRender blocks={pageData.blocks}/>
      {/* <PropertyList/> */}
      {/* <Text>This is red text yo</Text>
      <Text2>This is black text yo</Text2>
      <Typography text="hellomf" globalConfig={props.globalConfig}/> */}
    </>
  )
}

export const getStaticProps = async () => {
  let pageData = null;
  try {
    const { data } = await apolloClient.query({
      query: GET_PAGE_DATA,
      variables: {
        slug: "homepage"
      }
    });
    pageData = data?.pagesSitemaps?.data[0].attributes;
  }
  catch (error) {
    console.log(error);
    
  }
  return{
    props: {
      pageData
    }
  }
}
