import React, { Component } from 'react';
import styled from "styled-components";
import Links from './Links';
import { GitHub, Compass, Dribbble, Instagram, Twitter } from 'react-feather';

const MainStyle = styled.article`
    min-height: 90vh;
    max-width: 100vw;
    color: #fafafa;
`;

const Intro = styled.div`
    text-align: left;
    padding: 100px 10%;

    h2 {
        font-size: 350%;
        font-weight: 800;
        margin: 6px 0;
    }

    h4 {
        font-size: 120%;
        color: #c1c1c1;
        font-weight: 600;
        margin: 6px 0;
    }
`;

export default class Main extends Component {
  render() {
    return (
        <MainStyle>
            <Intro>
                <h2>Hi, I'm Haneen 👋</h2>
                <h4>An aspiring full-stack developer and a UI/UX Designer.</h4>

                <Links />
            </Intro>
        </MainStyle>
    );
  }
}
