import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Blob from "../components/blob/HeroBlob"
import Hero from "../components/ui/hero"
import Projects from "../components/ui/projects/Projects"

const Wrapper = styled.div`
  height: calc(100vh - 100px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Blob />
      <Wrapper>

        <Hero />
      </Wrapper>
      <Projects />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
