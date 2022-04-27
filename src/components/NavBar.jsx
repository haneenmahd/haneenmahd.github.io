import React, { Component, useState } from 'react'
import styled from 'styled-components'
import Logo from '../assets/jsx/Logo'
import theme from '../theme'
import NavLink from './NavLink'

const Container = styled.nav`
  height: 100px;
  width: 100vw;
  display: flex;
  align-items: center;
  padding: 0;
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
      </Container>
    )
  }
}
