import React from 'react'
import styled from 'styled-components'

const HeadingStyle = styled.h1`
  color: #121212;
  font-size: 50px;
  margin: 12px 0;
  padding: 0;
`

export default function Heading(props) {
  return <HeadingStyle {...props}>{props.children}</HeadingStyle>
}
