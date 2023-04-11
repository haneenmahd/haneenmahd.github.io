import { HeadFC, PageProps } from "gatsby"
import * as React from "react"
import styled from "styled-components"
import Grid from "../components/grid"
import Layout from "../components/layout"
import data from "../data/shopData"

const ShopPage: React.FC<PageProps> = props => {
    return (
        <Layout>
            <Grid title="Shop" data={data} />
        </Layout>
    )
}


export const Head: HeadFC = () => <title>Shop ✶ Haneen</title>

export default ShopPage