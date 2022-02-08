import React, { Component } from 'react';
import styled from "styled-components";
import Logo from '../assets/jsx/Logo';
import theme from '../theme/theme';
import NavLink from './NavLink';

const Container = styled.nav`
  height: 100px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0;
  position: fixed; top: 0;
  background-color: ${props => props.theme === "dark" ? theme.dark.navBackground : theme.light.navBackground};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 1000;
`;

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { state, props } = this;

    return (
      <Container theme={props.theme}>
        <Logo theme={props.theme} />

        <div style={{ width: "auto", maxWidth: "100%" }}>
          <NavLink to='/projects' text='projects' />
          <NavLink to='/about' text='about me' />
        </div>
      </Container>
    );
  }
}
