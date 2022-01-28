import styled from "styled-components";
import discordIcon from "../assets/svg/discord.svg";
import githubIcon from "../assets/svg/github.svg";
import instagramIcon from "../assets/svg/instagram.svg";
import twitterIcon from "../assets/svg/twitter.svg";

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
                <LinkIcon src={discordIcon} alt="Discord channel of Haneen Mahdin" />
            </Link>

            <Link>
                <LinkIcon src={githubIcon} alt="GitHub profile of Haneen Mahdin" />
            </Link>

            <Link>
                <LinkIcon src={instagramIcon} alt="Instagram profile of Haneen Mahdin" />
            </Link>

            <Link>
                <LinkIcon src={twitterIcon} alt="Twitter handle of Haneen Mahdin" />
            </Link>
        </LinksContainer>
    );
}