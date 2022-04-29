import styled from "styled-components";
import NavLink from "./NavLink";
import { Heading, Paragraph } from "./Text";
import { X as XIcon } from "react-feather";

const MenuStyle = styled.div`
  position: absolute;
  top: 0;
  left: ${(p) => (p.open ? `0` : '-100%')};
  padding: 30px;
  width: 300px;
  height: 100vh;
  background-color: #ffffffb5;
  border-right: 1px solid #d3d3d3;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 100;
  transition: 0.3s ease;

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

const CloseButton = styled.button`
  background-color: transparent;
  border-radius: 100%;
  border: none;
  padding: 5px;
  margin: 0;
  cursor: pointer;
  transition: 0.3s ease;

  &:focus, :active {
    background-color: #d3d3d350;
  }
`

export default function Menu({
  open,
  setOpen
}) {
  return (
    <MenuStyle open={open}>
      <HeaderContainer>
        <CustomisedHeading>Menu</CustomisedHeading>
        <CloseButton onClick={() => setOpen(false)}>
          <XIcon />
        </CloseButton>
      </HeaderContainer>

      <LinksContainer>
        <NavLink to="/work" text="Work" />
        <NavLink to="/blog" text="Blog" />
        <NavLink to="/store" text="Store" />
        <NavLink to="/hire-me" text="Hire me" />
      </LinksContainer>
    </MenuStyle>
  )
}
