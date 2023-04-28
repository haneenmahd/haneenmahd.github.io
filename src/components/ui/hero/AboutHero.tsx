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
        max-width: 100%;
        gap: 30px;
        padding: 0 1.5rem;
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
                    I am Haneen Mahdin, an Indian product designer and software developer with a focus on frontend development and UI/UX design. I am particularly passionate about creating innovative products that address human needs and have a strong eye for detail when it comes to designing for iOS.
                </HeroP>
                <HeroP className="hidden" index={1}>
                    Throughout my career, I have had the pleasure of working with a diverse range of clients, including small and mid-sized companies, as well as individuals. I have collaborated with them on various design and development projects, leveraging my expertise.
                </HeroP>
                <HeroP className="hidden" index={2}>
                    Although my focus in on building user interfaces that enhance user experience, I also have experience developing full-stack applications, mobile apps, and websites. have mastered various cutting-edge technologies, including NextJS, MongoDB, Prisma, React Native, and Expo. My knowledge in these areas has given me the ability to tackle complex projects and build amazing things.
                </HeroP>
                <HeroP className="hidden" index={3}>
                    In addition to my technical skills, I have a creative side and enjoy creating templates for Notion and Framer, as well as designing wallpapers. When I am not working on these projects, I enjoy reading books, writing articles, and contributing to open-source projects.
                    In addition to coding, I spend my time reading books, writing articles, contributing to open-source projects and exploring videography.
                </HeroP>

                <SocialLinks />
            </DescriptionBlock>
        </Wrapper >
    )
}

export default AboutHero