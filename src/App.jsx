import NavBar from './components/NavBar'
import Main from './components/Main'
import styled from 'styled-components'
import theme from './theme'

const AppStyle = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  background-color: ${theme.light.mainBg};
  color: ${theme.light.textColor};

  &:first-child {
    padding-top: 50px;
  }
`

function App() {
  return (
    <AppStyle>
      <Main />
    </AppStyle>
  )
}

export default App
