import blob from './assets/svg/blob.svg'
import './App.css'
import Main from './components/Main'
import styled from 'styled-components'

const BlobImage = styled.img`
  height: auto;
  max-width: 100vw;
  z-index: -1;
  position: absolute;
  top: 0; left: 0;
`;

function App() {
  return (
    <div className="App">
      <BlobImage src={blob} alt="Background blob" />
      <Main />
    </div>
  )
}

export default App
