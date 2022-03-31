import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import NavBar from './components/NavBar'
import About from './pages/About'
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
} from 'react-router-dom'
import theme from './theme'
import Wallpapers from './pages/Wallpapers'

function RenderingApp() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname, location.state])

  return (
    <div
      style={{
        paddingTop: location.pathname !== '/' ? 85 : 0,
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
          <Route path="about" element={<About />} />
          <Route path="wallpapers" element={<Wallpapers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
