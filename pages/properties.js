import React, { useEffect, useState } from 'react'
import apolloClient from '../helpers/apollo'
import { GET_PROPERTIES , GET_FILTERS } from '../queries/properties'
import PropertyList from '../components/blocks/PropertyList'

const properties = ({filterData}) => {
    const[properties , setProperties] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [selectedNumberOfRunways, setSelectedNumberOfRunways] = useState(null);
    useEffect(() => {
        getProperites();
    }, []);
    useEffect(() => {
        console.log(selectedLocation)
    }, [selectedLocation]);
    useEffect(() => {
        console.log("use effect of runways")
    }, [selectedNumberOfRunways]);
    const getProperites = async () => {
    try {
        const { data } = await apolloClient.query({
            query: GET_PROPERTIES,
        });
        setProperties(data)
    } catch (error) {
        console.log(error)
    }
    };
    return (
        <>
        <div>
            <select name="location"
                defaultValue={0}
                onChange={(e) => setSelectedLocation(e.target.value)}
            >
                <option disabled value={0}>
                Select Location
                </option>
                {filterData?.listLocations?.data.map((location) => (
                    <option key={`location-dropdown-${location?.id}`} value={location?.attributes?.title} >
                        {location?.attributes?.title}
                    </option>
                ))}
            </select>
            <select name="runways"
                defaultValue={0}
            >
                <option disabled value={0}>
                    Number Of Runways
                </option>
                {filterData?.listRunways?.data.map((runway) => (
                    <option key={`runway-dropdown-${runway?.id}`} value={runway?.id} >
                        {runway.attributes.title}
                    </option>
                ))}
            </select>
        </div>
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