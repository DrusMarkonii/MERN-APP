import React from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import CreatePage from '../pages/CreatePage'
import DetailPage from '../pages/DetailPage'
import LinksPage from '../pages/LinksPage'
import AuthPage from '../pages/AuthPage'


export const useRoutes = isAuth => {
    if (isAuth) {
        return (
            <Routes>
                <Route path='/links' element={ <LinksPage /> } />
                <Route path='/create' element={<CreatePage />} />
                <Route path='/detail/:id' element={<DetailPage/>} />
                <Route path='/*' element={ <Navigate  to="/create"/> } />
                    
               
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path="/" exact>
                <AuthPage />
            </Route>
            <Navigate to="/"/>
        </Routes>
    )
}