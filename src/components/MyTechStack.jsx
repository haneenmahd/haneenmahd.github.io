import React from 'react';
import styled from "styled-components";
import { keyframes } from 'styled-components';

const Container = styled.div`
    min-height: 50vh;
    max-width: 100vw;
    padding: 80px;
    background: rgba(233, 170, 170, 0.39);
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
    border-radius: 30px;
    margin-top: 50px;
    box-shadow: -3px 50px 100px rgba(233, 170, 170, 0.39);

    @media screen and (max-width: 600px) {
        padding: 40px 20px;
        background: #fff;
    }
`;

const Header = styled.h1`
    text-align: left;
    font-size: 40px;
    font-weight: 800;
    color: #ffffff;

    @media screen and (max-width: 600px) {
        font-size: 28px;
        text-align: center;
        color: #0e0d0d;
    }
`;

const Paragraph = styled.p`
    font-size: 180%;
    text-align: left;
    color: #353535;
    margin-bottom: 30px;

    @media screen and (max-width: 600px) {
        color: #3a3838;
    }
`;

const ProgressAnimation = keyframes`
    from {
        width: 0;
    }
`;

const Progress = styled.div`
    position: relative;
    height: 40px;
    width: 100%;
    background: #b86d6d75;
    border-radius: 40px;
    overflow: hidden;

    &::before {
        content: "${p => p.altText}";
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: ${p => p.value}%;
        background: #b86d6d;
        color: #fff;
        position: absolute;
        top: 0;
        left: 0;
        animation: ${ProgressAnimation} 1s ease-in-out;
    }
`;

const SkillContainer = styled.div`
    text-align: left;
    margin: 30px 0;

    @media screen and (max-width: 600px) {
        text-align: center;
    }
`;

export default function MyTechStack() {
  return (
      <Container>
         <Header>My skills 🚀</Header>
         <Paragraph>I usually spend time working on these tech stacks and these are some of I would like to work on in the future</Paragraph>
         <SkillContainer>
             <h4>HTML, CSS, Javascript</h4>
             <Progress altText="Expert" value={100} />
         </SkillContainer>
         <SkillContainer>
             <h4>Git</h4>
             <Progress altText="Expert" value={100} />
         </SkillContainer>
         <SkillContainer>
             <h4>GitHub</h4>
             <Progress altText="Expert" value={100} />
         </SkillContainer>
         <SkillContainer>
             <h4>UI/UX Design</h4>
             <Progress altText="Expert" value={100} />
         </SkillContainer>
         <SkillContainer>
             <h4>NodeJS</h4>
             <Progress altText="Expert" value={97} />
         </SkillContainer>
         <SkillContainer>
             <h4>ReactJS</h4>
             <Progress altText="Expert" value={95} />
         </SkillContainer>
         <SkillContainer>
             <h4>MongoDB</h4>
             <Progress altText="Expert" value={91} />
         </SkillContainer>
         <SkillContainer>
             <h4>Typescript</h4>
             <Progress altText="Expert" value={89} />
         </SkillContainer>
         <SkillContainer>
             <h4>React Native/Expo</h4>
             <Progress altText="Better than ever 🤘" value={80} />
         </SkillContainer>
         <SkillContainer>
             <h4>Python</h4>
             <Progress altText="Intermediate" value={55} />
         </SkillContainer>
         <SkillContainer>
             <h4>C/C++</h4>
             <Progress altText="Intermediate" value={40} />
         </SkillContainer>
         <SkillContainer>
             <h4>Swift</h4>
             <Progress value={12} />
         </SkillContainer>
      </Container>
  );
}
