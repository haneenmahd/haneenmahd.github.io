import React, { Component } from 'react'
import styled from 'styled-components'
import theme from '../theme/theme'
import Links from './Links'

const MainStyle = styled.article`
  min-height: 90vh;
  max-width: 100vw;
  color: ${(props) =>
    props.theme === 'dark' ? theme.dark.textColor : theme.light.textColor};
  padding-top: 100px;
`

const Intro = styled.div`
  text-align: left;
  padding: 100px 10%;

  h2 {
    font-size: 350%;
    font-weight: 800;
    margin: 6px 0;
  }

  h4 {
    font-size: 120%;
    color: ${(props) =>
      props.theme === 'dark' ? theme.dark.lightText : theme.light.lightText};
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
          <h4>An aspiring full-stack developer and a UI/UX Designer.</h4>

          <Links theme={props.theme} />
        </Intro>
      </MainStyle>
    )
  }
}
