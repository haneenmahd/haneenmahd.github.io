import React, { Component } from 'react';
import styled from "styled-components";

const MainStyle = styled.article`
    min-height: 100vh;
    max-width: 100vw;
    padding: 20px;
    color: #fafafa;
`;

const Intro = styled.div`
    text-align: left;
    padding: 20px 40px;

    * {
        margin: 6px 0;
    }

    h2 {
        font-size: 300%;
        font-weight: 800;
    }

    h4 {
        font-size: 120%;
        color: #c1c1c1;
        font-weight: 600;
    }
`;

export default class Main extends Component {
  render() {
    return (
        <MainStyle>
            <Intro>
                <h2>Haneen Mahdin</h2>
                <h4>An aspiring full-stack developer and a UI/UX Designer.</h4>
            </Intro>
        </MainStyle>
    );
  }
}
