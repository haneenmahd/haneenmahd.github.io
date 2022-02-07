import React, { Component } from 'react';
import styled from "styled-components";
import Logo from '../assets/jsx/Logo';
import NavLink from './NavLink';

const Container = styled.nav`
  height: 100px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0;
  position: fixed; top: 0;
  background-color: #111;
  z-index: 1000;
`;

export default class NavBar extends Component {
  render() {
    return (
      <Container>
        <Logo />

        <div style={{ width: "auto", maxWidth: "100%" }}>
          <NavLink href='/' text='projects' />
          <NavLink href='/' text='about me' />
        </div>
      </Container>
    );
  }
}
