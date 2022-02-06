import React, { Component } from 'react';
import styled from "styled-components";
import CommonLink from "./CommonLink";
import { Disc, GitHub, Activity, Compass } from 'react-feather';

const MainStyle = styled.article`
    min-height: calc(100vh - 100px);
    max-width: 100vw;
    color: #fafafa;
`;

const Intro = styled.div`
    text-align: left;
    padding: 100px 10%;

    * {
        margin: 6px 0;
    }

    h2 {
        font-size: 350%;
        font-weight: 800;
    }

    h4 {
        font-size: 120%;
        color: #c1c1c1;
        font-weight: 600;
    }
`;

const Links = styled.aside`
    padding: 10px 0;
    display: flex;
    align-items: flex-start;
`;

const Link = styled.a`
    ${CommonLink}
    text-align: left;
    font-size: 24px;
    margin: 0;
    margin-right: 20px;

    svg {
        stroke: #d1d1d1;
        fill: #ffffff37;
        transition: 0.3s cubic-bezier(0.35, 0.07, 0.38, 1.01);
    }

    &:hover svg {
        stroke: #a9a9a9;
        fill: #fff;
        transform: scale(1.2);
    }
`;

export default class Main extends Component {
  render() {
    return (
        <MainStyle>
            <Intro>
                <h2>Hi, I'm Haneen 👋</h2>
                <h4>An aspiring full-stack developer and a UI/UX Designer.</h4>

                <Links>
                    <Link href='/'><GitHub /></Link>
                    <Link href='/'><Disc /></Link>
                    <Link href='/'><Activity /></Link>
                    <Link href='/'><Compass /></Link>
                </Links>
            </Intro>
        </MainStyle>
    );
  }
}
