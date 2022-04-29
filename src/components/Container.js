import styled from 'styled-components'
import theme from '../theme'
import FadeInAnimation from '../animations/FadeIn'

const Container = styled.article`
  min-height: 100vh;
  max-width: 100vw;
  padding: ${(props) => props.padding || `5%`};
  background: ${theme.light.mainBg};
  color: ${theme.light.textColor};
  animation: ${FadeInAnimation} 0.8s;
`

export default Container
