import React from 'react'
import styled from 'styled-components'
import theme from '../theme/theme'

const Container = styled.div`
  height: 30px;
  width: 30px;
  position: relative;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 10px;
  background-color: ${(props) => (props.toggled ? '#d3d3d330' : 'transparent')};
  transition: all 0.3s;

  &:hover span {
    background-color: ${(props) =>
      props.theme === 'dark' ? theme.dark.textColor : theme.light.textColor};
  }
`

const Ham = styled.span`
  height: 3px;
  width: 90%;
  margin: 2.5px 0;
  border-radius: 20px;
  background: ${(props) =>
    props.theme === 'dark' ? theme.dark.lightText : theme.light.lightText};
`

/**
 *
 * @param {{
 *   theme: "dark" | "light";
 *   toggled: boolean;
 *   setToggle: (state) => void;
 * }} props
 * @returns
 */
export default function NavMenu(props) {
  const toggled = props.toggled,
    setToggle = props.setToggle

  return (
    <Container
      theme={props.theme}
      toggled={toggled}
      onClick={() => setToggle(!toggled)}
    >
      <Ham theme={props.theme} />
      <Ham theme={props.theme} />
      <Ham theme={props.theme} />
    </Container>
  )
}
