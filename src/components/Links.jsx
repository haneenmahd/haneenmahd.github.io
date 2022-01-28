import styled from "styled-components";
import DiscordIcon from "../assets/jsx/Discord";
import GithubIcon from "../assets/jsx/Github";
import InstagramIcon from "../assets/jsx/Instagram";
import TwitterIcon from "../assets/jsx/Twitter";

const LinksContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 0;
    transform: translate(0%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 74px 39px;
    background: rgba(255, 255, 255, 0.17);
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
    border-radius: 0px 50px 50px 0px;
    z-index: 100;
    box-shadow: 0px 23px 65px rgba(0, 0, 0, 0.14);

    @media screen and (max-width: 900px) {
        position: relative;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0%);
        border-radius: 0;
        width: 100vw;
        padding: 0;
        justify-content: space-around;
        flex-direction: row;
    }
`;

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    margin: 30px 0;

    svg path#main-path {
        fill: #e4e4e4;
        transition: all .3s ease-in-out;
    }

    &:hover {
        svg path#main-path {
            fill: #fff;
        }
    }

    @media screen and (max-width: 600px) {
        svg {
            height: 50px; width: 50px;
        }   
    }
`;

export default function Links() {
    return (
        <LinksContainer>
            <Link target="_blank" href="https://discord.com">
                <DiscordIcon />
            </Link>

            <Link target="_blank" href="https://github.com/haneenmahd">
                <GithubIcon />
            </Link>

            <Link target="_blank" href="https://instagram.com/haneenmahdin">
                <InstagramIcon />
            </Link>

            <Link target="_blank" href="https://twitter.com/HaneenMahdin">
                <TwitterIcon />
            </Link>
        </LinksContainer>
    );
}