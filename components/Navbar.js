import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

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
export const Navbar = () => {
    return (
    <StyledHeader>
        <nav>
            <ul>
            <li><Link href='/'>Test 1</Link></li>
            <li><Link href='/'>Test 1</Link></li>
            <li><Link href='/'>Test 1</Link></li>
            </ul>
        </nav>
    </StyledHeader>
)
}
