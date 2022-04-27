import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import NavBar from './components/NavBar'
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
} from 'react-router-dom'
import theme from './theme'
import Work from './pages/Work'

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
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
