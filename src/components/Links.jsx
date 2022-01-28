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
`;

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    margin: 30px 0;
`;

const LinkIcon = styled.img`
    height: 100px;
    width: 100px;
`;

export default function Links() {
    return (
        <LinksContainer>
            <Link>
                <DiscordIcon />
            </Link>

            <Link>
                <GithubIcon />
            </Link>

            <Link>
                <InstagramIcon />
            </Link>

            <Link>
                <TwitterIcon />
            </Link>
        </LinksContainer>
    );
}