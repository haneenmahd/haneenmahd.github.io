import * as React from "react"
import styled from "styled-components"
import { H1, P } from "../../styles/TextStyles"
import SocialLinks from "../../links/SocialLinks"

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    max-width: 100%;
    gap: 60px;

    @media screen and (max-width: 1024px) {
        gap: 30px;
        width: 100%;
        padding: 0 60px;
    }

    @media screen and (max-width: 600px) {
        width: 90%;
        gap: 30px;
    }
`

const DescriptionBlock = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;

    @media screen and (max-width: 1024px) {
        gap: 30px;
        padding: 0;
    }

    @media screen and (max-width: 600px) {
        gap: 15px;
    }
`

interface HeroPProps {
    index: number
}

const HeroP = styled(P) <HeroPProps>`
    transition-delay: ${p => p.index * 120}ms;
`

interface AboutHeroProps {

}

const AboutHero: React.FC<AboutHeroProps> = (props) => {
    return (
        <Wrapper>
            <H1 className="hidden">My name is Haneen Mahdin, I'm a <i>software developer and designer </i> working and living in India.</H1>

            <DescriptionBlock>
                <HeroP className="hidden" index={0}>
                    Growing up in India, I was captivated by the world of computers and the internet. As an avid gamer, I couldn't help but wonder about the complex systems behind the video games I played, which ultimately led me to the exciting world of coding.
                </HeroP>
                <HeroP className="hidden" index={1}>
                    Learning to code was a pivotal moment in my life, opening the doors to endless possibilities. As I built my projects, I became increasingly amazed by the power of web browsers and how they connected people across the globe. However, I quickly realized that my design and UI skills needed improvement to create more visually stunning and user-friendly interfaces. That's when I decided to hone my skills in UI/UX design.
                </HeroP>
                <HeroP className="hidden" index={2}>
                    Continuing my journey, I delved deeper into backend development and mastered various cutting-edge technologies, including NextJS, MongoDB, Prisma, React Native, Expo, SwiftUI, and C/C++. Each new skill I acquired gave me an increased level of confidence to take on more challenging projects and build amazing things.
                </HeroP>
                <HeroP className="hidden" index={3}>
                    In addition to coding, I spend my time reading books, writing articles, contributing to open-source projects and exploring videography.
                </HeroP>

                <SocialLinks />
            </DescriptionBlock>
        </Wrapper >
    )
}

export default AboutHero