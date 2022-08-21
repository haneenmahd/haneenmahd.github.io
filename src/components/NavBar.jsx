import React from 'react'
import { Link as NativeLink } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.header`
  max-width: 100vw;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 560px) {
    justify-content: center;
  }
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 0.5rem;
  background-color: #111;
  border-radius: 0.5rem;
  box-shadow: 0 3px 26px 0 #1919191a;

  @media screen and (max-width: 560px) {
    justify-content: space-around;
    width: 90%;
  }
`

const Link = styled(NativeLink)`
  margin: 0 0.2rem;
  padding: 0.5rem;
  color: #fff;
  text-decoration: none;
  border-radius: 0.5rem;
  transition: 300ms ease;

  &:hover {
    background-color: #555;
  }

  &:focus {
    background-color: #555;
    outline: none;
  }

  @media screen and (max-width: 560px) {
    padding: 0.5rem;
  }
`

export default function NavBar() {
  return (
    <Container>
      <Nav>
        <Link tabIndex={1} to="/work">
          Work
        </Link>
        <Link tabIndex={2} to="/contact">
          Contact
        </Link>
      </Nav>
    </Container>
  )
}
