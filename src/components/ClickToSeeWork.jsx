import styled from "styled-components";
import NavigateIcon from "../assets/jsx/Navigate";

const ClickToSeeButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 30px;
    background: rgba(255, 255, 255, 0.13);
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
    border-radius: 63px;
    border: none;
    outline: none;
    cursor: pointer;
    margin: 20px 0;
    border: 3px solid transparent;
    transition: all .3s ease-in-out;
    
    p {
        color: #fff;
        font-size: 22px;
        margin: 0 10px;
    }

    &:hover {
        background: rgba(255, 255, 255, 0.262);
        box-shadow: 0px 23px 65px rgba(0, 0, 0, 0.14);
        border: 3px solid #ffffff75;
    }

    @media screen and (max-width: 600px) {
        p {
            font-size: 20px;
        }
    }
`;

const ClickToSeeWork = () => {
    return (
        <ClickToSeeButton>
            <NavigateIcon />
            <p>Click to see my awesome works 🎉!</p>
        </ClickToSeeButton>
    );
}

export default ClickToSeeWork;