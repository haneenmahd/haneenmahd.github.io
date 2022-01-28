import styled from "styled-components";
import NavigateIcon from "../assets/jsx/Navigate";

const ClickToSeeButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 19px 30px;
    background: rgba(255, 255, 255, 0.13);
    border-radius: 63px;
    border: none;
    outline: none;
    cursor: pointer;
    margin: 20px 0;
    transition: all .3s ease-in-out;
    
    p {
        color: #fff;
        font-size: 22px;
        margin: 0 10px;
    }

    &:hover {
        background: rgba(255, 255, 255, 0.262);
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