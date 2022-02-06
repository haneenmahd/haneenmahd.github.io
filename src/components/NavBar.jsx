import React, { PureComponent } from 'react';
import styled from "styled-components";
import Logo from '../assets/jsx/Logo';
import NavLink from './NavLink';

const Container = styled.nav`
  height: 100px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
`;

export default class NavBar extends PureComponent {
  render() {
    return (
      <Container>
        <Logo />

        <div style={{ width: "60%" }}>
          <NavLink href='/' text='projects' />
          <NavLink href='/' text='about me' />
          <NavLink href='/' text='links' />
        </div>
      </Container>
    );
  }
}
