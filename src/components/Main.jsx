import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { keyframes } from 'styled-components'
import theme from '../theme'
import Links from './Links'

const MainStyle = styled.article`
  position: relative;
  min-height: 90vh;
  max-width: 100vw;
  align-items: center;
  color: ${theme.light.textColor};
  padding-top: 100px;
  z-index: 3;
  overflow: hidden;
`

const Intro = styled.div`
  text-align: left;
  padding: 100px 10%;
  display: flex;
  align-items: center;
  flex-direction: column;

  * {
    text-align: center;
  }

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
