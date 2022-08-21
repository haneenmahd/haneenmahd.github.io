import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import theme from '../theme'
import Links from './Links'
import Image from './Image'
import { LandingParagraph, LargeHeading } from './Text'
import Avatar from '../assets/img/profile_pic.jpeg'

const MainStyle = styled.article`
  position: relative;
  min-height: 90vh;
  max-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.light.textColor};
  z-index: 3;
  overflow: hidden;
`

const Intro = styled.div`
  padding: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 850px;

  > * {
    margin: 15px 0;
  }
`

const ColorfulTextAnimation = keyframes`
  0% {
    background-position: -200px;
  }
  
  50% {
    background-position: 0;
  }

  100% {
    background-position: 200px;
  }
`

const ColorfulText = styled.b`
  color: transparent;
  background: linear-gradient(45deg, #c4c4c4 -30px, #222);
  background-clip: text;
  background-position: -200px;
  animation: ${ColorfulTextAnimation} 10s linear infinite;
  animation-direction: normal;
  animation-fill-mode: forwards;
`

const Main = () => {
  const [showTitle, setShowTitle] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShowTitle(true)
      } else {
        setShowTitle(false)
      }
    })
  }, [])

  return (
    <MainStyle>
      <Intro>
        <Image
          height="150px"
          width="150px"
          url={Avatar}
          alt="My Avatar"
          rounded
        />
        <LandingParagraph>
          I'm <ColorfulText>Haneen</ColorfulText> — a developer and designer
          based in <i>India</i>. I started off my career as a web designer, but
          later I found out that my interest was in creating, designing, and
          building new things independenlty. I also love reading books and
          writing articles.
        </LandingParagraph>
        <Links />
      </Intro>
    </MainStyle>
  )
}

export default Main
