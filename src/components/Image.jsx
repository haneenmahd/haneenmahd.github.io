import styled, { css } from 'styled-components'
import Ripple from '../animations/Ripple'

const ImageStyle = styled.div`
  height: ${(p) => p.height};
  width: ${(p) => p.width};
  border-radius: ${(p) => (p.rounded ? '100px' : '5px')};
  max-width: 100%;
  box-shadow: none;
  background: url(${(p) => p.url});
  background-size: ${(p) => p.height};
  background-position: center;
  transition: 250ms ease;

  ${(p) =>
    p.rippleAnimation &&
    css`
      animation: ${Ripple} 1s linear infinite;
      animation-delay: 1s;
    `}

  ${(p) =>
    p.hoverShadow &&
    css`
      &:hover {
        box-shadow: 0 0 0 5px #c4c4c428;
      }
    `}
`

const Image = ({
  rounded = false,
  height = 'auto',
  width = 'auto',
  url,
  alt,
  rippleAnimation = false,
  hoverShadow = false,
}) => {
  return (
    <ImageStyle
      url={url}
      height={height}
      width={width}
      rounded={rounded}
      alt={alt}
      rippleAnimation={rippleAnimation}
      hoverShadow={hoverShadow}
    />
  )
}

export default Image
