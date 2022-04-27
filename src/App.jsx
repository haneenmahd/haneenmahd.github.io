import NavBar from './components/NavBar'
import Main from './components/Main'
import About from './pages/About'
import styled from 'styled-components'
import theme from './theme'

const AppStyle = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  background-color: ${theme.light.mainBg};
  color: ${theme.light.textColor};

  &.page {
    padding-top: 80px;
  }
`

function App(props) {
  return (
    <AppStyle>
      <NavBar />
      <Main />
      <About />
    </AppStyle>
  )
}

export default App
