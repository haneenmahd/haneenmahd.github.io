import React from 'react'
import styled from 'styled-components'

const DescriptionStyle = styled.p`
  color: #545454;
  font-size: 20px;
  margin: 12px 0;
  line-height: 1.7em;
`

export default function Heading(props) {
  return <DescriptionStyle {...props}>{props.children}</DescriptionStyle>
}
