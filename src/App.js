import './App.css'
import React from 'react'
import Home from './pages/home/Home'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/mainlayout'
import './assets/scss/core/Variable.scss'
import ProductDetail from './pages/home/ProductDetail'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/products/:id" element={<ProductDetail />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
