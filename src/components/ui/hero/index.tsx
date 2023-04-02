import * as React from "react"
import styled from "styled-components"
import { H1, P } from "../../styles/TextStyles"
import SocialLinks from "../../links/SocialLinks"

const Wrapper = styled.main`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    gap: 60px;

    @media screen and (max-width: 1024px) {
        gap: 30px;
        width: 90%;
        margin: 0 auto;
    }

    @media screen and (max-width: 600px) {
        width: 90%;
        flex-direction: column;
        gap: 30px;
    }
`

const DescriptionBlock = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 1024px) {
        gap: 30px;
        padding: 0;
    }

    @media screen and (max-width: 600px) {
        gap: 15px;
    }
`

interface HeroProps {

}

const Hero: React.FC<HeroProps> = (props) => {
    return (
        <Wrapper>
            <H1>My name is Haneen Mahdin, I'm a <i>software developer and designer </i> working and living in India.</H1>

            <DescriptionBlock>
                <P>I help brands to create memorable experiences through expressive design.</P>

                <SocialLinks />
            </DescriptionBlock>
        </Wrapper>
    )
}

export default Hero