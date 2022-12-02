import Link from 'next/link'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from '../pages/_app'

const StyledHeader = styled.header`
nav{
    display: flex;
    width: 100%;
    left: 0;
    z-index: 10;
    padding: 2% 3% 2% 3% ;
    ul{
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        li{
            list-style: none;
        }
    }
}
`
export const Navbar = (props) => {
    const context = useContext(AppContext)
    return (
    <StyledHeader>
        <nav>
            <ul>
            {context?.headerLinks[0]?.listOfLinks?.map((link, index) => 
            <li key={link?.id}><Link href={link?.url}>{link?.title}</Link></li>
            )}
            </ul>
        </nav>
    </StyledHeader>
)
}
