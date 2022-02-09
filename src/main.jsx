import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Projects from './pages/Projects'
import NavBar from './components/NavBar'
import About from './pages/About'
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
} from 'react-router-dom'
import smoothscroll from 'smoothscroll-polyfill'
import _theme from './theme/theme'

smoothscroll.polyfill()

function RenderingApp() {
  const [theme, setTheme] = useState('light')
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div
      style={{
        paddingTop: location.pathname !== '/' ? 85 : 0,
        backgroundColor:
          theme === 'dark' ? _theme.dark.mainBg : _theme.light.mainBg,
      }}
    >
      <NavBar theme={theme} setTheme={(theme) => setTheme(theme)} />

      {/* React Router renderings */}
      <Outlet context={[theme, setTheme]} />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RenderingApp />}>
          <Route index element={<App />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
