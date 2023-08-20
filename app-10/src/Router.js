import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './Products'
import Details from './Details'

const Router = () => {
    return (
        <Routes>
            <Route path='/' Component={Products} />
            <Route path='/details/:id' Component={Details} />
        </Routes>
    )
}

export default Router