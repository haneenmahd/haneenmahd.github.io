import { keyframes } from 'styled-components'

const FadeIn = keyframes`
  0% {
    opacity: 0.3;
    transform: translateY(30%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

export default FadeIn
