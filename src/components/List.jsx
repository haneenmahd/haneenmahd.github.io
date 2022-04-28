import styled from 'styled-components'

const ListStyle = styled.ul`
  padding: 0 20px;
`

export const ListItem = styled.li`
  padding: 0;
  font-size: 16px;
  line-height: 2rem;

  &::marker {
    color: #686868;
  }
`

export default function List({ children }) {
  return <ListStyle>{children}</ListStyle>
}
