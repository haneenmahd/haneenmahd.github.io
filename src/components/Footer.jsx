import React from 'react'
import styled from 'styled-components'
import CommonLink from './CommonLink'
import { Paragraph } from './Text'

const FooterStyle = styled.footer`
  max-width: 100%;
  background: #2d2d2d;
  margin-top: 20px;
  padding: 2% 10%;
`

const CustomisedParagraph = styled(Paragraph)`
  color: #c3c3c3;
  font-size: 100%;
  font-weight: 500;
`

export default function Footer() {
  return (
    <FooterStyle>
      Contact me: cans_refits.0h@icloud.com
      <CustomisedParagraph>
        © 2022 Haneen Mahdin. All Rights Reserved.
      </CustomisedParagraph>
    </FooterStyle>
  )
}
