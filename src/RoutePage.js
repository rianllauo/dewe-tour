import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DetailTour from './pages/DetailTour'

// Pages
import Home from './pages/Home'

function RoutePage() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/detail/:id" element={<DetailTour/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutePage