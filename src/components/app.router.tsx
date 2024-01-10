import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/main/layout'
import HomeIndex from '../pages/home/index'

type Props = {}

const AppRouter = (props: Props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route index element={<HomeIndex />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter