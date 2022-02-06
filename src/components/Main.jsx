import React, { PureComponent } from 'react';
import styled from "styled-components";

const MainStyle = styled.article`
    min-height: 100vh;
    max-width: 100vw;
    padding: 20px;
    color: #fafafa;
`;

export default class Main extends PureComponent {
  render() {
    return (
        <MainStyle>
             <h2>Haneen Mahdin</h2>
        </MainStyle>
    );
  }
}
