import styled, { css } from 'styled-components'
import Ripple from '../animations/Ripple'

const ImageStyle = styled.div`
  height: ${(p) => p.height};
  width: ${(p) => p.width};
  border-radius: ${(p) =>
    p.blob ? '60% 50% 60% 50% / 45% 100% 45% 100%' : '5px'};
  max-width: 100%;
  box-shadow: none;
  background: url(${(p) => p.url});
  background-size: ${(p) => p.height};
  background-position: center;
  transition: 350ms ease-in-out;

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

  ${(p) =>
    p.blob &&
    css`
      &:hover {
        border-radius: 60% 50% 60% 50% / 100% 45% 100% 45%;
      }
    `}
`

const Image = ({
  blob = false,
  height = 'auto',
  width = 'auto',
  url,
  alt,
  blobAnimation = false,
  rippleAnimation = false,
  hoverShadow = false,
}) => {
  return (
    <ImageStyle
      url={url}
      height={height}
      width={width}
      blob={blob}
      alt={alt}
      blobAnimation={blobAnimation}
      rippleAnimation={rippleAnimation}
      hoverShadow={hoverShadow}
    />
  )
}

export default Image
