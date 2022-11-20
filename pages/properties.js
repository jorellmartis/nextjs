import React, { useEffect, useState } from 'react'
import apolloClient from '../helpers/apollo'
import { GET_PROPERTIES , GET_FILTERS } from '../queries/properties'
import PropertyList from '../components/blocks/PropertyList'

const properties = ({filterData}) => {
    const[properties , setProperties] = useState(null);
    useEffect(() => {
        console.log("filter data", filterData)
        getProperites();
    }, []);
    const getProperites = async () => {
    try {
        const { data } = await apolloClient.query({
            query: GET_PROPERTIES,
        });
        setProperties(data)
        console.log(data , "filtered properties")
    } catch (error) {
        console.log(error)
    }
    };
    console.log(properties,"afterchange")
    return (
        <>
        yolo
        {console.log( properties?.pagesProperties?.data,"did it load?")}
        <PropertyList block={{
            isBlock : false,
            list: properties?.pagesProperties?.data,
            title: "Whatever"
        }}/>
        </>
    )
}
export const getStaticProps = async () => {
    let filterData = null;
    try {
        const { data } = await apolloClient.query({
            query: GET_FILTERS,
        });
        filterData = data;   
    } 
    catch (error) {
        console.log(error)
    }
    return {
        props: {
            filterData
        },
    }
}
export default properties