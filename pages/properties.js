import React from 'react'
import apolloClient from '../helpers/apollo'
import { GET_PROPERTIES } from '../queries/properties'
import PropertyList from '../components/blocks/PropertyList'

export const getStaticProps = async () => {
    let pageData = null;
    let isError = false;
    try {
        const { data } = await apolloClient.query({
            query: GET_PROPERTIES,
        });
        pageData = data;
    } catch (error) {
        console.log(error)
    }
    return {
        props: {
            pageData
        },
    }
}

const properties = ({pageData}) => {
    return (
        <>
        {console.log("pageData", pageData)}
        <PropertyList block={{
            isBlock : false,
            list: pageData?.pagesProperties?.data,
            title: "Whatever"
        }}/>
        </>
    )
}

export default properties