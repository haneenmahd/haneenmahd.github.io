import styled from 'styled-components'

const ButtonStyle = styled.button`
  height: 40px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
  -webkit-appearance: button;
  text-transform: none;
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  color: #fafafa;
  background-color: #111;
  padding: 5px 15px;
  width: max-content;
  max-width: 100%;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: #1a1a1a;
  }
`

const Button = ({ action, children = 'Button' }) => {
  return <ButtonStyle onClick={action}>{children}</ButtonStyle>
}

export default Button
