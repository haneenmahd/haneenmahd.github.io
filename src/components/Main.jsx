import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import Image from './Image'
import theme from '../theme'
import Links from './Links'
import Avatar from '../assets/img/avatar.svg'

const MainStyle = styled.article`
  position: relative;
  min-height: 90vh;
  max-width: 100vw;
  display: flex;
  color: ${theme.light.textColor};
  padding-top: 100px;
  z-index: 3;
  overflow: hidden;
`

const Intro = styled.div`
  padding: 100px 10%;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 350%;
    font-weight: 800;
    margin: 6px 0;
  }

  h4 {
    font-size: 120%;
    color: ${theme.light.lightText};
    font-weight: 600;
    margin: 6px 0;
  }
`

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    const { props } = this
    return (
      <MainStyle theme={props.theme}>
        <Intro theme={props.theme}>
          <Image src={Avatar} alt="My Avatar" width="20vmin" rounded />
          <h2>Hi, I'm Haneen 👋</h2>
          <h4>
            An full-stack developer and a UI/UX Designer working on awesome
            stuff by the day.
          </h4>

          <Links theme={props.theme} />
        </Intro>
      </MainStyle>
    )
  }
}
