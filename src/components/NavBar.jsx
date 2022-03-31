import React, { Component, useState } from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'
import Logo from '../assets/jsx/Logo'
import theme from '../theme'
import Links from './Links'
import NavLink from './NavLink'

const Container = styled.nav`
  height: 100px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
  position: fixed;
  top: 0;
  padding: 0 4%;
  background-color: ${theme.light.navBackground};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 1000;
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

        <NavLink theme={props.theme} to="/wallpapers" text="wallpapers" />
        <NavLink theme={props.theme} to="/about" text="about me" />
      </Container>
    )
  }
}
