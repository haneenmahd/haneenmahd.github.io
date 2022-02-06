import blob from './assets/png/BeachDay.png'
import './App.css'
import Main from './components/Main'
import styled from 'styled-components'
import Links from './components/Links';

const BlobImage = styled.img`
  height: auto;
  width: 100vw;
  z-index: -1;
  position: fixed;
  top: 0; left: 0;
`;

function App() {
  return (
    <div className="App">
      <BlobImage src={blob} alt="Background Image" />
      <Main />
    </div>
  )
}

export default App
