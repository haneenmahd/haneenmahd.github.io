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

  font-size: 14px;
  font-weight: 600;
  text-align: center;
  color: #656d78;
  padding: 0;

  &:hover {
    color: #38393a;
  }

  ${(p) =>
    p.highlighted &&
    css`
      padding: 8px 15px;
      border-radius: 5px;
      background-color: #122;
      color: #fafafa;

      &:hover {
        color: #d3d3d3;
      }
    `}

  ${(p) =>
    p.mode === 'dark' &&
    css`
      color: #919191;

      &:hover {
        color: #d3d3d3;
      }
    `}
`

export default CommonLink
