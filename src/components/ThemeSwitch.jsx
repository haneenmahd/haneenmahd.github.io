import React from 'react';
import { Sun, Moon } from 'react-feather';
import styled from 'styled-components';
import theme from '../theme/theme';

const Switch = styled.button`
  height: 40px;
  width: 40px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${(props) =>
    props.theme === "dark" ? theme.dark.textColor : theme.light.textColor};

  svg {
    fill: ${(props) =>
      props.theme === "dark" ? theme.dark.textColor : theme.light.textColor};
    stroke: ${(props) =>
      props.theme === "dark" ? theme.dark.textColor : theme.light.textColor};
  }
`;

/**
 * 
 * @param {{
 *   theme: "dark" | "light";
 *   setTheme: (param: any) => void;
 * }} props 
 * @returns 
 */
export default function ThemeSwitch(props) {
  const { theme, setTheme } = props;

  return (
      <Switch theme={props.theme} onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
      }}>
          {theme === "dark" ? <Moon /> : <Sun />}
      </Switch>
  );
}
