import styled from 'styled-components'
import Main from './components/Main'
import theme from './theme'
import FadeInAnimation from './animations/FadeIn'

const AppStyle = styled.div`
  max-width: 100%;
  background-color: ${theme.light.mainBg};
  color: ${theme.light.textColor};

  > * {
    animation: ${FadeInAnimation} 1s;
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
