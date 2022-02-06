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
`;

export default class NavBar extends Component {
  render() {
    return (
      <Container>
        <Logo />

        <div>
          <NavLink href='/' text='projects' />
          <NavLink href='/' text='about me' />
        </div>
      </Container>
    );
  }
}
