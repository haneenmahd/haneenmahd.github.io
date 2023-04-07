import { PageProps } from "gatsby"
import * as React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Grid from "../components/grid"
import data from "../data/workData.json"

const WorkPage: React.FC<PageProps> = props => {
    return (
        <Layout>
            <Grid title="Work" data={data} />
        </Layout>
    )
}

export default WorkPage