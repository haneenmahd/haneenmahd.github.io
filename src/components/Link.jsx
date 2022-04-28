import React from 'react'
import styled from 'styled-components'
import CommonLink from './CommonLink'

const LinkStyle = styled.a`
  ${CommonLink}
`

export default function Link({ href, text, highlighted }) {
  return (
    <LinkStyle
      href={href}
      aria-label={`Link to ${href} site`}
      highlighted={highlighted}
      target="_blank"
    >
      {text}
    </LinkStyle>
  )
}
