import './App.css'
import NavBar from './components/NavBar'
import Main from './components/Main'
import Projects from './pages/Projects'
import About from './pages/About'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <Projects />
      <About />
    </div>
  )
}

export default App
