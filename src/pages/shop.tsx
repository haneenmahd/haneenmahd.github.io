import { PageProps } from "gatsby"
import * as React from "react"
import styled from "styled-components"
import Grid from "../components/ui/grid"
import Layout from "../components/layout"
import data from "../data/shopData.json"

const ShopPage: React.FC<PageProps> = props => {
    return (
        <Layout>
            <Grid title="Shop" data={data} />
        </Layout>
    )
}

export default ShopPage