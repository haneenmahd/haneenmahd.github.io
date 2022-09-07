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
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function RenderingApp() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname, location.state])

  return (
    <div
      style={{
        backgroundColor: theme.light.mainBg,
        minHeight: '100vh'
      }}
    >
      {/* <NavBar /> Display only after the work page is completed. */}
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
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
