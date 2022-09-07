import { keyframes } from 'styled-components'

const Ripple = keyframes`
  0% {
    box-shadow: 0 0 0 0 #c4c4c490;
  }

  30% {
    box-shadow: 0 0 0 5px #c4c4c470;
  }

  50% {
    box-shadow: 0 0 0 10px #c4c4c450;
  }

  80% {
    box-shadow: 0 0 0 15px #c4c4c430;
  }

  100% {
    box-shadow: 0 0 0 20px #c4c4c400;
  }
`

export default Ripple
