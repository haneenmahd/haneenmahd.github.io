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
import Blog from './pages/Blog'
import Store from './pages/Store'
import HireMe from './pages/HireMe'

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
          <Route path="blog" element={<Blog />} />
          <Route path="store" element={<Store />} />
          <Route path="hire-me" element={<HireMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
