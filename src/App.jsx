import { useState } from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Projects from "./pages/Projects";
import About from "./pages/About";
import styled from "styled-components";
import theme from "./theme/theme";
import { useOutletContext } from "react-router-dom";

const AppStyle = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  text-align: center;
  background-color: ${(props) =>
    props.theme === "dark" ? theme.dark.mainBg : theme.light.mainBg};
  color: ${(props) =>
    props.theme === "dark" ? theme.dark.textColor : theme.light.textColor};

  &.page {
    padding-top: 80px;
  }
`;

function App(props) {
  const [theme, setTheme] = useOutletContext();
  
  return (
    <AppStyle theme={theme}>
      <NavBar theme={theme} setTheme={(theme) => setTheme(theme)} />
      <Main theme={theme} />
      <Projects theme={theme} showMoreLinks />
      <About theme={theme} />
    </AppStyle>
  );
}

export default App;
