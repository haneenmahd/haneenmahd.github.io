import styled, { css, keyframes } from 'styled-components'

const CenterObject = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const RippleAnimation = keyframes`
  0% {
    scale: 0.9;
  }

  20% {
    scale: 0.95;
  }

  50% {
    scale: 1;
  }

  70% {
    scale: 0.95;
  }

  100% {
    scale: 0.9;
  }
`

const AnimationDuration = '1.3s'
const AnimationTransition = 'linear'
const AnimationIteration = 'infinite'

const Container = styled.span`
  position: relative;
`

const Circle = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 100%;
  background-color: #1c9342;
  ${CenterObject}
  animation: ${RippleAnimation} ${AnimationDuration} ${AnimationTransition} ${AnimationIteration};
`

const OverlayCircle = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 100%;
  background-color: #1c934274;
  ${CenterObject}
  animation: ${RippleAnimation} ${AnimationDuration} ${AnimationTransition} ${AnimationIteration};
`

export default function ActiveRipple() {
  return (
    <Container>
      <Circle />

      <OverlayCircle />
    </Container>
  )
}
