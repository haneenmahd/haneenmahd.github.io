import React, { PureComponent } from 'react';
import styled from "styled-components";
import Logo from '../assets/jsx/Logo';

const Container = styled.nav`
  height: 100px;
  width: 100vw;
`;

export default class NavBar extends PureComponent {
  render() {
    return (
      <Container>
        <Logo />
      </Container>
    );
  }
}
