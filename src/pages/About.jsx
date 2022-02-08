import { useOutletContext } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import ProfileImage from "../assets/img/pfp.png";
import Links from "../components/Links";
import theme from "../theme/theme";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
  min-height: 100vh;
  max-width: 100vw;
  padding: 50px 7%;
  background: ${(props) =>
    props.theme === "dark" ? theme.dark.mainBg : theme.light.mainBg};
  color: ${(props) =>
    props.theme === "dark" ? theme.dark.textColor : theme.light.textColor};

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

const TextAnimation = keyframes`
    0% {
        opacity: 0.2;
    }

    50% {
        opacity: 0.8;
    }

    100% {
        opacity: 0.2;
    }
`;

const ImageShadowAnimation = keyframes`
    0% {
        box-shadow: 0 20px 20px 0 #7722cc76, 0 20px 20px 0 #2222cc76;
    }

    20% {
        box-shadow: 0 50px 20px 0 #7722cc76, 0 20px 20px 0 #2222cc76;
    }
    
    50% {
        box-shadow: 0 80px 40px 0 #7722cc46, 0 20px 20px 0 #2222cc46
    }

    60% {
        box-shadow: 0 50px 35px 0 #22c9cc46, 0 20px 20px 0 #2222cc76
    }

    85% {
        box-shadow: 0 50px 25px 0 #7722cc76, 0 20px 20px 0 #2222cc76
    }

    100% {
        box-shadow: 0 20px 20px 0 #7722cc76, 0 20px 20px 0 #2222cc76
    }
`;

const Intro = styled.aside`
  text-align: left;
  padding: 20px;
  max-width: 100%;

  * {
    margin: 6px 0;
  }

  h2 {
    font-weight: 800;
  }

  h4 {
    color: ${props => props.theme === "dark" ? theme.dark.lightText : theme.light.lightText};
    font-weight: 600;
    animation: ${TextAnimation} 3s ease-in infinite 1.2s;
  }

  img {
    height: 400px;
    width: 400px;
    margin: 20px 0;
    box-shadow: 0 20px 20px 0 #7722cc76, 0 20px 20px 0 #2222cc76;
    animation: ${ImageShadowAnimation} 5s linear infinite;
    user-select: none;

    @media screen and (max-width: 600px) {
      max-width: 100%;
      height: auto;
    }
  }

  @media screen and (min-width: 820px) {
    position: -webkit-sticky;
    top: 100px;
  }
`;

const InfoGroup = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 700px) {
    margin-left: 20px;
  }
`;

const Info = styled.div`
  text-align: left;
  max-width: 100%;
  color: ${props => props.theme === "dark" ? theme.dark.textColor : theme.light.textColor};

  p {
    color: ${(props) =>
      props.theme === "dark"
        ? theme.dark.lightTextVariant
        : theme.light.lightTextVariant};
    line-height: 1.45rem;
    font-weight: 600;
    margin: 10px 0;
    max-width: 90%;

    b {
      color: ${(props) =>
        props.theme === "dark"
          ? theme.dark.lightTextBold
          : theme.light.lightTextBold};

      ::before,
      ::after {
        content: '"';
      }
    }
  }

  ul {
    padding-left: 20px;
    color: ${(props) =>
      props.theme === "dark"
        ? theme.dark.lightTextVariant
        : theme.light.lightTextVariant};
    line-height: 1.45rem;
    font-weight: 600;
    margin: 20px 0;
    max-width: 90%;
  }
`;

export default function About(props) {
  const [theme] = useOutletContext();

  return (
    <Container theme={theme}>
      <Intro theme={theme}>
        <h2>About Me</h2>
        <img src={ProfileImage} alt="My Pic" />
      </Intro>

      <InfoGroup>
        <Info theme={theme}>
          <h3>Intro</h3>
          <p>
            Hello, I am Haneen Mahdin, an 14 year-old aspiring Full-stack
            Developer building awesome And cool things.
          </p>
        </Info>

        <Info theme={theme}>
          <h3>Journey</h3>
          <p>
            I was 12 years-old when i first got to code a cool website in HTML
            and CSS from a FreeCodeCamp.org's crash course. I was really
            interested in design at first.{" "}
            <b>I believed in that good design can make a product better</b>. I
            started to learn web development deeply by creating websites using{" "}
            <b>React</b>. I learned <b>UI/UX</b> Design later that year. Then I
            moved on to learning Backend Development with <b>Node.js</b> with{" "}
            <b>MongoDB</b>. Tried building my own APIs, failed a lot, but never
            gave up 💪🏻. I learned to build apps using <b>React Native</b> and{" "}
            <b>Expo</b> afterwards. I started re-searching about new and latest
            technologies and still continue to learn new things😃!
          </p>
        </Info>

        <Info theme={theme}>
          <h3>Technologies I use 🚀</h3>
          <ul>
            <li>HTML, CSS, Javascript</li>
            <li>React, Vite, Next.js, Styled Components, Sass</li>
            <li>React Native, Expo</li>
            <li>Node.js, MongoDB, Express</li>
            <li>Python, C, C++</li>
            <li>Swift (learning 😋)</li>
            <li>VSCode, Git, GitHub</li>
          </ul>
        </Info>

        <Info theme={theme}>
          <h3>Keep in touch 🥀</h3>
          <p>
            I love to get to know more people in this Tech Community and am
            interested to join in your project or team or company. If you are
            interested to have a nice talk or something you can text me on{" "}
            <i>Instagram</i>, <i>Twitter</i> or get me a <i>Mail</i>.
          </p>
          <Links />
        </Info>
      </InfoGroup>
    </Container>
  );
}
