import * as React from "react"
import styled from "styled-components"
import NavBar from "../ui/navbar"
import Footer from "../ui/footer";
import GetInTouch from "../ui/get-in-touch";

const Wrapper = styled.div``

const SpacedWrapper = styled.div`
    height: 100%;
    padding: 0 3.5rem;
    padding-top: 29px;
    max-width: 100vw;

    @media screen and (max-width: 1024px) {
        padding: 0;
        padding-top: 29px;
    }

    @media screen and (max-width: 600px)  {
        margin: 0;
        padding-top: 29px;
    }
`

interface LayoutProps {
    children: ReactChildren;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                entry.target.classList.toggle("show", entry.isIntersecting)
            })
        })

        const hiddenElements = document.querySelectorAll(".hidden")
        hiddenElements.forEach(el => observer.observe(el))
    }, [])
    return (
        <Wrapper>
            <SpacedWrapper>
                <NavBar />

                {children}
            </SpacedWrapper>

            <GetInTouch />
            <Footer />
        </Wrapper>
    )
}

export default Layout