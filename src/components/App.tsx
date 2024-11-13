import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import CatalogPage from '../pages/CatalogPage/CatalogPage'
import FindCarPage from '../pages/FindCarPage/FindCarPage'
import CreatePost from '../pages/CreatePost/CreatePost'
import { ToastContainer } from 'react-toastify'
import CarPage from '../pages/CarPage/CarPage'
import 'react-toastify/dist/ReactToastify.css'
import Header from './Header/Header'
import { useEffect } from 'react'

import './App.css'

function App() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/catalog')
    }
  }, [location.pathname, navigate])

  return (
    <>
      <Header />
      <Routes>
        <Route path='/catalog' element={<CatalogPage />} />
        <Route path='/catalog/:id' element={<CarPage />} />
        <Route path='/add-auto' element={<CreatePost />} />
        <Route path='/find-auto' element={<FindCarPage />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
