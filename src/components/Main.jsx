import React, { useEffect, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
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

const Main = () => {
  return (
    <MainStyle>
      <Intro>
        <Image
          height="100px"
          width="100px"
          url={Avatar}
          alt="A photo of me"
          rounded
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
    </MainStyle>
  )
}

export default Main
