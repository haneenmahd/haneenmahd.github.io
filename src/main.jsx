import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
} from 'react-router-dom'
import styled from 'styled-components'
import theme from './theme'
import Work from './pages/Work'
import HireMe from './pages/HireMe'
import NavBar from './components/NavBar'

function RenderingApp() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname, location.state])

  return (
    <div
      style={{
        backgroundColor: theme.light.mainBg,
      }}
    >
      <NavBar />
      {/* React Router renderings */}
      <Outlet />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RenderingApp />}>
          <Route index element={<App />} />
          <Route path="work" element={<Work />} />
          <Route path="hire-me" element={<HireMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
