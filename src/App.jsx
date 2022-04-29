import styled from 'styled-components'
import Main from './components/Main'
import theme from './theme'
import FadeInAnimation from './animations/FadeIn'

const AppStyle = styled.div`
  min-height: 100vh;
  max-width: 100%;
  background-color: ${theme.light.mainBg};
  color: ${theme.light.textColor};

  &:first-child {
    padding-top: 50px;
  }

  > * {
    animation: ${FadeInAnimation} 0.8s;
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
