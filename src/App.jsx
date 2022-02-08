import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Projects from "./pages/Projects";
import About from "./pages/About";
import styled from "styled-components";
import theme from "./theme/theme";

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

function App() {
  return (
    <AppStyle theme="light">
      <NavBar />
      <Main />
      <Projects showMoreLinks />
      <About />
    </AppStyle>
  );
}

export default App;
