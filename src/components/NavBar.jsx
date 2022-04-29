import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/jsx/Logo'
import MenuHam from './MenuHam'
import NavLink from './NavLink'

const Container = styled.nav`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0;
  z-index: 1000;

  /* The max width should always match the min width used by menu to stop displaying. */
  @media screen and (max-width: 580px) {
    justify-content: space-between;
  }
`

const Links = styled.div`
  /* The max width should always match the min width used by menu to stop displaying. */
  @media screen and (max-width: 580px) {
    display: none;
  }
`

const NavBar = ({ setMenuOpen }) => {
  return (
    <Container>
      <Logo />

      <Links>
        <NavLink to="/work" text="Work" />
        <NavLink to="/blog" text="Blog" />
        <NavLink to="/store" text="Store" />
        <NavLink to="/hire-me" text="Hire me" />
      </Links>

      <MenuHam setMenuOpen={setMenuOpen} />
    </Container>
  )
}

export default NavBar
