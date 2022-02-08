import { css } from "styled-components";
import theme from "../theme/theme";

/**
 * Common styles for link
 */
const CommonLink = css`
  position: relative;
  color: ${props => props.theme === "dark" ? theme.dark.linkColor : theme.light.linkColor};
  text-decoration: none;
  margin: 0 8px;
  padding: 4px 8px;
  transition: 0.3s cubic-bezier(0.98, 0.07, 0.47, 0.74);
`;

export default CommonLink;