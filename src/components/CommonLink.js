import { css } from 'styled-components'
import theme from '../theme'

/**
 * Common styles for link
 */
const CommonLink = css`
  position: relative;
  color: ${theme.light.linkColor};
  text-decoration: none;
  margin: 0 14px;
  padding: 4px 8px;
  transition: 0.3s cubic-bezier(0.98, 0.07, 0.47, 0.74);
`

export default CommonLink
