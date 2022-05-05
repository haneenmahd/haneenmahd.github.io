import styled, { css } from 'styled-components'

const ImageStyle = styled.img`
  height: ${(p) => p.height};
  width: ${(p) => p.width};
  border-radius: ${(p) => (p.rounded ? '20px' : '5px')};
  max-width: 100%;
  box-shadow: none;
  transition: 250ms ease;

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
  src,
  alt,
  hoverShadow = false,
}) => {
  return (
    <ImageStyle
      src={src}
      height={height}
      width={width}
      rounded={rounded}
      alt={alt}
      hoverShadow={hoverShadow}
    />
  )
}

export default Image
