import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import colors from "../../styles/ColorStyles"
import Icon from "../../../images/icon.png"

const Wrapper = styled.nav`
    height: 22px;
    max-width: 100%;
    display: flex;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const Block = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 13px;

    > div {
        font-size: 18px; 
        font-weight: 400; 
        line-height: 22px; 
        letter-spacing: 0em; 
        text-align: left;
    }
`

const Logo = styled.img`
    height: 30px;
    width: 30px;
    cursor: pointer;
    transition: opacity 200ms, rotate 150ms;

    &:hover {
        opacity: 0.6;
        rotate: -50deg;
    }
`

const LinkBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;

    > a {
        color: ${colors.black};
        font-size: 18px;
        font-weight: 400;
        transition: color 200ms;

        &:hover {
            color: ${colors.secondaryGray};
        }
    }
`

interface NavBarProps {

}

const NavBar: React.FC<NavBarProps> = ({ }) => {
    return (
        <Wrapper>
            <Block>
                <Link to="/"><Logo src={Icon} alt="Logo" /></Link>
                <div>Haneen Mahdin</div>
            </Block>

            <LinkBlock>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/work">Work</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </LinkBlock>
        </Wrapper>
    )
}

export default NavBar