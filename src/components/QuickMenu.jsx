import React, { useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import {
  ArrowDown,
  Mail,
  Menu as MenuIcon,
  X as CloseIcon,
} from 'react-feather'
import Link from './Link'

const MENU_TRANSITION = '300ms ease;'

const MenuButton = styled.button`
  height: 50px;
  width: 50px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #166edc;
  color: #fff;
  border: none;
  outline: none;
  border-radius: 100px;
  cursor: pointer;
  position: absolute;
  bottom: 2%;
  right: 3%;
  box-shadow: -5px 10px 50px 0 #166edc50;
  z-index: 101;
  transition: ${MENU_TRANSITION};

  &:active {
    scale: 0.95;
  }

  ${(p) =>
    p.open &&
    css`
      background-color: #fafafa;
      color: #166edc;
    `}
`

const Menu = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100vh;
  width: 100vw;
  background: #166edc;
  opacity: 0;
  scale: 0;
  border-radius: 500px;
  z-index: 100;
  transition: ${MENU_TRANSITION};

  ${(p) =>
    p.open &&
    css`
      opacity: 1;
      scale: 1;
      border-radius: 0%;
    `}
`

const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  max-width: 100%;
  color: #fff;
  padding: 3rem;

  > * {
    margin: 2rem 0;
  }

  p {
    font-size: 100%;
    line-height: 1.8rem;
  }
`

export default function QuickMenu() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <MenuButton open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </MenuButton>

      <Menu open={menuOpen}>
        <MenuContent>
          <p>
            Hello, there 👋! <br /> I hope you are having a good day ☀️. <br />
            <br /> I am Haneen Mahdin, a full-stack developer, designer, and
            videographer. <br />
            <br /> If you're here looking to improve your digital product or
            build a product from scratch or looking into creating aesthetic
            content, hit me up 🤙!
          </p>

          <Link
            name="Email me"
            target="_blank"
            href="mailto:haneenmahdin@gmail.com"
            text={<Mail color="#fff" size={28} />}
          />
        </MenuContent>
      </Menu>
    </>
  )
}
