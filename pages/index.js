import { Text } from "../components/Typography"
import  PropertyList  from "../components/blocks/PropertyList"
import apolloClient from '../helpers/apollo'
import { GET_PAGE_DATA } from "../queries/pages"
import { getVariableValues } from "graphql"
import FullBlockRender from "../components/FullBlockRender"
import PageBanner from "../components/blocks/PageBanner"
//STYLED COMPONENTS BASIC 
// const Text = styled.h1`
// color: red;
// display: flex;
// `;
// const Text2 = styled.h2`
// color: ${(props) => props.theme.primaryColor}
// `;
export default function Home({pageData}) {
  console.log(pageData,"some info")
  return (
    <>
    <h1>{pageData?.title}</h1>
    <FullBlockRender blocks={pageData.blocks}/>
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
