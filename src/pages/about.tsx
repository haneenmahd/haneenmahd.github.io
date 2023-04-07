import { PageProps } from "gatsby"
import * as React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import AboutHero from "../components/ui/hero/AboutHero"

const Wrapper = styled.div`
  min-height: calc(100vh - 100px);
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding-top: 10rem;
`

const AboutPage: React.FC<PageProps> = props => {
    return (
        <Layout>
            <Wrapper>
                <AboutHero />
            </Wrapper>
        </Layout>
    )
}

export default AboutPage