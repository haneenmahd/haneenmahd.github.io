import * as React from "react"
import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"
import ColorStyles from "../../styles/ColorStyles"

const LinkStyle = styled(GatsbyLink)`
    color: ${ColorStyles.black};
    font-size: 18px;
    font-weight: 400;
    transition: color 200ms;

    &:hover {
       color: ${ColorStyles.secondaryGray};
    }
`

interface LinkProps {
    to: string
    target?: "_blank" | "_self"
    children: ReactChildren
}

const Link: React.FC<LinkProps> = ({
    to,
    target,
    children
}) => (
    <LinkStyle to={to} target={target}>
        {children}
    </LinkStyle>
)

export default Link