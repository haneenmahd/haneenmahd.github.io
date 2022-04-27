import React from 'react'
import styled from 'styled-components'
import TextField from './TextField'
import theme from '../theme'
import Links from './Links'
import Image from './Image'
import { LandingParagraph } from './Text'
import Avatar from '../assets/img/profile_pic.jpg'

const MainStyle = styled.article`
  position: relative;
  min-height: 90vh;
  max-width: 100vw;
  display: flex;
  color: ${theme.light.textColor};
  z-index: 3;
  overflow: hidden;
`

const Intro = styled.div`
  padding: 10%;
  display: flex;
  flex-direction: column;
  max-width: 850px;

  > * {
    margin: 15px 0;
  }
`

const Main = () => {
  return (
    <MainStyle>
      <Intro>
        <Image src={Avatar} alt="My Avatar" width="20vmin" rounded />
        <LandingParagraph>
          I'm Haneen — a developer and designer based in India. I started off my
          career as a web designer, but later I found out that my interest was
          in creating, designing, and building new things independenlty. I also
          love reading books and writing articles.
        </LandingParagraph>

        <TextField />
        <Links />
      </Intro>
    </MainStyle>
  )
}

export default Main
