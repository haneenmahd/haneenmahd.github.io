import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Projects from './pages/Projects'
import NavBar from './components/NavBar'
import About from './pages/About'
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom'
import smoothscroll from 'smoothscroll-polyfill'

smoothscroll.polyfill();

function RenderingApp() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div style={{
      paddingTop: location.pathname !== "/" ? 85 : 0
    }}>
      <NavBar />

      {/* React Router renderings */}
      <Outlet />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RenderingApp />}>
          <Route
            index
            element={<App />}
          />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
