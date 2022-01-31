import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    min-height: 50vh;
    max-width: 100vw;
    padding: 40px 80px;
    background: #faeded;
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
    border-radius: 30px;
    margin-top: 50px;
    box-shadow: 0px 19px 29px rgba(0, 0, 0, 0.12);

    @media screen and (max-width: 600px) {
        padding: 40px 20px;
        background: #fff;
    }
`;

const Header = styled.h1`
    text-align: left;
    font-size: 40px;
    font-weight: 800;
    color: #b86d6d;

    @media screen and (max-width: 600px) {
        font-size: 28px;
        text-align: center;
    }
`;

const Paragraph = styled.p`
    font-size: 100%;
    color: #4b2727;
`;

export default function MyTechStack() {
  return (
      <Container>
         <Header>My Tech Stack 🚀</Header>
         <Paragraph>I usually spend time working on these tech stacks and these are some of I would like to work on in the future</Paragraph>
      </Container>
  );
}
