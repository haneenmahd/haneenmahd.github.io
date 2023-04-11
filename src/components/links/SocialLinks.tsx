import * as React from "react"
import styled from "styled-components"
import data from "../../data/socialData.json"
import ColorStyles from "../styles/ColorStyles"

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 39px;

    @media screen and (max-width: 1024px) {
        gap: 30px;
    }

    @media screen and (max-width: 600px) {
        gap: 30px;
    }
`

interface LinkProps {
    index: number
}

const Link = styled.a.attrs({
    target: "_blank",
    rel: "noopener"
}) <LinkProps>`
    color: ${ColorStyles.black};
    font-weight: 400;
    font-size: 20px;
    line-height: 40px;
    transition: opacity 400ms;
    transition-delay: ${p => p.index * 120}ms;

    &:hover {
        color: ${ColorStyles.gray};
    }

    @media screen and (max-width: 1024px) {
        font-size: 25px;
    }

    @media screen and (max-width: 600px) {
        font-size: 20px;
    }
`

interface SocialLinksProps {

}

const SocialLinks: React.FC<SocialLinksProps> = (props) => {
    return (
        <Wrapper>
            {data.map((social, index) => (
                <Link
                    className="hidden"
                    href={social.url}
                    index={index}
                    key={index}>
                    {social.name}
                </Link>
            ))}
        </Wrapper>
    )
}

export default SocialLinks