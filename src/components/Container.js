import styled from 'styled-components'
import theme from '../theme'

const Container = styled.article`
  min-height: 100vh;
  max-width: 100vw;
  padding: ${(props) => props.padding || `10%`};
  background: ${theme.light.mainBg};
  color: ${theme.light.textColor};
`

export default Container
