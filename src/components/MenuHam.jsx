import { Menu as MenuIcon } from 'react-feather'
import styled from 'styled-components'

const MenuHamStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: 100%;
  border: none;
  padding: 5px;
  margin: 20px;
  cursor: pointer;
  transition: 0.3s ease;

  &:focus,
  :active {
    background-color: #d3d3d350;
  }

  /* The min width should always match the min width used by menu to stop displaying. */
  @media screen and (min-width: 580px) {
    display: none;
  }
`

export default function MenuHam({ setMenuOpen }) {
  return (
    <MenuHamStyle onClick={() => setMenuOpen(true)}>
      <MenuIcon />
    </MenuHamStyle>
  )
}
