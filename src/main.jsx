import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Main from './components/Main'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

function RenderingApp() {
  return (
    <div className='App'>
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
          <Route path="hello" element={<h1 style={{ paddingTop: 100 }}>Hello World</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
