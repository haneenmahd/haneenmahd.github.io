import React from 'react'
import styled from 'styled-components'

const Style = styled.span`
  padding: 5px 10px;
  border-radius: 8px;
  color: ${(p) => p.color};
  margin: ${(p) => p.margin};
  border: 1px solid ${(p) => p.accentColor};
  background-color: ${(p) => p.backgroundColor};
`

export default function Badge({
  backgroundColor = '#d3d3d3',
  accentColor = '#c4c4c4',
  color = '#5e5e5e',
  margin = '0',
  children,
}) {
  return (
    <Style
      color={color}
      backgroundColor={backgroundColor}
      accentColor={accentColor}
      margin={margin}
    >
      {children}
    </Style>
  )
}
