import React from 'react'
import { Outlet } from 'react-router'
import Footer from './footer'
import Nav from './nav'

type Props = {}

const Layout = (props: Props) => {
    return (
        <>
            <Nav />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout