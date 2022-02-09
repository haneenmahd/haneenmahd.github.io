import React, { Component, useState } from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'
import Logo from '../assets/jsx/Logo'
import theme from '../theme/theme'
import NavLink from './NavLink'
import ThemeSwitch from './ThemeSwitch'

const Container = styled.nav`
  height: 100px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0;
  position: fixed;
  top: 0;
  background-color: ${(props) =>
    props.theme === 'dark'
      ? theme.dark.navBackground
      : theme.light.navBackground};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 1000;
`

const NavLinks = styled.div`
  width: auto;
  max-width: 100%;

  @media screen and (max-width: 700px) {
    width: 90%;
    text-align: center;

    a {
      font-size: 14px;
      margin: 0 4px;
    }
  }
`

export default class NavBar extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    const { state, props } = this

    return (
      <Container theme={props.theme}>
        <Logo theme={props.theme} />

        <NavLinks>
          <NavLink theme={props.theme} to="/projects" text="projects" />
          <NavLink theme={props.theme} to="/about" text="about me" />
        </NavLinks>

        <ThemeSwitch theme={props.theme} setTheme={props.setTheme} />
      </Container>
    )
  }
}
