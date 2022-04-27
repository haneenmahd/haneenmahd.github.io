import styled from 'styled-components'

const ImageStyle = styled.img`
  height: ${(p) => p.height};
  width: ${(p) => p.width};
  border-radius: ${(p) => (p.rounded ? '100%' : '0%')};
  max-width: 100%;
`

const Image = ({
  rounded = false,
  height = 'auto',
  width = 'auto',
  src,
  alt,
}) => {
  return (
    <ImageStyle
      src={src}
      height={height}
      width={width}
      rounded={rounded}
      alt={alt}
    />
  )
}

export default Image
