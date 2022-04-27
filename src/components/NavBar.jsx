import React, { Component, useState } from 'react'
import styled from 'styled-components'
import Logo from '../assets/jsx/Logo'
import NavLink from './NavLink'

const Container = styled.nav`
  height: 100px;
  width: 100vw;
  display: flex;
  align-items: center;
  padding: 0;
  z-index: 1000;
`

const NavBar = () => {
  return (
    <Container>
      <Logo />

      <NavLink to="/work" text="Work" />
      <NavLink to="/blog" text="Blog" />
      <NavLink to="/store" text="Store" />
      <NavLink to="/hire-me" text="Hire me" />
    </Container>
  )
}

export default NavBar
