import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Signup from './Signup'
import Details from './Details'

const RoutesDest = () => {
    return (
        <Routes>
            <Route exact path='/' Component={Home} />
            <Route exact path='/signup' Component={Signup} />
            <Route exact path='/details' Component={Details} />
        </Routes>
    )
}

export default RoutesDest