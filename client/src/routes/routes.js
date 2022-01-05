import React from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import CardPage from '../pages/CardPage'
import AllCardsPage from '../pages/AllCardsPage'
import HomePage from '../pages/HomePage'
import ErrorPage from '../pages/ErrorPade'



export const useRoutes = () => {
   
        return (
            <Routes>
                <Route path='/' element={ <HomePage /> } />
                <Route path='/all_cards' element={ <AllCardsPage /> } />
                <Route path='/card/:id' element={<CardPage/>} />
                <Route path='/error' element={<ErrorPage/>} />
                <Route path='/*' element={ <Navigate  to="/"/> } />
            </Routes>
        )
    }
