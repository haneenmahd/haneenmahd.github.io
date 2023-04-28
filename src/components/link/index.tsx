import * as React from "react"
import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"
import ColorStyles from "../styles/ColorStyles"

const LinkStyle = styled(GatsbyLink)`
    color: ${ColorStyles.black};
    font-size: 18px;
    font-weight: 400;
    padding: 3px 8px;
    border: 1px solid transparent;
    transition: color 200ms, background-color 150ms;

    &:hover {
       color: ${ColorStyles.secondaryGray};
    }

    &.is-active {
        background-color: ${ColorStyles.secondaryGray}30;
        border-radius: 10px;
        border-color: ${ColorStyles.tertiaryGray};
    }

    &.is-active:hover {
        color: ${ColorStyles.black};
    }
`

interface LinkProps {
    to: string
    target?: "_blank" | "_self"
    noActive?: boolean
    children: ReactChildren
}

const Link: React.FC<LinkProps> = ({
    to,
    target,
    noActive,
    children
}) => (
    <LinkStyle to={to} target={target} activeClassName={noActive ? "" : "is-active"}>
        {children}
    </LinkStyle>
)

export default Link