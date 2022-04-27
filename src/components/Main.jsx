import React, { Component } from 'react'
import styled from 'styled-components'
import Image from './Image'
import { LandingParagraph } from '../components/Text'
import theme from '../theme'
import Links from './Links'
import Avatar from '../assets/img/profile_pic.jpg'

const MainStyle = styled.article`
  position: relative;
  min-height: 90vh;
  max-width: 100vw;
  display: flex;
  color: '${theme.light.textColor}';
  padding-top: 100px;
  z-index: 3;
  overflow: hidden;
`

const Intro = styled.div`
  padding: 100px 10%;
  display: flex;
  flex-direction: column;
  max-width: 850px;

  > * {
    margin: 15px 0;
  }
`

export default class Main extends Component {
  render() {
    return (
      <MainStyle>
        <Intro>
          <Image src={Avatar} alt="My Avatar" width="20vmin" rounded />
          <LandingParagraph>
            I'm Haneen — a developer and designer based in India. I started off
            my career as a web designer, but later I found out that my interest
            was in creating, designing, and building new things independenlty. I
            also love reading books and writing articles.
          </LandingParagraph>

          <Links />
        </Intro>
      </MainStyle>
    )
  }
}
