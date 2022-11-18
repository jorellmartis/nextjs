import React from 'react'
import { Navbar } from './Navbar'

export const Layout = (props) => {
    return (
    <div>
    <Navbar/>
    <main>{props.children}</main>
    </div>
    )
}
