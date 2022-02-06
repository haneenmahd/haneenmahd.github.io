import styled from "styled-components";
import Avatar from "../assets/png/Avatar.png";
import ClickToSeeWork from "./ClickToSeeWork";
import MyTechStack from "./MyTechStack";

const MainContainer = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px 234px;
    background: rgba(0, 0, 0, 0.538);

    * {
        margin: 8px 0;
    }

    @media screen and (max-width: 1250px) {
       
        backdrop-filter: blur(50px);
        -webkit-backdrop-filter: blur(50px);
    }

    @media screen and (max-width: 900px) {
        padding: 10%;
    }
`;

const MainAvatar = styled.img`
    height: 290px;
    width: 290px;
    border-radius: 100%;
    filter: drop-shadow(0px 19px 29px rgba(0, 0, 0, 0.12));
`;

const MainHeader = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 60px;

    color: #FFFFFF;

    text-shadow: 0px 19px 18px rgba(0, 0, 0, 0.02);
`;

const SubHeading = styled(MainHeader)`
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 35px;
    text-align: center;
    color: #dcdcdc;
`;

export default function Main() {
  return (
    <MainContainer>
        <MainAvatar src={Avatar} alt="Haneen Mahdin's Avatar" />
        <MainHeader>Hello, I am Haneen Mahdin</MainHeader>
        <SubHeading>
            I am a great hardworker who practices constantly to build and produce great piece of software. I have worked around with Full stack Applications for a 3+ years and a OpenSource developer too.
        </SubHeading>
        <ClickToSeeWork />
        <MyTechStack />
    </MainContainer>
  );
}