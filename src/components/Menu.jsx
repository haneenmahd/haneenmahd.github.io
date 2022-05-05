import styled from 'styled-components'
import NavLink from './NavLink'
import { Heading } from './Text'
import { X as XIcon } from 'react-feather'

const MenuStyle = styled.div`
  position: fixed;
  top: 0;
  left: ${(p) => (p.open ? '0' : '-100%')};
  padding: 30px;
  min-width: 200px;
  max-width: 300px;
  height: 100vh;
  color: #fafafa;
  background-color: #1c1c1c;
  z-index: 100;
  box-shadow: ${(p) => (p.open ? '100px 0 100px 100vw #fafafa40' : 'none')};
  transition: left 0.3s ease, box-shadow 0.45s ease-in;

  @media screen and (min-width: 580px) {
    display: none;
  }
`

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const CustomisedHeading = styled(Heading)`
  font-size: 20px;
`

const LinksContainer = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: column;

  a {
    margin: 20px 0;
    font-size: 16px;
  }
`

const CloseButton = styled.span`
  background-color: transparent;
  border-radius: 100%;
  border: none;
  padding: 5px;
  height: 25px;
  width: 25px;
  margin: 0;
  cursor: pointer;
  transition: 0.3s ease;

  &:focus,
  :active {
    background-color: #d3d3d350;
  }
`

export default function Menu({ open, setOpen }) {
  return (
    <MenuStyle open={open}>
      <HeaderContainer>
        <CustomisedHeading>Menu</CustomisedHeading>
        <CloseButton onClick={() => setOpen(false)}>
          <XIcon />
        </CloseButton>
      </HeaderContainer>

      <LinksContainer>
        <NavLink mode="dark" to="/work" text="Work" />
        <NavLink mode="dark" to="/blog" text="Blog" />
        <NavLink mode="dark" to="/store" text="Store" />
        <NavLink mode="dark" to="/hire-me" text="Hire me" />
      </LinksContainer>
    </MenuStyle>
  )
}
