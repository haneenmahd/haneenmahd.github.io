import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Projects from './pages/Projects'
import NavBar from './components/NavBar'
import About from './pages/About'
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom'

function RenderingApp() {
  const location = useLocation();

  return (
    <div className={`App ${location.pathname !== "/" && "page"}`}>
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
