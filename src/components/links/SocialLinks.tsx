import * as React from "react"
import styled from "styled-components"
import data from "../../data/socialData.json"
import colors from "../styles/ColorStyles"

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

const Link = styled.a.attrs({
    target: "_blank",
    rel: "noopener"
})`
    color: ${colors.black};
    font-weight: 400;
    font-size: 30px;
    line-height: 40px;
    transition: opacity 200ms;

    &:hover {
        color: ${colors.gray};
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
            {data.map(social => (
                <Link href={social.url}>
                    {social.name}
                </Link>
            ))}
        </Wrapper>
    )
}

export default SocialLinks