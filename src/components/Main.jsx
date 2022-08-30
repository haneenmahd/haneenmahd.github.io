import React, { useEffect, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import theme from '../theme'
import Links from './Links'
import Image from './Image'
import { LandingParagraph, LargeHeading } from './Text'
import Work from '../pages/Work'
import Avatar from '../assets/img/profile_pic.jpeg'

const MainStyle = styled.article`
  position: relative;
  min-height: 90vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${theme.light.textColor};
  z-index: 3;
  overflow: hidden;
`

const Intro = styled.div`
  position: relative;
  padding: 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  max-width: 100vw;

  > * {
    margin: 15px 0;
  }

  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`

const ColorfulTextAnimation = keyframes`
  0% {
    background-position: -500px;
  }
  
  50% {
    background-position: 0;
  }

  100% {
    background-position: 500px;
  }
`

const ColorfulText = styled.b`
  color: transparent;
  background: linear-gradient(45deg, #c4c4c4 -30px, #222);
  background-clip: text;
  background-position: -500px;
  animation: ${ColorfulTextAnimation} 20s linear infinite;
  animation-direction: normal;
  animation-fill-mode: forwards;
`

const MaskedContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  transition: 300ms ease;

  ${(p) =>
    p.focused
      ? css`
          filter: grayscale(0);
        `
      : css`
          filter: grayscale(0.6);
        `}
`

const Main = () => {
  const [isWorkFocused, setWorkFocus] = useState(false)

  useEffect(() => {
    window.onscroll = (e) => {
      if (window.scrollY > 210 && window.scrollY < 700) {
        setWorkFocus(true)
      } else {
        setWorkFocus(false)
      }
    }
  }, [])

  return (
    <MainStyle>
      <Intro>
        <Image
          height="200px"
          width="200px"
          url={Avatar}
          alt="A photo of me"
          blob
        />
        <LandingParagraph>
          <ColorfulText>Haneen Mahdin</ColorfulText> is a full-stack developer
          and designer building softwares and tools that improve our day-to-day
          workflow. He recreates the definition of beautiful with{' '}
          <b style={{ fontWeight: 500, fontStyle: 'oblique' }}>
            rich accessibility, aesthetics, rich detail and functionality.
          </b>
        </LandingParagraph>
      </Intro>

      <MaskedContainer focused={isWorkFocused}>
        <Work />
      </MaskedContainer>
    </MainStyle>
  )
}

export default Main
